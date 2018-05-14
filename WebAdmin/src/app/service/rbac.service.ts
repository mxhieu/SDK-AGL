import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum UserApiUrls {
	get = 'user',
	new = 'user',
	delete = 'user/delete',
	update = 'user/edit',
}

enum RoleApiUrls {
	get = 'role',
	new = 'role',
	getall = 'role/all',
	delete = 'role/delete',
	update = 'role/edit',
}

enum PermissionApiUrls {
	get = 'permission',
	new = 'permission',
	gen = 'permission/generation',
	getall = 'permission/all',
	delete = 'permission/delete',
	update = 'permission/edit',
}

@Injectable()
export class RbacService extends BaseService {
	// USER
	getUsers(params, callback) {
		this.get(this.getRestUrl(UserApiUrls.get), params, data => { callback(Array.isArray(data) ? data : []); });
	}

	insertUser(params, callback) {
		this.post(this.getRestUrl(UserApiUrls.new), JSON.stringify(params), null, data => { callback(data); });
	}
	
	updateUser(params, callback) {
		this.post(this.getRestUrl(UserApiUrls.update), JSON.stringify(params), null, data => { callback(data); });
	}

	deleteUser(params, callback) {
		this.get(this.getRestUrl(UserApiUrls.delete), params, data => { callback(data); });
	}

	// ROLE
	getRoles(params, callback) {
		this.get(this.getRestUrl(RoleApiUrls.get), params, data => { callback(Array.isArray(data) ? data : []); });
	}

	getallRoles(params, callback) {
		this.get(this.getRestUrl(RoleApiUrls.getall), params, data => { callback(Array.isArray(data) ? data : []); });
	}

	insertRole(params, callback) {
		this.post(this.getRestUrl(RoleApiUrls.new), JSON.stringify(params), null, data => { callback(data); });
	}
	
	updateRole(params, callback) {
		this.post(this.getRestUrl(RoleApiUrls.update), JSON.stringify(params), null, data => { callback(data); });
	}

	deleteRole(params, callback) {
		this.get(this.getRestUrl(RoleApiUrls.delete), params, data => { callback(data); });
	}

	// PERMISSION
	getPermissions(params, callback) {
		this.get(this.getRestUrl(PermissionApiUrls.get), params, data => { callback(Array.isArray(data) ? data : []); });
	}

	getallPermissions(params, callback) {
		this.get(this.getRestUrl(PermissionApiUrls.getall), params, data => { callback(Array.isArray(data) ? data : []); });
	}

	genPermissions(params, callback) {
		this.get(this.getRestUrl(PermissionApiUrls.gen), params, data => { callback(Array.isArray(data) ? data : []); });
	}

	insertPermission(params, callback) {
		this.post(this.getRestUrl(PermissionApiUrls.new), JSON.stringify(params), null, data => { callback(data); });
	}
	
	updatePermission(params, callback) {
		this.post(this.getRestUrl(PermissionApiUrls.update), JSON.stringify(params), null, data => { callback(data); });
	}
}