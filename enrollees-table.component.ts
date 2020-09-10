import { Component, OnInit } from '@angular/core';
import { EnrolleesTableService } from './shared/enrollees-table.service';

@Component({
	selector: 'enrollees-table',
	templateUrl: 'enrollees-table.component.html',
	providers: [EnrolleesTableService]
})

export class EnrolleesTableComponent implements OnInit {

	constructor(private enrolleesTableService: EnrolleesTableService) { }

	headers: any[] = [{
		displayName: 'Id',
		field: 'id'
	},
	{
		displayName: 'Active',
		field: 'active'
	},
	{
		displayName: 'Name',
		field: 'name'
	}, {
		displayName: 'Date of Birth',
		field: 'dateOfBirth'
	}
	];

	tableData: any[] = [];

	ngOnInit() {
		this.enrolleesTableService.getEnrollees().subscribe(
			(res: any[]) => {
				this.tableData = res;
			}
		)
	}

	updateEnrollee(row) {
		console.log(row)
		this.enrolleesTableService.updateEnrollee({ ...row }).subscribe(
			res => {
				console.log('Updated Successfully');
			}
		)
	}
}