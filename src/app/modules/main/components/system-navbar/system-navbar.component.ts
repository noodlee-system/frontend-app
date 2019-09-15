import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'system-navbar',
    templateUrl: './system-navbar.component.html'
})
export class SystemNavbarComponent implements OnInit {
    @Input() notifications: Object[];
    @Input() user: Object;

    searchForm: FormGroup;

    constructor(
        private authentication: AuthenticationService,
        private router: Router,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            phrase: ['', Validators.required]
        });
    }

    logout() {
        this.authentication.logout();
    }

    goToUserProfile() {
        this.router.navigate(['user']);
    }

    sendSearchForm(searchForm: FormGroup) {
        console.warn(searchForm.value);
    }
}
