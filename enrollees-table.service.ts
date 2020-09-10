import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EnrolleesTableService {

	constructor(private http: HttpClient) {

	}

	updateEnrollee(row) {
		let id = row.id;
		delete row['id'];
		return this.http.put(`http://localhost:8080/enrollees/${id}`, row);
	}

	getEnrollees() {
		return this.http.get("http://localhost:8080/enrollees");
	}

}