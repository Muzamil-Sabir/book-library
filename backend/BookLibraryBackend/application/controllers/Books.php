<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Books extends CI_Controller {

	 public function __construct() {
        parent::__construct();
         header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $this->load->helper('url');
        $this->load->database();
       

    }
	public function getBooks($id=0)
	{
		if($id==0){
		$query=$this->db->get("books");
    	$result= $query->result();
    }else{
    	$query=$this->db->where('book_id',$id)->get("books");
    	$result= $query->result();
    }

		print json_encode($result,JSON_PRETTY_PRINT);
	}
	
	public function addBook(){
		$addBook['book_name'] = $this->input->post("bookname");
		$addBook['description'] = $this->input->post("description");
		$addBook['book_author'] = $this->input->post("author");
		$addBook['published_on'] = $this->input->post("published_on");

		$currTime = date('Y-m-d H:i:s');
              $explodedArr = explode(":",$currTime);
              $flagIdentify1=$explodedArr[0];
              $flagIdentify2=$explodedArr[1];
              $flagIdentify3=$explodedArr[2];
              $finalDate=$flagIdentify1."-".$flagIdentify2."-".$flagIdentify3;

               if(!empty($_FILES['bookimg']['name'])){
              $dir="Book_images/";
              $book_img=$_FILES['bookimg']['name'];
              $temp_name=$_FILES['bookimg']['tmp_name'];
              $book_img= $finalDate.'_'.$book_img;
              $fdir= $dir.$book_img;
              move_uploaded_file($temp_name,$fdir);}
              $addBook['image'] = $book_img;
               $response = $this->db->insert('books',$addBook);
               if($response){
               	$response = array("msg" => "success","result"=>"Book Uploaded Successfully");
               }else{
               	$response = array("msg" => "Error","result"=>"Book Uploading Failed");
               }
               print json_encode($response,JSON_PRETTY_PRINT);
	}

	public function updateBook($id){
		$bookname = $this->input->post("bookname");
		$description = $this->input->post("description");
		$book_author = $this->input->post("author");
		$published_on = $this->input->post("published_on");

		$this->db->where('book_id', $id);
              $this->db->set('book_name',$bookname);
              $this->db->set('description',$description);
              $this->db->set('book_author',$book_author);
              $this->db->set('published_on',$published_on);
                 $this->db->update('books');
              $response = array("msg" => "success","result"=>"Book Updated Successfully");
               print json_encode($response,JSON_PRETTY_PRINT);

	}

	public function deleteBook($id){
		$query=$this->db->query("delete from books where book_id='".$id."'");
		$response=array("msg"=>"success","result"=>"Book Deleted Successfully");
		print json_encode($response,JSON_PRETTY_PRINT);

	}

	public function getBookRequest(){

		$query=$this->db->query("SELECT users.name,users.email,books.book_name,books.book_author,book_requests.status,book_requests.requested_at,book_requests.id from users JOIN book_requests on users.user_id = book_requests.user_id JOIN books ON books.book_id = book_requests.book_id WHERE book_requests.status = 'pending' or book_requests.status='rejected'");
			$result = $query->result();
			
			
			
			print json_encode($result,JSON_PRETTY_PRINT);
	}

	public function approveRequest($id){
		date_default_timezone_set("Europe/London");
		$datetime =  date("Y-m-d H:i:s");
			$this->db->where('id', $id);
              $this->db->set('status','assigned');
              $this->db->set('assigned_at',$datetime);
           	 $this->db->update('book_requests');
           	 $response = array("msg"=>"success","data"=>"Book Assigned Success");
           	 print json_encode($response,JSON_PRETTY_PRINT);
	}

	public function rejectRequest($id){
		date_default_timezone_set("Europe/London");
		$datetime =  date("Y-m-d H:i:s");
			$this->db->where('id', $id);
              $this->db->set('status','rejected');
              $this->db->set('assigned_at',$datetime);
           	 $this->db->update('book_requests');
           	 $response = array("msg"=>"success","data"=>"Book Request Rejected Success");
           	 print json_encode($response,JSON_PRETTY_PRINT);
	}

	public function assignedList(){
		$query=$this->db->query("SELECT users.name,users.email,books.book_name,books.book_author,book_requests.status,book_requests.requested_at,book_requests.assigned_at from users JOIN book_requests on users.user_id = book_requests.user_id JOIN books ON books.book_id = book_requests.book_id WHERE book_requests.status = 'assigned'");
			$result = $query->result();
			

			
			print json_encode($result,JSON_PRETTY_PRINT);
	}

	public function requestBook($book_id,$user_id){
			$this->db->where('book_id', $book_id);
			$this->db->where('user_id', $user_id);
			$result =$this->db->get('book_requests');

			if($result->num_rows()>0){
				$data = array("data" => "Book Already Requested","msg"=>"Failed");
			}else{
				$req['book_id']=$book_id;
				$req['user_id']=$user_id;
				$this->db->insert('book_requests',$req);
				$data = array("data" => "Book Requested Successfully","msg"=>"success");
			}
			print json_encode($data,JSON_PRETTY_PRINT);
	}
}
