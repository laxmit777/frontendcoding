import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { EnrolleesTableComponent } from './enrollees-table.component';
import { EnrolleesTableService } from './shared/enrollees-table.service';
import { EnrolleesTable } from './shared/enrollees-table.model';

describe('a enrollees-table component', () => {
	let component: EnrolleesTableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: EnrolleesTableService, useClass: MockEnrolleesTableService },
				EnrolleesTableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EnrolleesTableComponent], (EnrolleesTableComponent) => {
		component = EnrolleesTableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original enrollees-table service
class MockEnrolleesTableService extends EnrolleesTableService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
