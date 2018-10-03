(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/app-setting/app-setting.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/app-setting/app-setting.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h5>Information</h5>\n                </div>\n                <div class=\"col-md-8 col-lg-8\">\n                    <div class=\"btn-group tright\" dropdown>\n                        <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"margin:0px;\">\n                        {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                        </button>\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                            <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\">\n                                <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"form-group row\">\n                <div class=\"col-md-3 col-lg-3 tBoxWrapper\">\n                    <label class=\"col-form-label\"><span class=\"badge badge-pill badge-primary\">App ICON</span></label>\n                    <label for=\"imageUpload1\" class=\"col-form-label btn btn-outline-primary tBottomButton\" style=\"background: #fff\">\n                        <i class=\"icon-cloud-upload\"> </i>\n                    </label>\n                    <input id = \"imageUpload1\" type=\"file\" (change)=\"fileChanged($event, 0)\" \n                    placeholder=\"Upload file\" accept=\"image/*\" style=\"display: none\">\n                    <img [src]=\"getUrl(appInfo.icon)\" (error)=\"onImageLoadedError($event)\" class=\"tIconX2 tCenterImage\" />\n                </div>\n                <div class=\"col-md-3 col-lg-3\"></div>\n                <div class=\"col-md-3 col-lg-3 tBoxWrapper\">\n                    <label class=\"col-form-label\"><span class=\"badge badge-pill badge-primary\">App LOGO</span></label>\n                    <label for=\"imageUpload2\" class=\"btn btn-outline-primary tBottomButton\" style=\"background: #fff\">\n                        <i class=\"icon-cloud-upload\"></i>\n                    </label>\n                    <input id = \"imageUpload2\" type=\"file\" (change)=\"fileChanged($event, 1)\"\n                    placeholder=\"Upload file\" accept=\"image/*\" style=\"display: none\">\n                    <img [src]=\"getUrl(appInfo.logo)\" (error)=\"onImageLoadedError($event)\" class=\"tIconX2 tCenterImage\" />\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-lg-6 col-md-6\">\n                    <label class=\"col-form-label\">Application Id</label>\n                    <input class=\"form-control\" type=\"text\" disabled value=\"{{appInfo._id}}\" readonly=\"readonly\">\n                </div>\n                <div class=\"col-lg-6 col-md-6\">\n                    <label class=\"col-form-label\">Application Key</label>\n                    <div class=\"row\">\n                        <div class=\"col-lg-8 col-md-8\">\n                            <input class=\"form-control\" type=\"text\" disabled value=\"{{appInfo.key}}\" readonly=\"readonly\">\n                        </div>\n                        <div class=\"col-lg-4 col-md-4\">\n                            <button class=\"btn btn-sm btn-danger tright\" type=\"submit\">\n                            <i class=\"icon-refresh\"></i> Reset\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"col-form-label-none\">Enable app</label>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\">\n                                <input type=\"checkbox\" class=\"switch-input\" [checked]=\"appInfo.is_active\" (change)=(onStatusChange())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"col-form-label-none\">Basic authorization</label>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\">\n                                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"appInfo.settings.is_formal_auth_enable\" (change)=(update())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"col-form-label-none\">Quick play</label>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\">\n                                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"appInfo.settings.is_quickplay_enable\" (change)=(update())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"col-form-label-none\">In-app purchase</label>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\">\n                                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"appInfo.settings.is_inapp_purchase_enable\" (change)=(update())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-3\">\n                            <label class=\"col-form-label-none\" style=\"vertical-align: middle;\">Full registeration</label>\n                        </div>\n                        <div class=\"col-lg-5 col-md-5\">\n                            <input class=\"form-control\" type=\"text\" style=\"vertical-align: middle;\" \n                            [(ngModel)]=\"appInfo.full_register_url\">\n                        </div>\n                        <div class=\"col-lg-2 col-md-2\">\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"update()\"><i class=\"icon-check\"></i> Save</button>\n                        </div>\n                        <div class=\"col-lg-2 col-md-2\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\" style=\"vertical-align: middle;\">\n                                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"appInfo.settings.is_full_register_enable\"\n                                 (change)=(update())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-md-6\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"col-form-label-none\">Facebook authorization</label>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\">\n                                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"appInfo.settings.is_facebook_auth_enable\" (change)=(update())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"col-form-label-none\">Google authorization</label>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\">\n                                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"appInfo.settings.is_google_auth_enable\" (change)=(update())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"col-form-label-none\">Card purchase</label>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\">\n                                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"appInfo.settings.is_card_purchase_enable\" (change)=(update())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-3\">\n                            <label class=\"col-form-label-none\" style=\"vertical-align: middle;\">Force update</label>\n                        </div>\n                        <div class=\"col-lg-5 col-md-5\">\n                            <input class=\"form-control\" type=\"text\" style=\"vertical-align: middle;\" [(ngModel)]=\"appInfo.force_update_url\">\n                        </div>\n                        <div class=\"col-lg-2 col-md-2\">\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"update()\"><i class=\"icon-check\"></i> Save</button>\n                        </div>\n                        <div class=\"col-lg-2 col-md-2\">\n                            <label class=\"switch switch-text switch-pill switch-info tright\" style=\"vertical-align: middle;\">\n                                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"appInfo.settings.is_force_update\" (change)=(update())>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <hr/>\n            <span class=\"badge badge-warning\">Basic Config</span>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">BundleId/Package name</label>\n                    <input class=\"form-control\" type=\"text\" name=\"bundle_id\" [(ngModel)]=\"appInfo.bundle_id\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Name</label>\n                    <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"appInfo.name\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Description</label>\n                    <input class=\"form-control\" placeholder=\"Description\" type=\"text\" name=\"desc\" [(ngModel)]=\"appInfo.desc\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Store URL</label>\n                    <input class=\"form-control\" type=\"text\" name=\"storeurl\" placeholder=\"Storeurl\" [(ngModel)]=\"appInfo.storeurl\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">App version</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.version\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Support URL</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.support_url\">\n                </div>\n            </div>\n            <hr/>\n            <span class=\"badge badge-primary\">Facebook Config</span>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Facebook App Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.facebook_app_id\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Facebook App Secret</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.facebook_app_secret\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Facebook Access Token</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.facebook_access_token\">\n                </div>\n            </div>\n            <hr/>\n            <span class=\"badge badge-dark\">Appsflyer Config</span>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Appsflyer Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.appsflyer_id\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Appsflyer Key</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.appsflyer_key\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Mopub Ad Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.mopub_ad_unit_id\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Store Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.store_id\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">AppsFlyer API Token</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.appsflyer_api_token\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Exchange rate (Tỉ giá USD - VND)</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.currency_USD_VND\">\n                </div>\n\n            </div>\n            <hr/>\n            <span class=\"badge badge-success\">Google IAP Verification</span>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">Google Client Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.google_client_id\">\n                </div>\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">Google Client Secret</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.google_client_secret\">\n                </div>\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">Google Refresh Token Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.google_refresh_token\">\n                </div>\n            </div>\n            <hr/>\n            <span class=\"badge badge-success\">Firebase FCM</span>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">FCM Database Url</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.fcm_database_url\">\n                </div>\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">FCM Private File</label>\n                    <label for=\"imageUpload3\" class=\"col-form-label btn btn-outline-primary\" style=\"background: #fff\">\n                        <i class=\"icon-cloud-upload\"> </i>\n                    </label>\n                    <input id = \"imageUpload3\" type=\"file\" (change)=\"fileChanged($event, 3)\" \n                    placeholder=\"Upload file\" accept=\"*/*\" style=\"display: none\">\n                    <input class=\"form-control\"  disabled=\"true\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.fcm_private_file\">\n                </div>\n            </div>\n            <span class=\"badge badge-info\">Google Auth Verification</span>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">Auth Google Client Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.auth_google_client_id\">\n                </div>\n            </div>\n            <hr/>\n            <span class=\"badge badge-success\">APNS Config</span>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">APNS Key Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.apns_key_id\">\n                </div>\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">APNS Team Id</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.apns_team_id\">\n                </div>\n                <div class=\"col-md-4 col-lg-4\">\n                    <label class=\"col-form-label\">APNS Private File</label>\n                    <label for=\"imageUpload4\" class=\"col-form-label btn btn-outline-primary\" style=\"background: #fff\">\n                        <i class=\"icon-cloud-upload\"> </i>\n                    </label>\n                    <input id = \"imageUpload4\" type=\"file\" (change)=\"fileChanged($event, 4)\" \n                    placeholder=\"Upload file\" accept=\"*/*\" style=\"display: none\">\n                    <input class=\"form-control\"  disabled=\"true\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.apns_private_file\">\n                </div>\n            </div>\n            <hr/>\n            <span class=\"badge badge-danger\">100D Secret</span>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Authorization Secret</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.authorization_secret\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Verify Authorization Secret</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.verify_authorization_secret\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Agent</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.pp_agent\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Secret</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.pp_secret\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Key</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.pp_key\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">Encrypt Key</label>\n                    <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"appInfo.pp_encrypt_key\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">100d ID Endpoint</label>\n                    <input class=\"form-control\" type=\"text\" name=\"id_endpoint\" [(ngModel)]=\"appInfo.id_endpoint\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">100d Passport Endpoint</label>\n                    <input class=\"form-control\" type=\"text\" name=\"passport_endpoint\" [(ngModel)]=\"appInfo.passport_endpoint\">\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <label class=\"col-form-label\">100d IAP Endpoint</label>\n                    <input class=\"form-control\" type=\"text\" name=\"iap_endpoint\" [(ngModel)]=\"appInfo.iap_endpoint\">\n                </div>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <button class=\"btn btn-sm btn-primary tright\" (click)=\"update()\"><i class=\"icon-check\"></i> Save </button>\n            <button class=\"btn btn-sm btn-danger tright\" (click)=\"delete()\"><i class=\"fa fa-trash-o\"></i> Delete </button>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6\">\n                    <h5 class=\"card-title\">Promote Images\n                    <span class=\"badge badge-danger\">{{appInfo.promote_images.length}}</span>\n                    </h5>\n                </div>\n                <div class=\"col-lg-6 col-md-6\">\n                    <label for=\"imageUpload3\" class=\"col-form-label btn btn-outline-primary tright\" style=\"margin: 0;\">\n                        <i class=\"icon-cloud-upload\"> </i> Upload\n                    </label>\n                    <input id=\"imageUpload3\" class=\"tright\" type=\"file\" (change)=\"fileChanged($event, 2)\" \n                    placeholder=\"Upload\" accept=\"image/*\" style=\"display: none;\">\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row form-group promote_images_wrapper\" *ngFor=\"let item of appInfo.promote_images; let i=index\">\n                <div class=\"col-lg-2 col-md-2 tBoxWrapper\">\n                    <button class=\"btn btn-danger tBottomButton\" (click)=\"deletePromoteImage(i)\">\n                        <i class=\"icon-trash\"></i>\n                    </button>\n                    <img class=\"promote_image tCenterImage\" [src]=\"getUrl(item.image)\" (error)=\"onImageLoadedError($event)\"/>\n                </div>\n                <div class=\"col-md-10 col-lg-10\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-lg-6\">\n                            <label class=\"col-form-label\">Title</label>\n                            <input class=\"form-control\" type=\"text\" name=\"version\" [(ngModel)]=\"item.title\">\n                        </div>\n                        <div class=\"col-md-6 col-lg-6\">\n                            <label class=\"col-form-label\">Redirect URL</label>\n                            <input class=\"form-control\" type=\"text\" name=\"redirecturl\" placeholder=\"Redirect URL\"\n                            [(ngModel)]=\"item.click_url\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <button class=\"btn btn-sm btn-primary tright\" (click)=\"update()\"><i class=\"icon-check\"></i> Save </button>\n        </div>\n    </div>\n    \n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Reward videos</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12\">\n                    <div class=\"radio\" *ngFor=\"let entry of entries;\">\n                        <input type=\"radio\" name=\"radiogroup\" class=\"tpointer\" (change)=\"onSelectionChange(entry)\" [checked]=\"appInfo.video_reward_filter_type === entry.filter_type\" [value]=\"entry.filter_type\"> {{ entry.name }}\n                    </div>\n                    <br/>\n                    <textarea [(ngModel)]=\"playerIds\" class=\"form-control\" placeholder=\"Player ids ...\" rows=\"5\" [hidden]=\"!isImportAreaShow\"></textarea>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12\">\n                    <button class=\"btn btn-sm btn-success tright\" type=\"submit\" (click)=\"import()\">\n                    <i class=\"fa fa-clone\"></i> Import\n                    </button>\n                </div>\n            </div>\n            <hr/>\n            <div [hidden]=\"!isImportAreaShow\">\n                <div class=\"card-tools\">\n                    <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                        <option *ngFor=\"let perheader of header\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                    </select><i class=\"icon-arrow-down sel-ico\"></i>\n                    <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                    <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                    <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteAll()\">\n                    <i class=\"icon-trash \"></i> Delete All\n                    </button>\n                </div>\n                <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                    <thead class=\"thead-default\">\n                        <tr>\n                            <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}}\">{{perheader.name}}</th>\n                            <th class=\"tMiddle\">#</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let d of dataIds\">\n                            <td>{{d.player_id._id}}</td>\n                            <td>{{d.player_id.email}}</td>\n                            <td>{{d.player_id.username}}</td>\n                            <td class=\"text-center tMiddle\">\n                                <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteAd($event, d)\">\n                                <i class=\"icon-trash \"></i>\n                                </button>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"100%\" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                                <</button>\n                                <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                                <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                                <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                                <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                    <option value=\"10\" selected>10</option>\n                                    <option value=\"50\" selected>50</option>\n                                    <option value=\"100\" selected>100</option>\n                                </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/app-setting/app-setting.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/app-setting/app-setting.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".key-class {\n  min-width: 320px; }\n\n.card-block {\n  padding: 1.5rem; }\n\n.col-form-label-none {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n\n.tIcon {\n  width: 72px;\n  height: 72px; }\n\n.tIconX2 {\n  width: 172px;\n  height: 172px; }\n\nlabel {\n  margin-bottom: 0px; }\n\n.tBoxWrapper {\n  position: relative; }\n\n.tBottomButton {\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n  z-index: 2; }\n\n.tCenterImage {\n  float: left;\n  z-index: 1; }\n\n.promote_images_wrapper {\n  /* overflow: hidden;\n\theight: 256px; */ }\n\n.promote_image {\n  width: 100%;\n  height: auto; }\n\n.promote_image_top_right_corner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 0 !important; }\n"

/***/ }),

/***/ "./src/app/dashboard/app-setting/app-setting.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/app-setting/app-setting.component.ts ***!
  \****************************************************************/
/*! exports provided: AppSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingComponent", function() { return AppSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/service/group.service.ts");
/* harmony import */ var _service_player_ads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/player-ads.service */ "./src/app/service/player-ads.service.ts");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/base.component */ "./src/app/service/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppSettingComponent = /** @class */ (function (_super) {
    __extends(AppSettingComponent, _super);
    function AppSettingComponent(service, playerAdsService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.playerAdsService = playerAdsService;
        _this.dataIds = [];
        _this.app = { 'app_id': '', 'os': '', 'version': '' };
        _this.entries = [
            { 'id': 1, 'name': 'Chọn tất cả', 'filter_type': 'all' },
            { 'id': 2, 'name': 'Chọn tất cả user chưa nạp tiền', 'filter_type': 'user_not_pay' },
            { 'id': 3, 'name': 'Tuỳ chọn', 'filter_type': 'list_defined_users' }
        ];
        _this.appInfo = {
            'settings': {},
            'version': 1.0,
            'icon': '',
            'promote_images': [],
            'logo': ''
        };
        _this.isnext = true;
        _this.isImportAreaShow = false;
        _this.search = { field: 'player_id', term: '' };
        _this.paging = _this.service.defaultPaging('created_at');
        _this.header = [
            { id: 'player_id', name: 'Player Id', is_search: 1, st_col: 'player_id', st_type: 1 },
            { id: 'email', name: 'Email', is_search: 1, st_col: 'email', st_type: 1 },
            { id: 'username', name: 'Username', is_search: 1, st_col: 'player_id', st_type: 1 }
        ];
        return _this;
    }
    AppSettingComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AppSettingComponent.prototype.refresh = function () {
        if (!this.service.isExpired()) {
            this.getDetail();
            this.getApps();
        }
    };
    AppSettingComponent.prototype.getApps = function () {
        this.app.app_id = this.service.getAppId();
        this.apps = this.service.getGroupSetting();
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var ap = _a[_i];
            if (ap.app_id == this.app.app_id) {
                this.app.os = ap.os;
                this.app.version = ap.version;
            }
        }
    };
    AppSettingComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.refresh();
    };
    AppSettingComponent.prototype.getDetail = function () {
        var _this = this;
        this.service.detailApp({ 'id': this.service.getAppId() }, function (data) {
            _this.appInfo = data;
            if (_this.appInfo.video_reward_filter_type == 'list_defined_users') {
                _this.isImportAreaShow = true;
                _this.getPlayerAds();
            }
        });
    };
    AppSettingComponent.prototype.getPlayerAds = function () {
        var _this = this;
        var _a;
        this.playerAdsService.getAdsPlayers((_a = {
                'search_app_id': this.service.getAppId(),
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type
            },
            _a['search_' + this.search.field] = this.search.term,
            _a), function (data) {
            _this.dataIds = data;
        });
    };
    /*
    Import player id to be show ad
    */
    AppSettingComponent.prototype.import = function () {
        var _this = this;
        if (this.appInfo.video_reward_filter_type == 'list_defined_users') {
            var params = {
                "app_id": this.service.getAppId(),
                "filter_type": this.appInfo.video_reward_filter_type,
                "player_ids": this.playerIds
            };
            this.playerAdsService.add(params, function (data) {
                _this.getPlayerAds();
            });
        }
        this.update();
    };
    AppSettingComponent.prototype.resetKey = function () {
        var _this = this;
        if (window.confirm('Bạn chắc chắn muốn reset?')) {
            this.service.resetKey({ 'id': this.service.getAppId() }, function (data) { return _this.appInfo.key = data; });
        }
    };
    AppSettingComponent.prototype.update = function () {
        var _this = this;
        this.service.updateApp(JSON.stringify(this.appInfo), { 'id': this.service.getAppId() }, function (data) { return _this.refresh(); });
    };
    AppSettingComponent.prototype.delete = function () {
        var _this = this;
        if (window.confirm('Bạn chắc chắn muốn xoá app này? Rất có thể sẽ ảnh hưởng đến hệ thống.')) {
            this.service.resetKey({ 'id': this.service.getAppId() }, function (data) { return _this.appInfo.key = data; });
        }
    };
    AppSettingComponent.prototype.onStatusChange = function () {
        this.appInfo.is_active = (this.appInfo.is_active == 1 ? 0 : 1);
        this.update();
    };
    AppSettingComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.refresh();
    };
    AppSettingComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    AppSettingComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.refresh();
        }
    };
    AppSettingComponent.prototype.fileChanged = function (event, type) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            if (type == 3) {
                this.service.uploadFile(file, function (data) {
                    _this.appInfo.fcm_private_file = data;
                    _this.update();
                });
            }
            else if (type == 4) {
                this.service.uploadFile(file, function (data) {
                    _this.appInfo.apns_private_file = data;
                    _this.update();
                });
            }
            else {
                this.service.upload(file, function (data) {
                    if (type == 0) {
                        _this.appInfo.icon = data;
                        _this.update();
                    }
                    else if (type == 1) {
                        _this.appInfo.logo = data;
                        _this.update();
                    }
                    else if (type == 2) {
                        _this.appInfo.promote_images.push({
                            'click_url': 'click_url',
                            'image': data,
                            'title': 'title'
                        });
                    }
                });
            }
        }
    };
    AppSettingComponent.prototype.deleteAd = function (event, d) {
        var _this = this;
        console.log(d);
        var params = {
            "app_id": this.service.getAppId(),
            "filter_type": this.appInfo.video_reward_filter_type,
            "player_ids": d.player_id._id
        };
        this.playerAdsService.delete(params, function (data) {
            _this.getPlayerAds();
        });
    };
    AppSettingComponent.prototype.deleteAll = function () {
        var _this = this;
        var ids = '';
        for (var _i = 0, _a = this.dataIds; _i < _a.length; _i++) {
            var d = _a[_i];
            ids += d.player_id._id + ",";
        }
        ids = ids.substring(0, ids.length - 1);
        var params = {
            "app_id": this.service.getAppId(),
            "filter_type": this.appInfo.video_reward_filter_type,
            "player_ids": ids
        };
        this.playerAdsService.delete(params, function (data) {
            _this.getPlayerAds();
        });
    };
    AppSettingComponent.prototype.deletePromoteImage = function (idx) {
        if (window.confirm('Có phải bạn muốn xoá không?')) {
            this.appInfo.promote_images.splice(idx, 1);
            this.update();
        }
    };
    AppSettingComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.service.upload(file, function (data) {
                console.log(data);
                _this.appInfo.promote_images.push(data);
                _this.update();
            });
        }
    };
    AppSettingComponent.prototype.onSelectionChange = function (entry) {
        this.appInfo.video_reward_filter_type = entry.filter_type;
        if (entry.filter_type == 'list_defined_users')
            this.isImportAreaShow = true;
        else
            this.isImportAreaShow = false;
    };
    AppSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-setting',
            template: __webpack_require__(/*! ./app-setting.component.html */ "./src/app/dashboard/app-setting/app-setting.component.html"),
            styles: [__webpack_require__(/*! ./app-setting.component.scss */ "./src/app/dashboard/app-setting/app-setting.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"], _service_player_ads_service__WEBPACK_IMPORTED_MODULE_2__["PlayerAdsService"]])
    ], AppSettingComponent);
    return AppSettingComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/dashboard/campaign/campaign.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/campaign/campaign.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-block rx-floathide-form\" [hidden]=\"isHidden\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"card-title\" [hidden]=\"isEdit\">Create campaign</h5>\n                <h5 class=\"card-title\" [hidden]=\"!isEdit\">Edit campaign</h5>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">App Id</label>\n                        <input class=\"form-control\"  placeholder=\"App Id\" type=\"text\" disabled [(ngModel)]=\"onerow.app_id\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Agency Id</label>\n                        <input class=\"form-control\"  placeholder=\"Agency Id\" type=\"text\" disabled [(ngModel)]=\"onerow.agency_id\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Name</label>\n                        <input class=\"form-control\" placeholder=\"Name ...\" type=\"text\" [(ngModel)]=\"onerow.name\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Source</label>\n                        <select class=\"form-control\" [(ngModel)]=\"onerow.source_id\">\n                            <option *ngFor=\"let sc of sources\" [value]=\"sc._id\"> {{sc.source}} - {{sc.source_group}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <label class=\"col-form-label-none\">Description</label>\n                        <input class=\"form-control\" name=\"description\" placeholder=\"Description ...\" type=\"text\" [(ngModel)]=\"onerow.desc\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-primary\" (click)=(save()) [hidden]=\"isEdit\"><i class=\"icon-plus\"></i> Create </button>\n                <button class=\"btn btn-sm btn-primary\" (click)=(update()) [hidden]=\"!isEdit\"><i class=\"icon-check\"></i> Save</button>\n                <button class=\"btn btn-sm btn-secondary tright\" (click)=\"refresh()\"><i class=\"icon-close\"></i> Cancel</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4\">\n                    <h5 class=\"card-title\">Campaigns</h5>\n                </div>\n                <div class=\"col-md-8 col-lg-8\">\n                    <div class=\"btn-group tright\" dropdown>\n                        <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"margin:0px;\">\n                        {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                        </button>\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                            <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\">\n                                <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"card-tools\">\n                <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                    <option *ngFor=\"let perheader of headers\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                </select><i class=\"icon-arrow-down sel-ico\"></i>\n                <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                <button class=\"btn btn-sm btn-success\" (click)=\"show()\"> <i class=\"icon-plus\"></i> Create </button>\n            </div>\n            <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th *ngFor=\"let perheader of headers\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center\">\n                            {{perheader.name}}\n                        </th>\n                        <th class=\"text-center\">#</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let cp of campaigns\">\n                        <td> {{cp.name}} </td>\n                        <td> {{cp.desc}} </td>\n                        <td align=\"center\" class=\"text-center\">\n                            <div>{{cp.created_at * 1000 | date:'dd/MM/yyyy'}}</div>\n                        </td>\n                        <td align=\"center\" class=\"text-center\">\n                            <span class=\"tag tag-success\" [hidden]=\"!(cp.is_active || 0)\">Active</span>\n                            <span class=\"tag tag-default\" [hidden]=\"(cp.is_active || 0)\">Inactive</span>\n                        </td>\n                        <td class=\"text-center\">\n                            <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"onEdit($event, cp)\">\n                            <i class=\"fa fa-pencil-square-o\"></i>\n                            </button>\n                            <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"delete($event, cp)\">\n                            <i class=\"icon-trash \"></i>\n                            </button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"100% \" class=\"rx-pagin\">\n                            <button class=\"rx-back \" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                            <</button>\n                            <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                            <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                            <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                            <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                <option value=\"10 \" selected>10</option>\n                                <option value=\"50 \" selected>50</option>\n                                <option value=\"100 \" selected>100</option>\n                            </select> / page\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/campaign/campaign.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/campaign/campaign.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-form-label-none {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/dashboard/campaign/campaign.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/campaign/campaign.component.ts ***!
  \**********************************************************/
/*! exports provided: CampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignComponent", function() { return CampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/campaign.service */ "./src/app/service/campaign.service.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/service/group.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CampaignComponent = /** @class */ (function (_super) {
    __extends(CampaignComponent, _super);
    function CampaignComponent(gService, service) {
        var _this = _super.call(this) || this;
        _this.gService = gService;
        _this.service = service;
        _this.search = { field: 'name', term: '' };
        _this.app = { 'app_id': '', 'os': '', 'version': '' };
        _this.campaigns = [];
        _this.sources = [];
        _this.paging = _this.service.defaultPaging('created_at');
        _this.isnext = true;
        _this.headers = [
            { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
            { id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
            { id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 }
        ];
        _this.refresh();
        _this.getSources();
        return _this;
    }
    CampaignComponent.prototype.ngOnInit = function () {
    };
    CampaignComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.refresh();
    };
    CampaignComponent.prototype.getApps = function () {
        this.app.app_id = this.service.getAppId();
        this.apps = this.gService.getGroupSetting();
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var ap = _a[_i];
            if (ap.app_id == this.app.app_id) {
                this.app.os = ap.os;
                this.app.version = ap.version;
            }
        }
    };
    CampaignComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.refresh();
    };
    CampaignComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    CampaignComponent.prototype.refresh = function () {
        this.reset();
        this.getCampaigns();
        this.getApps();
    };
    CampaignComponent.prototype.reset = function () {
        this.campaigns = [];
        this.isHidden = true;
        this.isEdit = false;
        this.onerow = {
            'name': '',
            'desc': '',
            'is_active': 1,
            'utm_medium': '',
            'utm_source': '',
            'source_id': '',
            'app_id': this.service.getAppId(),
            'agency_id': '5aa0ee42b887cb6691ed5b43',
        };
    };
    CampaignComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            _this.sources = data.source;
            if (_this.sources.length > 0)
                _this.onerow.source_id = _this.sources[0]._id;
        });
    };
    CampaignComponent.prototype.getCampaigns = function () {
        var _this = this;
        var _a;
        this.service.getCampaigns((_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'search_app_id': this.service.getAppId(),
                'search_agency_id': '5aa0ee42b887cb6691ed5b43'
            },
            _a['search_' + this.search.field] = this.search.term,
            _a), function (data) {
            _this.campaigns = data;
        });
    };
    CampaignComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol)
                this.paging.st_type *= -1;
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.refresh();
        }
    };
    CampaignComponent.prototype.show = function () {
        this.isHidden = false;
        this.isEdit = false;
    };
    CampaignComponent.prototype.save = function () {
        var _this = this;
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var sc = _a[_i];
            if (this.onerow.source_id == sc._id) {
                this.onerow.utm_medium = sc.source;
                this.onerow.utm_source = sc.source_group;
            }
        }
        this.service.insert(this.onerow, function (data) { _this.refresh(); });
    };
    CampaignComponent.prototype.onItemClick = function (cp) {
        this.onerow = cp;
        this.service.moveToAds(this.onerow);
    };
    CampaignComponent.prototype.onEdit = function (e, cp) {
        e.stopPropagation();
        this.onerow = cp;
        this.isEdit = true;
        this.isHidden = false;
    };
    CampaignComponent.prototype.update = function () {
        var _this = this;
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var sc = _a[_i];
            if (this.onerow.source_id == sc._id) {
                this.onerow.utm_medium = sc.source;
                this.onerow.utm_source = sc.source_group;
            }
        }
        this.service.update(this.onerow, function (data) { _this.refresh(); });
    };
    CampaignComponent.prototype.delete = function (e, cp) {
        var _this = this;
        e.stopPropagation();
        this.service.delete({ 'id': cp._id }, function (data) { _this.refresh(); });
    };
    CampaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campaign',
            template: __webpack_require__(/*! ./campaign.component.html */ "./src/app/dashboard/campaign/campaign.component.html"),
            styles: [__webpack_require__(/*! ./campaign.component.scss */ "./src/app/dashboard/campaign/campaign.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"], _service_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"]])
    ], CampaignComponent);
    return CampaignComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/player.component */ "./src/app/dashboard/player/player.component.ts");
/* harmony import */ var _app_setting_app_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-setting/app-setting.component */ "./src/app/dashboard/app-setting/app-setting.component.ts");
/* harmony import */ var _in_app_in_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./in-app/in-app.component */ "./src/app/dashboard/in-app/in-app.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/dashboard/notification/notification.component.ts");
/* harmony import */ var _telco_telco_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./telco/telco.component */ "./src/app/dashboard/telco/telco.component.ts");
/* harmony import */ var _reports_armpd_armpd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/armpd/armpd.component */ "./src/app/dashboard/reports/armpd/armpd.component.ts");
/* harmony import */ var _reports_arm_arm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reports/arm/arm.component */ "./src/app/dashboard/reports/arm/arm.component.ts");
/* harmony import */ var _reports_roi_roi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports/roi/roi.component */ "./src/app/dashboard/reports/roi/roi.component.ts");
/* harmony import */ var _reports_roipd_roipd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/roipd/roipd.component */ "./src/app/dashboard/reports/roipd/roipd.component.ts");
/* harmony import */ var _sourceslist_sourceslist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sourceslist/sourceslist.component */ "./src/app/dashboard/sourceslist/sourceslist.component.ts");
/* harmony import */ var _metric_metric_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./metric/metric.component */ "./src/app/dashboard/metric/metric.component.ts");
/* harmony import */ var _reports_cohort_cohort_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reports/cohort/cohort.component */ "./src/app/dashboard/reports/cohort/cohort.component.ts");
/* harmony import */ var _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./campaign/campaign.component */ "./src/app/dashboard/campaign/campaign.component.ts");
/* harmony import */ var _reports_kpireport_kpireport_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reports/kpireport/kpireport.component */ "./src/app/dashboard/reports/kpireport/kpireport.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/dashboard/transaction/transaction.component.ts");
/* harmony import */ var _reports_ads_report_ads_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reports/ads-report/ads-report.component */ "./src/app/dashboard/reports/ads-report/ads-report.component.ts");
/* harmony import */ var _reports_card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reports/card/card.component */ "./src/app/dashboard/reports/card/card.component.ts");
/* harmony import */ var _reports_ads_performance_ads_performance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reports/ads-performance/ads-performance.component */ "./src/app/dashboard/reports/ads-performance/ads-performance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: '',
        redirectTo: 'report-arm',
        pathMatch: 'full'
    },
    {
        path: 'report-armpd',
        component: _reports_armpd_armpd_component__WEBPACK_IMPORTED_MODULE_7__["ArmpdComponent"]
    },
    {
        path: 'report-arm',
        component: _reports_arm_arm_component__WEBPACK_IMPORTED_MODULE_8__["ArmComponent"]
    },
    {
        path: 'report-kpi',
        component: _reports_kpireport_kpireport_component__WEBPACK_IMPORTED_MODULE_15__["KpireportComponent"]
    },
    {
        path: 'adslist',
        component: _reports_ads_performance_ads_performance_component__WEBPACK_IMPORTED_MODULE_19__["AdsPerformanceComponent"]
    },
    {
        path: 'report-roi',
        component: _reports_roi_roi_component__WEBPACK_IMPORTED_MODULE_9__["RoiComponent"]
    },
    {
        path: 'transaction',
        component: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_16__["TransactionComponent"]
    },
    {
        path: 'report-roipd',
        component: _reports_roipd_roipd_component__WEBPACK_IMPORTED_MODULE_10__["RoipdComponent"]
    },
    {
        path: 'player',
        component: _player_player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"]
    },
    {
        path: 'setting',
        component: _app_setting_app_setting_component__WEBPACK_IMPORTED_MODULE_3__["AppSettingComponent"]
    },
    {
        path: 'report-ads',
        component: _reports_ads_report_ads_report_component__WEBPACK_IMPORTED_MODULE_17__["AdsReportComponent"]
    },
    {
        path: 'in-app',
        component: _in_app_in_app_component__WEBPACK_IMPORTED_MODULE_4__["InAppComponent"]
    },
    {
        path: 'telco',
        component: _telco_telco_component__WEBPACK_IMPORTED_MODULE_6__["TelcoComponent"]
    },
    {
        path: 'campaign',
        component: _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_14__["CampaignComponent"]
    },
    {
        path: 'notification',
        component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"]
    },
    {
        path: 'sourceslist',
        component: _sourceslist_sourceslist_component__WEBPACK_IMPORTED_MODULE_11__["SourceslistComponent"]
    },
    {
        path: 'metric',
        component: _metric_metric_component__WEBPACK_IMPORTED_MODULE_12__["MetricComponent"]
    },
    {
        path: 'report-cohort',
        component: _reports_cohort_cohort_component__WEBPACK_IMPORTED_MODULE_13__["CohortComponent"]
    },
    {
        path: 'report-cards',
        component: _reports_card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player/player.component */ "./src/app/dashboard/player/player.component.ts");
/* harmony import */ var _app_setting_app_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-setting/app-setting.component */ "./src/app/dashboard/app-setting/app-setting.component.ts");
/* harmony import */ var _in_app_in_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./in-app/in-app.component */ "./src/app/dashboard/in-app/in-app.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/dashboard/notification/notification.component.ts");
/* harmony import */ var _telco_telco_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./telco/telco.component */ "./src/app/dashboard/telco/telco.component.ts");
/* harmony import */ var _reports_armpd_armpd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reports/armpd/armpd.component */ "./src/app/dashboard/reports/armpd/armpd.component.ts");
/* harmony import */ var _reports_arm_arm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reports/arm/arm.component */ "./src/app/dashboard/reports/arm/arm.component.ts");
/* harmony import */ var _reports_roi_roi_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reports/roi/roi.component */ "./src/app/dashboard/reports/roi/roi.component.ts");
/* harmony import */ var _reports_roipd_roipd_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reports/roipd/roipd.component */ "./src/app/dashboard/reports/roipd/roipd.component.ts");
/* harmony import */ var _sourceslist_sourceslist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sourceslist/sourceslist.component */ "./src/app/dashboard/sourceslist/sourceslist.component.ts");
/* harmony import */ var _metric_metric_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./metric/metric.component */ "./src/app/dashboard/metric/metric.component.ts");
/* harmony import */ var _reports_cohort_cohort_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reports/cohort/cohort.component */ "./src/app/dashboard/reports/cohort/cohort.component.ts");
/* harmony import */ var _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./campaign/campaign.component */ "./src/app/dashboard/campaign/campaign.component.ts");
/* harmony import */ var _reports_kpireport_kpireport_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reports/kpireport/kpireport.component */ "./src/app/dashboard/reports/kpireport/kpireport.component.ts");
/* harmony import */ var _reports_ads_report_ads_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reports/ads-report/ads-report.component */ "./src/app/dashboard/reports/ads-report/ads-report.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/dashboard/transaction/transaction.component.ts");
/* harmony import */ var _reports_card_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reports/card/card.component */ "./src/app/dashboard/reports/card/card.component.ts");
/* harmony import */ var _reports_ads_performance_ads_performance_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./reports/ads-performance/ads-performance.component */ "./src/app/dashboard/reports/ads-performance/ads-performance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Ngx Module





















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_3__["AmChartsModule"]
            ],
            declarations: [
                _player_player_component__WEBPACK_IMPORTED_MODULE_8__["PlayerComponent"], _app_setting_app_setting_component__WEBPACK_IMPORTED_MODULE_9__["AppSettingComponent"], _in_app_in_app_component__WEBPACK_IMPORTED_MODULE_10__["InAppComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], _telco_telco_component__WEBPACK_IMPORTED_MODULE_12__["TelcoComponent"], _reports_armpd_armpd_component__WEBPACK_IMPORTED_MODULE_13__["ArmpdComponent"], _reports_arm_arm_component__WEBPACK_IMPORTED_MODULE_14__["ArmComponent"],
                _reports_roi_roi_component__WEBPACK_IMPORTED_MODULE_15__["RoiComponent"], _reports_roipd_roipd_component__WEBPACK_IMPORTED_MODULE_16__["RoipdComponent"], _sourceslist_sourceslist_component__WEBPACK_IMPORTED_MODULE_17__["SourceslistComponent"], _metric_metric_component__WEBPACK_IMPORTED_MODULE_18__["MetricComponent"],
                _reports_cohort_cohort_component__WEBPACK_IMPORTED_MODULE_19__["CohortComponent"], _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_20__["CampaignComponent"], _reports_kpireport_kpireport_component__WEBPACK_IMPORTED_MODULE_21__["KpireportComponent"],
                _reports_ads_report_ads_report_component__WEBPACK_IMPORTED_MODULE_22__["AdsReportComponent"], _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_23__["TransactionComponent"], _reports_card_card_component__WEBPACK_IMPORTED_MODULE_24__["CardComponent"], _reports_ads_performance_ads_performance_component__WEBPACK_IMPORTED_MODULE_25__["AdsPerformanceComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/in-app/in-app.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/in-app/in-app.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-block animated fadeIn rx-relative\" style=\"margin-left:10%; margin-right: 10%; z-index: 1; padding: 0px;\">\n        <div class=\"card\">\n            <!-- Form -->\n            <div class=\"rx-floathide-form rx-isview\" [hidden]=\"isHidden\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h5> IAP items config </h5>\n                    </div>\n                    <div class=\"card-block\">\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-3 col-lg-3\">\n                                <label class=\"col-form-label-none\">Item Id</label>\n                                <input class=\"form-control\" name=\"id\" placeholder=\"Item Id ...\" type=\"text\" [(ngModel)]=\"onerow.id\">\n                            </div>\n                            <div class=\"form-group col-md-3 col-lg-3\">\n                                <label class=\"col-form-label-none\">Item Name</label>\n                                <input class=\"form-control\" name=\"name\" placeholder=\"Item Name ...\" type=\"text\" [(ngModel)]=\"onerow.name\">\n                            </div>\n                            <div class=\"form-group col-md-3 col-lg-3\">\n                                <label class=\"col-form-label-none\">Diamond</label>\n                                <input class=\"form-control\" name=\"name\" placeholder=\"Diamond ...\" type=\"text\" [(ngModel)]=\"onerow.game_diamond\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-3 col-lg-3\">\n                                <label class=\"col-form-label-none\">Currency</label>\n                                <select class=\"form-control\" \n                                [ngModelOptions]=\"{standalone: true}\"\n                                [(ngModel)]=\"onerow.currency\">\n                                    <option *ngFor=\"let currency of currencies\" \n                                    [ngValue]=\"currency\">{{currency}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-3 col-lg-3\">\n                                <label class=\"col-form-label-none\">Display Currency</label>\n                                <select class=\"form-control\" \n                                [ngModelOptions]=\"{standalone: true}\"\n                                [(ngModel)]=\"onerow.display_currency\">\n                                    <option *ngFor=\"let c of currencies\" \n                                    [ngValue]=\"c\">{{c}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"form-group col-lg-3 col-md-3\">\n                                <label class=\"col-form-label-none\">Description</label>\n                                <input class=\"form-control\" name=\"desc\" placeholder=\"Description ...\" type=\"text\" [(ngModel)]=\"onerow.desc\">\n                            </div>\n                            <div class=\"form-group col-lg-3 col-md-3\">\n                                <label class=\"col-form-label-none\">Price</label>\n                                <input class=\"form-control\" name=\"Price\" placeholder=\"Price ...\" type=\"number\" \n                                [(ngModel)]=\"onerow.price\">\n                            </div>\n                           <!--  <div class=\"form-group col-lg-3 col-md-3\">\n                                <label class=\"col-form-label-none\">Price (VND)</label>\n                                <input class=\"form-control\" name=\"Price\" placeholder=\"Price(VND)...\" type=\"number\" [(ngModel)]=\"onerow.price_vnd\">\n                            </div> -->\n                            <div class=\"form-group col-lg-3 col-md-3\">\n                                <label class=\"col-form-label-none\">Display Price</label>\n                                <input class=\"form-control\" name=\"Price\" placeholder=\"Display price ...\" type=\"number\" \n                                [(ngModel)]=\"onerow.display_price\">\n                            </div>\n                            <div class=\"col-lg-3 col-md-3\">\n                                <div class=\"col-lg-6 col-md-6\">\n                                    <label class=\"col-form-label-none\">Status</label>\n                                </div>\n                                <div class=\"col-lg-6 col-md-6\">\n                                    <label class=\"switch switch-text switch-pill switch-primary\">\n                                        <input type=\"checkbox\" class=\"switch-input\" [checked]=\"onerow.is_active\" (change)=\"onerow.is_active == 1 ? onerow.is_active = 0: onerow.is_active = 1\">\n                                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                        <span class=\"switch-handle\"></span>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 col-md-12\">\n                                <div class=\"col-lg-12 col-md-12\">\n                                    <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\"*.*\">\n                                </div>\n                                <img [src]=\"getUrl(onerow.icon)\" onError=\"this.src='./assets/img/ico_app_default.png'\" style=\"width: 40%;\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button class=\"btn btn-sm btn-primary\" (click)=(save()) [hidden]=\"isEdit\"> <i class=\"icon-plus\"></i> OK </button>\n                        <button class=\"btn btn-sm btn-primary\" (click)=(update()) [hidden]=\"!isEdit\"><i class=\"icon-check\"></i> Save</button>\n                        <button class=\"btn btn-sm btn-danger tright\" (click)=(delete()) [hidden]=\"!isEdit\"><i class=\"icon-trash\"></i> Delete</button>\n                        <button class=\"btn btn-sm btn-secondary tright\" (click)=(cancel())><i class=\"icon-close\"></i> Cancel</button>\n                    </div>\n                </div>\n            </div>\n            <!-- End form -->\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h5>In-app items</h5>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"btn-group tright\" dropdown>\n                        <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"margin:0px;\">\n                            {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                        </button>\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                            <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\">\n                                <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"clearfix\">\n                <div class=\"card-tools\">\n                    <button class=\"btn btn-sm btn-primary tright\" (click)=(toggle())>\n                    <i class=\"icon-plus\"></i> Create\n                    </button>\n                </div>\n            </div>\n            <div class=\"tTableWraper\">\n                <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                    <thead class=\"thead-default\">\n                        <tr>\n                            <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} tMiddle\">{{perheader.name}}</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of items\" style=\"cursor: pointer;\" (click)=(onRowClick(item))>\n                            <td align=\"center\" style=\"vertical-align: middle;\">\n                                {{item.id}}\n                            </td>\n                            <td align=\"center\" style=\"vertical-align: middle;\">\n                                {{item.name}}\n                            </td>\n                           \n                            <td align=\"center\" style=\"vertical-align: middle;\">\n                                {{item.desc}}\n                            </td>\n                            <td class=\"tMiddle\" style=\"vertical-align: middle;\">\n                                <strong>{{item.price | currency:'VND':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td align=\"center\" style=\"vertical-align: middle;\">\n                                {{item.currency}}\n                            </td>\n                            <!-- <td class=\"tMiddle\" style=\"vertical-align: middle;\">\n                                <strong>{{item.price_vnd | currency:'VND':symbol:'1.0-3'}}</strong>\n                            </td> -->\n                            <td class=\"tMiddle\" style=\"vertical-align: middle;\">\n                                <strong>{{item.display_price | currency:'VND':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td align=\"center\" style=\"vertical-align: middle;\">\n                                {{item.display_currency}}\n                            </td>\n                             <td align=\"center\" style=\"vertical-align: middle;\">\n                                {{item.game_diamond}}\n                            </td>\n                            <td align=\"center\">\n                                <img [src]=\"getUrl(item.icon)\" onError=\"this.src='./assets/img/ico_app_default.png'\" style=\"width: 96px;\" />\n                            </td>\n                            <td align=\"center\" style=\"vertical-align: middle;\">\n                                <span class=\"tag tag-success\" *ngIf=\"item.is_active\">Active</span>\n                                <span class=\"tag tag-danger\" *ngIf=\"!item.is_active\">Inactive</span>\n                            </td>\n                            <td align=\"center\" style=\"vertical-align: middle;\">\n                                {{item.created_at * 1000 | date:'dd/MM/yyyy'}}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"100%\" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                                    <</button>\n                                        <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                                        <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                                        <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                                        <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                            <option value=\"10\" selected>10</option>\n                                            <option value=\"50\" selected>50</option>\n                                            <option value=\"100\" selected>100</option>\n                                        </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/dashboard/in-app/in-app.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/in-app/in-app.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-form-label-none {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n\n.tTableWraper {\n  max-width: 100%;\n  overflow: auto;\n  max-height: 368px; }\n"

/***/ }),

/***/ "./src/app/dashboard/in-app/in-app.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/in-app/in-app.component.ts ***!
  \******************************************************/
/*! exports provided: InAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppComponent", function() { return InAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/payment.service */ "./src/app/service/payment.service.ts");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/service/group.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InAppComponent = /** @class */ (function (_super) {
    __extends(InAppComponent, _super);
    function InAppComponent(service, gService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.gService = gService;
        _this.currencies = ['VND', 'USD'];
        _this.app = { 'app_id': '', 'os': '', 'version': '' };
        _this.search = { field: 'created_at', term: '' };
        _this.isnext = true;
        _this.paging = _this.service.defaultPaging('created_at');
        _this.currency = _this.currencies[0];
        _this.display_currency = _this.currencies[0];
        _this.header = [
            { id: 'id', name: 'Store Id', is_search: 1, st_col: 'id', st_type: 1 },
            { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
            { id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
            { id: 'price', name: 'Price', is_search: 1, st_col: 'price', st_type: 1 },
            { id: 'currency', name: 'Currency', is_search: 1, st_col: 'currency', st_type: 1 },
            /*{ id: 'price_vnd', name: 'Price (VND)', is_search: 1, st_col: 'price_vnd', st_type: 1 },*/
            { id: 'display_price', name: 'Display Price', is_search: 1, st_col: 'display_price', st_type: 1 },
            { id: 'display_currency', name: 'Display Currency', is_search: 1, st_col: 'display_currency', st_type: 1 },
            { id: 'game_diamond', name: 'Diamond', is_search: 1, st_col: 'game_diamond', st_type: 1 },
            { id: 'image', name: 'Image', is_search: -1, st_col: 'image', st_type: 1 },
            { id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }
        ];
        return _this;
    }
    InAppComponent.prototype.ngOnInit = function () { this.refresh(); };
    InAppComponent.prototype.refresh = function () {
        var _this = this;
        if (!this.service.isExpired()) {
            this.reset();
            this.service.getPayments({
                'search_app_id': this.service.getAppId(),
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
            }, function (data) { _this.items = data; });
            this.getApps();
        }
    };
    InAppComponent.prototype.getApps = function () {
        this.app.app_id = this.service.getAppId();
        this.apps = this.gService.getGroupSetting();
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var ap = _a[_i];
            if (ap.app_id == this.app.app_id) {
                this.app.os = ap.os;
                this.app.version = ap.version;
            }
        }
    };
    InAppComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.refresh();
    };
    InAppComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.refresh();
    };
    InAppComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    InAppComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.refresh();
        }
    };
    InAppComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.service.upload(file, function (data) {
                _this.onerow.icon = data;
            });
        }
    };
    InAppComponent.prototype.cancel = function () {
        this.refresh();
    };
    InAppComponent.prototype.onRowClick = function (item) {
        this.onerow = item;
        this.isHidden = false;
        this.isEdit = true;
    };
    InAppComponent.prototype.update = function () {
        var _this = this;
        this.service.update(this.onerow, function (data) { _this.refresh(); });
    };
    InAppComponent.prototype.save = function () {
        var _this = this;
        this.service.insert(this.onerow, function (data) { _this.refresh(); });
    };
    InAppComponent.prototype.delete = function () {
        var _this = this;
        if (window.confirm('Bạn chắc chắn muốn xoá?')) {
            this.service.delete(this.onerow, function (data) { _this.refresh(); });
        }
    };
    InAppComponent.prototype.reset = function () {
        this.isEdit = false;
        this.isHidden = true;
        this.onerow = {
            'price': 1000,
            'name': 'items' + new Date().getMilliseconds(),
            'desc': 'New in-app items',
            'icon': '',
            'currency': this.currency,
            'display_currency': this.display_currency,
            'app_id': this.service.getAppId(),
            'is_active': 1
        };
        this.items = [];
    };
    InAppComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
        this.isEdit = false;
    };
    InAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inapp',
            template: __webpack_require__(/*! ./in-app.component.html */ "./src/app/dashboard/in-app/in-app.component.html"),
            styles: [__webpack_require__(/*! ./in-app.component.scss */ "./src/app/dashboard/in-app/in-app.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_payment_service__WEBPACK_IMPORTED_MODULE_1__["PaymentService"], _service_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]])
    ], InAppComponent);
    return InAppComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/dashboard/metric/metric.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/metric/metric.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">\n\t\t\t<h5 class=\"card-title\">Metric</h5>\n\t\t</div>\n\t\t<div class=\"card-block\">\n\t\t\t<table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n\t\t\t\t<thead class=\"thead-default\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th *ngFor=\"let perheader of header\">{{perheader.name}}</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let d of data\">\n\t\t\t\t\t\t<td>{{d.name}}</td>\n\t\t\t\t\t\t<td>{{d.desc}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/metric/metric.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/metric/metric.component.ts ***!
  \******************************************************/
/*! exports provided: MetricComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricComponent", function() { return MetricComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetricComponent = /** @class */ (function () {
    function MetricComponent() {
        this.data = [];
        this.header = [
            { id: 'name', name: 'Game Report', is_search: 1, st_col: 'name', st_type: 1 },
            { id: 'desc', name: 'Overview game data (Install, DAU, Rev, PU)', is_search: 1, st_col: 'desc', st_type: 1 }
        ];
    }
    MetricComponent.prototype.ngOnInit = function () {
        this.helpFetchData();
    };
    MetricComponent.prototype.helpFetchData = function () {
        this.data = [
            { 'name': 'NRU0', 'desc': 'Number of accounts that log­in to the game for the first time from install acquired in day' },
            { 'name': 'NRU', 'desc': 'Number of accounts that log­in to the game for the first time in day' },
            { 'name': 'A1 (DAU)', 'desc': 'Daily Active Users' },
            { 'name': 'A7', 'desc': 'Weekly Active Users (unique)' },
            { 'name': 'A30 (MAU)', 'desc': 'Monthly Active Users (unique)' },
            { 'name': 'A1 (DAU)', 'desc': 'Daily Active Users' },
            { 'name': 'PU in day', 'desc': '' },
            { 'name': 'PU in 7 days', 'desc': 'Unique PU in 7 days' },
            { 'name': 'PU in 30 days', 'desc': 'Unique PU in 30 days' },
            { 'name': 'CR', 'desc': 'Conversion rate from DAU to PU' },
            { 'name': 'Rev in day', 'desc': 'Conversion rate from DAU to PU' },
            { 'name': 'Rev in 7 day', 'desc': 'Accumulated rev in 7 days' },
            { 'name': 'Rev in 30 day', 'desc': 'Accumulated rev in 30 days' },
            { 'name': 'ARPPU', 'desc': 'Average revenue per paying user' },
            { 'name': 'Organic', 'desc': 'Number of accounts that generated by organic installations (track by tracking tool such as Appsflyer)' },
            { 'name': 'Paid Media', 'desc': 'Number of accounts that generated by non­organic installations (track by tracking tools such as Appsflyer' }
        ];
    };
    MetricComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metric',
            template: __webpack_require__(/*! ./metric.component.html */ "./src/app/dashboard/metric/metric.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MetricComponent);
    return MetricComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-block animated fadeIn rx-relative\" style=\"margin-left:10%; margin-right: 10%; z-index: 1; padding: 0px;\">\n        <div class=\"card\">\n            <!-- Form -->\n            <div class=\"rx-floathide-form rx-isview\" [hidden]=\"isHidden\">\n                <div class=\"card rx-card-form\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">New message</h4>\n                    </div>\n                    <div class=\"card-block card-block-form\">\n                        <form action=\"\" class=\"form-horizontal col-md-12 col-sx-12\" method=\"post\">\n                            <div class=\"col-md-12 col-lg-12 rx-form-group\">\n                                <label class=\"form-control-label\">Platform</label>\n                                <br/>\n                                <label class=\"radio-inline\" *ngFor=\"let st of platforms\">\n                                    <input type=\"radio\" [checked]=\"st == onerow.platform\" [value]=\"st\" (change)=\"onPlatformChanged(st)\" name=\"st\"> {{ st }}\n                                </label>\n                            </div>\n                            <div class=\"form-group col-md-12 col-lg-12 rx-form-group\">\n                                <label class=\"form-control-label\">Title</label>\n                                <textarea name=\"textarea-input\" rows=\"2\" class=\"form-control\" placeholder=\"Title ...\" [(ngModel)]=\"onerow.title\"></textarea>\n                            </div>\n                            <div class=\"form-group col-md-12 rx-form-group\">\n                                <label class=\"form-control-label\">Body</label>\n                                <textarea name=\"textarea-input\" rows=\"7\" class=\"form-control\" placeholder=\"Message ...\" [(ngModel)]=\"onerow.body\"></textarea>\n                            </div>\n                            <div class=\"col-md-12 col-lg-12 rx-form-group\">\n                                <label class=\"form-control-label\">Filter Type</label>\n                                <select class=\"form-control\" \n                                [ngModelOptions]=\"{standalone: true}\"\n                                [(ngModel)]=\"filter_type\">\n                                    <option *ngFor=\"let ft of filter_types\" \n                                    [ngValue]=\"ft\">{{ft.name}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-12 rx-form-group\"\n                            [hidden]=\"filter_type.id != 'list_defined_users'\">\n                                <label class=\"form-control-label\">User Ids</label>\n                                <textarea name=\"textarea-input\" rows=\"2\" class=\"form-control\" placeholder=\"Player Ids ...\" [(ngModel)]=\"onerow.player_ids\"></textarea>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"send()\">\n                            <i class=\"icon-cursor\"></i> Send\n                        </button>\n                        <button class=\"btn btn-sm btn-secondary\" type=\"reset\" (click)=\"cancel()\">\n                            <i class=\"icon-close\"></i> Cancel\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <!-- End form -->\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5>Push notification</h5>\n        </div>\n        <div class=\"card-block\">\n            <button class=\"btn btn-sm btn-primary tright\" (click)=(toggle())> Push </button>\n            <table class=\"table table-hover table-outline mb-0 hidden-sm-down table-striped\">\n                <thead class=\"thead-default\">\n                    <tr>\n                        <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}}\">{{perheader.name}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let msg of msgs\">\n                        <td>\n                            {{msg.title}}\n                        </td>\n                        <td>\n                            {{msg.body}}\n                        </td>\n                        <td>\n                            <span class=\"badge badge-success\" *ngIf=\"msg.platform == 'all'\">All</span>\n                            <span class=\"badge badge-info\" *ngIf=\"msg.platform == 'ios'\">iOS</span>\n                            <span class=\"badge badge-danger\" *ngIf=\"msg.platform == 'android'\">Android</span>\n                        </td>\n                        <td>\n                            <span class=\"badge badge-success\" *ngIf=\"msg.status == 'done'\">Done</span>\n                            <span class=\"badge badge-danger\" *ngIf=\"msg.status == 'waiting'\">Waiting</span>\n                        </td>\n                        <td>\n                            {{msg.created_at * 1000 | date:'dd/MM/yyyy HH:mm:ss'}}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/service/group.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(service, gService) {
        this.service = service;
        this.gService = gService;
        this.header = [];
        this.platforms = ['all', 'android', 'ios'];
        this.filter_types = [
            { 'id': 'all', 'name': 'Tất cả' },
            { 'id': 'user_not_pay', 'name': 'User chưa nạp tiền' },
            { 'id': 'list_defined_users', 'name': 'Danh sách users' }
        ];
        this.header = [
            { id: 'title', name: 'Title', is_search: 1, st_col: 'title', st_type: 1 },
            { id: 'body', name: 'Body', is_search: 1, st_col: 'body', st_type: 1 },
            { id: 'platform', name: 'Platform', is_search: 1, st_col: 'platform', st_type: 1 },
            { id: 'status', name: 'Status', is_search: 1, st_col: 'status', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }
        ];
        this.filter_type = this.filter_types[0];
        this.onerow = {
            'status': 0,
            'created_at': '0',
            'filter_type': this.filter_type.id,
            'platform': this.platforms[0]
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    NotificationComponent.prototype.refresh = function () {
        if (!this.service.isExpired()) {
            this.reset();
            this.syncData();
        }
    };
    NotificationComponent.prototype.send = function () {
        var _this = this;
        this.onerow.app_group_id = this.service.getGroupId();
        this.onerow.filter_type = this.filter_type.id;
        this.service.sendMessage(this.onerow, function (data) { _this.refresh(); });
    };
    NotificationComponent.prototype.cancel = function () {
        this.refresh();
    };
    NotificationComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.syncData();
        }
    };
    NotificationComponent.prototype.onPlatformChanged = function (entry) {
        this.onerow.platform = entry;
    };
    NotificationComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.syncData();
    };
    NotificationComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    NotificationComponent.prototype.reset = function () {
        this.isHidden = true;
        this.msgs = [];
        this.paging = { pg_page: 1, pg_size: 100 };
    };
    NotificationComponent.prototype.syncData = function () {
        var _this = this;
        this.service.getNotifications({
            'search_app_group_id': this.service.getGroupId(),
            'pg_page': this.paging.pg_page,
            'pg_size': this.paging.pg_size,
            'st_col': this.paging.st_col,
            'st_type': this.paging.st_type,
        }, function (data) {
            _this.msgs = data;
        });
    };
    NotificationComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/dashboard/notification/notification.component.html")
        }),
        __metadata("design:paramtypes", [_service_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"], _service_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/player/player.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/player/player.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h5>Player</h5>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"btn-group tright\" dropdown>\n                        <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"margin:0px;\">\n                            {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                        </button>\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                            <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\">\n                                <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"card-tools\">\n                <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                    <option *ngFor=\"let perheader of header\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                </select><i class=\"icon-arrow-down sel-ico\"></i>\n                <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n            </div>\n            <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                <thead class=\"thead-default\">\n                    <tr>\n                        <th class=\"text-center rx-table-ico-head\"><i class=\"icon-user\"></i></th>\n                        <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}}\">{{perheader.name}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let perdata of data\">\n                        <td class=\"text-center\">\n                            <div class=\"avatar\"><img src=\"assets/img/default-avatar.png\" class=\"img-avatar\"></div>\n                        </td>\n                        <td>\n                            <strong>{{perdata.id}}</strong>\n                            <div class=\"small text-muted\"><a href=\"{{perdata.storeurl}}\" target=\"_blank\">{{perdata.storeurl}}</a></div>\n                        </td>\n                        <td>{{perdata.username}}</td>\n                        <td>{{perdata.email}}</td>\n                        <td>{{perdata.created_at * 1000 | date:'dd/MM/yyyy'}}</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"100%\" class=\"rx-pagin\">\n                            <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                                <</button>\n                                    <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                                    <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                                    <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                                    <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                        <option value=\"10\" selected>10</option>\n                                        <option value=\"50\" selected>50</option>\n                                        <option value=\"100\" selected>100</option>\n                                    </select> / page\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/player/player.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/player/player.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/player.service */ "./src/app/service/player.service.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/service/group.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(service, gService) {
        this.service = service;
        this.gService = gService;
        this.app = { 'app_id': '', 'os': '', 'version': '' };
        this.data = [];
        this.isnext = true;
        this.search = { field: 'username', term: '' };
        this.paging = this.service.defaultPaging('created_at');
        this.header = [
            { id: '_id', name: 'User Id', is_search: 1, st_col: '_id', st_type: 1 },
            { id: 'username', name: 'User Name', is_search: 1, st_col: 'username', st_type: 1 },
            { id: 'email', name: 'Email', is_search: 1, st_col: 'email', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }
        ];
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.helpFetchData();
    };
    PlayerComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.helpFetchData();
    };
    PlayerComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    PlayerComponent.prototype.getApps = function () {
        this.app.app_id = this.service.getAppId();
        this.apps = this.gService.getGroupSetting();
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var ap = _a[_i];
            if (ap.app_id == this.app.app_id) {
                this.app.os = ap.os;
                this.app.version = ap.version;
            }
        }
    };
    PlayerComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.helpFetchData();
    };
    PlayerComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.helpFetchData();
        }
    };
    PlayerComponent.prototype.helpFetchData = function () {
        var _this = this;
        var _a;
        this.service.getPlayers((_a = {
                'search_app_id': this.service.getAppId(),
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type
            },
            _a['search_' + this.search.field] = this.search.term,
            _a), function (data) {
            _this.data = data;
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
        this.getApps();
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/dashboard/player/player.component.html")
        }),
        __metadata("design:paramtypes", [_service_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"], _service_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reports/ads-performance/ads-performance.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/reports/ads-performance/ads-performance.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-block rx-floathide-form\" [hidden]=\"isHidden\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"card-title\" [hidden]=\"isEdit\">Create ad</h5>\n                <h5 class=\"card-title\" [hidden]=\"!isEdit\">Edit ad</h5>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"form-group col-lg-6 col-md-6\">\n                        <label >Start date</label>\n                        <input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\" [(ngModel)]=\"startDate\">\n                    </div>\n                    <div class=\"form-group col-lg-6 col-md-6\">\n                        <label >End date</label>\n                        <input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\" [(ngModel)]=\"endDate\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label>Name</label>\n                        <input class=\"form-control\" name=\"name\" placeholder=\"Agency Id\" type=\"text\" [(ngModel)]=\"onerow.name\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label>Description</label>\n                        <input class=\"form-control\" name=\"description\" placeholder=\"Description ...\" type=\"text\" [(ngModel)]=\"onerow.desc\">\n                    </div>\n                    <div class=\"form-group col-lg-3 col-md-3\">\n                        <label>Campaign</label>\n                        <select class=\"form-control\" [(ngModel)]=\"cp\">\n                            <option *ngFor=\"let cp of campaigns\" [ngValue]=\"cp\"> {{cp.name}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label>Cost <strong>(USD)</strong></label>\n                        <input class=\"form-control\" name=\"cost\" type=\"number\" [(ngModel)]=\"onerow.cost\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label >Utm campaign</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"onerow.utm_campaign\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label>Utm Source</label>\n                        <input class=\"form-control\" name=\"name\" type=\"text\" [(ngModel)]=\"onerow.utm_source\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label >Utm Medium</label>\n                        <input class=\"form-control\" name=\"name\" type=\"text\" [(ngModel)]=\"onerow.utm_medium\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label >Utm Term</label>\n                        <input class=\"form-control\" name=\"name\" type=\"text\" [(ngModel)]=\"onerow.utm_term\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label >Utm content</label>\n                        <input class=\"form-control\" name=\"description\" type=\"text\" [(ngModel)]=\"onerow.utm_content\">\n                    </div>\n                    <div class=\"form-group col-md-6 col-lg-6\">\n                        <label >Link</label>\n                        <input class=\"form-control\" name=\"name\" type=\"text\" [(ngModel)]=\"onerow.link\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-primary\" (click)=(createAd()) [hidden]=\"isEdit\"><i class=\"icon-plus\"></i> Create </button>\n                <button class=\"btn btn-sm btn-primary\" (click)=(update()) [hidden]=\"!isEdit\"><i class=\"icon-check\"></i> Save</button>\n                <button class=\"btn btn-sm btn-secondary tright\" (click)=\"refresh()\"><i class=\"icon-close\"></i> Cancel</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Campaign Ads</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <span class=\"input-group-text\">Application</span>\n                    <div class=\"btn-group\" dropdown style=\"width: 100%\">\n                        <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"width: 100%\">\n                        {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                        </button>\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"width: 100%\">\n                            <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\" style=\"width: 100%\">\n                                <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-md-8\">\n                    <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Banner</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"clearfix\">\n                <div class=\"card-tools\">\n                    <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                        <option *ngFor=\"let perheader of headers\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                    </select><i class=\"icon-arrow-down sel-ico\"></i>\n                    <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                    <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                    <button class=\"btn btn-sm btn-success\" (click)=\"show()\"> <i class=\"icon-plus\"></i> Create ad </button>\n                </div>\n            </div>\n            <div class=\"tTableWraper\">\n                <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                    <thead class=\"thead-inverse\">\n                        <tr>\n                            <th *ngFor=\"let perheader of headers\" (click)=\"sort1($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center tMiddle\" style=\"min-width: 128px\">\n                                {{perheader.name}}\n                            </th>\n                            <th class=\"text-center tMiddle\">#</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let ad of ads\" class=\"tpointer\" (click)=\"onItemClick(ad)\">\n                            <td>\n                                {{ad.name}}\n                            </td>\n                            <td>\n                                {{ad.desc}}\n                            </td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.cost | currency:'USD':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td>{{ad.utm_source}}</td>\n                            <td>{{ad.utm_medium}}</td>\n                            <td>{{ad.utm_campaign}}</td>\n                            <td>{{ad.link}}</td>\n                            <td align=\"center\" class=\"text-center tMiddle\">\n                                <div>{{ad.start_date * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                            <td align=\"center\" class=\"text-center tMiddle\">\n                                <div>{{ad.end_date * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                            <td class=\"text-center tMiddle\">\n                                <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"delete($event, ad)\">\n                                <i class=\"icon-trash \"></i>\n                                </button>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"100% \" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                                <</button>\n                                <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                                <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                                <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                                <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                    <option value=\"10 \" selected>10</option>\n                                    <option value=\"50 \" selected>50</option>\n                                    <option value=\"100 \" selected>100</option>\n                                </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Facebook Ads</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"tTableWraper\">\n                <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                    <thead class=\"thead-inverse\">\n                        <tr>\n                            <th *ngFor=\"let perheader of facebookHeaders\" (click)=\"sort2($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center tMiddle\" style=\"min-width: 128px\">\n                                {{perheader.name}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let ad of facebookAds\">\n                            <td>{{ad.fb_campaign_name}}</td>\n                            <td>{{ad.fb_adset_name}}</td>\n                            <td>{{ad.fb_adgroup_name}}</td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.cost | currency:'USD':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.cost_vnd | currency:'VND':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td align=\"center\" class=\"text-center tMiddle\">\n                                <div>{{ad.start_date * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                            <td align=\"center\" class=\"text-center tMiddle\">\n                                <div>{{ad.end_date * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"100% \" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                                <</button>\n                                <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                                <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                                <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                                <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                    <option value=\"10 \" selected>10</option>\n                                    <option value=\"50 \" selected>50</option>\n                                    <option value=\"100 \" selected>100</option>\n                                </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Google Ads</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"tTableWraper\">\n                <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                    <thead class=\"thead-inverse\">\n                        <tr>\n                            <th *ngFor=\"let perheader of googleHeaders\" (click)=\"sort2($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center tMiddle\" style=\"min-width: 128px\">\n                                {{perheader.name}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let ad of googleAds\">\n                            <td>{{ad.gg_campaign_name}}</td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.cost | currency:'USD':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.cost_vnd | currency:'VND':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td align=\"center\" class=\"text-center tMiddle\">\n                                <div>{{ad.start_date * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                            <td align=\"center\" class=\"text-center tMiddle\">\n                                <div>{{ad.end_date * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"100% \" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                                <</button>\n                                <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                                <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                                <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                                <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                    <option value=\"10 \" selected>10</option>\n                                    <option value=\"50 \" selected>50</option>\n                                    <option value=\"100 \" selected>100</option>\n                                </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/reports/ads-performance/ads-performance.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/reports/ads-performance/ads-performance.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdsPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPerformanceComponent", function() { return AdsPerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/campaign.service */ "./src/app/service/campaign.service.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/group.service */ "./src/app/service/group.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdsPerformanceComponent = /** @class */ (function (_super) {
    __extends(AdsPerformanceComponent, _super);
    function AdsPerformanceComponent(gService, service) {
        var _this = _super.call(this) || this;
        _this.gService = gService;
        _this.service = service;
        _this.search = { field: 'name', term: '' };
        _this.ads = [];
        _this.campaigns = [];
        _this.endDate = new Date();
        _this.app = { 'app_id': '', 'os': '', 'version': '' };
        _this.googleAds = [];
        _this.paging = _this.service.defaultPaging('start_date');
        _this.startDate = _this.service.fromDate(_this.endDate.getFullYear(), _this.endDate.getMonth(), _this.endDate.getDate());
        _this.headers = [
            { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
            { id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
            { id: 'cost', name: 'Cost(USD)', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'utm_source', name: 'Utm Source', is_search: 1, st_col: 'utm_source', st_type: 1 },
            { id: 'utm_medium', name: 'Utm Medium', is_search: 1, st_col: 'utm_medium', st_type: 1 },
            { id: 'utm_term', name: 'Utm Term', is_search: 1, st_col: 'utm_term', st_type: 1 },
            { id: 'utm_content', name: 'Utm Content', is_search: 1, st_col: 'utm_content', st_type: 1 },
            { id: 'utm_campaign', name: 'Utm Campaign', is_search: 1, st_col: 'utm_campaign', st_type: 1 },
            { id: 'link', name: 'Link', is_search: 1, st_col: 'link', st_type: 1 },
            { id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
            { id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
        ];
        _this.facebookHeaders = [
            { id: 'fb_campaign_name', name: 'Campaign Name', is_search: 1, st_col: 'fb_campaign_name', st_type: 1 },
            { id: 'fb_adset_name', name: 'AdSet Name', is_search: 1, st_col: 'fb_adset_name', st_type: 1 },
            { id: 'fb_adgroup_name', name: 'AdGroup Name', is_search: 1, st_col: 'fb_adgroup_name', st_type: 1 },
            { id: 'cost', name: 'Cost(USD)', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'cost_vnd', name: 'Cost(VND)', is_search: 1, st_col: 'cost_vnd', st_type: 1 },
            { id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
            { id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
        ];
        _this.googleHeaders = [
            { id: 'gg_campaign_name', name: 'Campaign Name', is_search: 1, st_col: 'gg_campaign_name', st_type: 1 },
            { id: 'cost', name: 'Cost(USD)', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'cost_vnd', name: 'Cost(VND)', is_search: 1, st_col: 'cost_vnd', st_type: 1 },
            { id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
            { id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
        ];
        return _this;
    }
    AdsPerformanceComponent.prototype.ngOnInit = function () {
        if (!this.service.isExpired())
            this.refresh();
    };
    AdsPerformanceComponent.prototype.ngOnDestroy = function () {
        this.service.removeCampaign();
    };
    AdsPerformanceComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.refresh();
    };
    AdsPerformanceComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    AdsPerformanceComponent.prototype.refresh = function () {
        this.reset();
        this.getCampaigns();
        this.getApps();
        this.doAnalysis();
    };
    AdsPerformanceComponent.prototype.doAnalysis = function () {
        this.syncBanner();
        this.syncFacebookAd();
        this.syncGoogleAd();
    };
    AdsPerformanceComponent.prototype.getApps = function () {
        this.app.app_id = this.service.getAppId();
        this.apps = this.gService.getGroupSetting();
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var ap = _a[_i];
            if (ap.app_id == this.app.app_id) {
                this.app.os = ap.os;
                this.app.version = ap.version;
            }
        }
    };
    AdsPerformanceComponent.prototype.reset = function () {
        this.ads = [];
        this.isHidden = true;
        this.isEdit = false;
        this.cp = { '_id': '' };
        this.onerow = {
            'id': 'ad' + new Date().getMilliseconds(),
            'name': 'ad' + new Date().getMilliseconds(),
            'desc': 'ad' + new Date().getMilliseconds(),
            'is_active': 1,
            'start_date': '',
            'end_date': '',
            'link': 'link' + new Date().getMilliseconds(),
            'cost': 0,
            'type': 'banner_ad'
        };
    };
    AdsPerformanceComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.refresh();
    };
    AdsPerformanceComponent.prototype.syncBanner = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'search_type': 'banner_ad',
                'app_group_id': this.service.getGroupId(),
                'search_app_id': this.service.getAppId()
            },
            _a['search_' + this.search.field] = this.search.term,
            _a['search_campaign_id'] = this.cp._id,
            _a);
        this.service.getAds(params, function (data) { _this.ads = data; });
    };
    AdsPerformanceComponent.prototype.syncFacebookAd = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'search_type': 'facebook_ad',
                'search_app_id': this.service.getAppId()
            },
            _a['search_' + this.search.field] = this.search.term,
            _a);
        this.service.getAds(params, function (data) { _this.facebookAds = data; });
    };
    AdsPerformanceComponent.prototype.syncGoogleAd = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'search_type': 'google_ad',
                'search_app_id': this.service.getAppId()
            },
            _a['search_' + this.search.field] = this.search.term,
            _a);
        this.service.getAds(params, function (data) { _this.googleAds = data; });
    };
    AdsPerformanceComponent.prototype.getCampaigns = function () {
        var _this = this;
        var params = {
            'pg_page': 1,
            'pg_size': 100,
            'search_source': null,
            'search_app_id': this.service.getAppId(),
            'search_agency_id': '5aa0ee42b887cb6691ed5b43'
        };
        this.service.getCampaigns(params, function (data) {
            _this.campaigns = data;
            if (_this.campaigns.length > 0)
                _this.cp = _this.campaigns[0];
        });
    };
    AdsPerformanceComponent.prototype.sort1 = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol)
                this.paging.st_type *= -1;
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.syncBanner();
        }
    };
    AdsPerformanceComponent.prototype.sort2 = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol)
                this.paging.st_type *= -1;
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.syncFacebookAd();
        }
    };
    AdsPerformanceComponent.prototype.show = function () {
        this.campaigns.splice(-1, 1);
        this.isHidden = false;
        this.isEdit = false;
    };
    AdsPerformanceComponent.prototype.createAd = function () {
        var _this = this;
        this.onerow.start_date = Math.round(this.startDate.getTime() / 1000);
        this.onerow.end_date = Math.round(this.endDate.getTime() / 1000);
        this.onerow.campaign_id = this.cp._id;
        this.onerow.app_id = this.service.getAppId();
        this.service.createAd(this.onerow, function (data) { _this.refresh(); });
    };
    AdsPerformanceComponent.prototype.onItemClick = function (ad) {
        this.campaigns.splice(-1, 1);
        this.onerow = ad;
        this.cp = this.getCampaign(ad.campaign_id);
        this.startDate = new Date(this.onerow.start_date * 1000);
        this.endDate = new Date(this.onerow.end_date * 1000);
        this.isEdit = true;
        this.isHidden = false;
    };
    AdsPerformanceComponent.prototype.getCampaign = function (id) {
        for (var _i = 0, _a = this.campaigns; _i < _a.length; _i++) {
            var cp = _a[_i];
            if (cp._id == id)
                return cp;
        }
    };
    AdsPerformanceComponent.prototype.update = function () {
        var _this = this;
        this.onerow.start_date = Math.round(this.startDate.getTime() / 1000);
        this.onerow.end_date = Math.round(this.endDate.getTime() / 1000);
        this.onerow.campaign_id = this.cp._id;
        this.service.updateAd(this.onerow, function (data) { _this.refresh(); });
    };
    AdsPerformanceComponent.prototype.delete = function (e, ad) {
        var _this = this;
        e.stopPropagation();
        if (window.confirm('Có phải bạn muốn xoá không?')) {
            this.service.deleteAd({ 'id': ad._id }, function (data) { _this.refresh(); });
        }
    };
    AdsPerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ads-performance',
            template: __webpack_require__(/*! ./ads-performance.component.html */ "./src/app/dashboard/reports/ads-performance/ads-performance.component.html"),
            styles: [__webpack_require__(/*! ../report.component.scss */ "./src/app/dashboard/reports/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"], _service_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"]])
    ], AdsPerformanceComponent);
    return AdsPerformanceComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/dashboard/reports/ads-report/ads-report.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/reports/ads-report/ads-report.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Ad Report from {{dFrom | date: 'dd/MM/yyyy' }} to {{dTo |  date:'dd/MM/yyyy'}}</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Application</span>\n                    <div class=\"btn-group\" dropdown style=\"width: 100%\">\n                        <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"width: 100%\">\n                        {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                        </button>\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"width: 100%\">\n                            <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\" style=\"width: 100%\">\n                                <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">From</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dFrom\">\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">To</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker\n                    [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dTo\" >\n                </div>\n                <div class=\"col-md-3\">\n                    <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Facebook</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"tTableWraper\">\n                <table class=\"table mb-0 table-striped table-responsive-sm table-bordered table-hover\">\n                    <thead class=\"thead-inverse\">\n                        <tr>\n                            <th *ngFor=\"let perheader of facebookHeaders\" (click)=\"sort2($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center tMiddle\" style=\"min-width: 128px\">\n                                {{perheader.name}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let ad of facebookAds; let i = index\" class=\"tpointer\" (click)=(calAdCampain(i,ad))>\n                            <td>{{ad.campaign_name}}</td>\n                            <td>{{ad.adset_name}}</td>\n                            <td>{{ad.adgroup_name}}</td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.cost | currency:'USD':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.rev | currency:'USD':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td class=\"tTextRight\" [style.color]=\"getRoi(ad) < 1 ? 'red' : 'green'\">\n                                <strong> {{ getRoi(ad) | percent }}</strong>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"100% \" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                                <</button>\n                                <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                                <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                                <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                                <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                    <option value=\"10 \" selected>10</option>\n                                    <option value=\"50 \" selected>50</option>\n                                    <option value=\"100 \" selected>100</option>\n                                </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Banner</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"clearfix\">\n            </div>\n            <div class=\"tTableWraper\">\n                <table class=\"table table-striped table-responsive-sm table-bordered table-hover\">\n                    <thead class=\"thead-inverse\">\n                        <tr>\n                            <th *ngFor=\"let perheader of headers\" (click)=\"sort1($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} text-center tMiddle\" style=\"min-width: 128px\">\n                                {{perheader.name}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let ad of ads\" class=\"tpointer\" (click)=\"onItemClick(ad)\">\n                            <td>{{ad.name}}</td>\n                            <td>{{ad.utm_source}}</td>\n                            <td>{{ad.utm_medium}}</td>\n                            <td>{{ad.utm_term}}</td>\n                            <td>{{ad.utm_content}}</td>\n                            <td>{{ad.utm_campaign}}</td>\n                            <td>{{ad.link}}</td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.cost | currency:'USD':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td class=\"tTextRight\">\n                                <strong> {{ ad.rev | currency:'USD':symbol:'1.0-3'}}</strong>\n                            </td>\n                            <td class=\"tTextRight\" [style.color]=\"getRoi(ad) < 1 ? 'red' : 'green'\">\n                                <strong> {{ getRoi(ad) | percent }}</strong>\n                            </td>\n                            <td align=\"center\" class=\"text-center tMiddle\">\n                                <div>{{ad.start_date * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                            <td align=\"center\" class=\"text-center tMiddle\">\n                                <div>{{ad.end_date * 1000 | date:'dd/MM/yyyy'}}</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"100% \" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <=1 \" (click)=\"jumpPage(paging.pg_page - 1) \">\n                                <</button>\n                                <input type=\"number \" class=\"rx-cur \" [(ngModel)]=\"paging.pg_page \">\n                                <button class=\"rx-next \" [disabled]=\"!isnext \" (click)=\"jumpPage(paging.pg_page + 1) \">></button>\n                                <span class=\"rx-jump \" (click)=\"jumpPage(paging.pg_page) \"><i class=\"icon-rocket \"></i></span>\n                                <select type=\"number \" class=\"rx-pg-size \" (ngModelChange)=\"resizePage($event) \" [(ngModel)]=\"paging.pg_size \">\n                                    <option value=\"10 \" selected>10</option>\n                                    <option value=\"50 \" selected>50</option>\n                                    <option value=\"100 \" selected>100</option>\n                                </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/reports/ads-report/ads-report.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/reports/ads-report/ads-report.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsReportComponent", function() { return AdsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/campaign.service */ "./src/app/service/campaign.service.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/group.service */ "./src/app/service/group.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdsReportComponent = /** @class */ (function (_super) {
    __extends(AdsReportComponent, _super);
    function AdsReportComponent(gService, service) {
        var _this = _super.call(this) || this;
        _this.gService = gService;
        _this.service = service;
        _this.search = { field: 'name', term: '' };
        _this.ads = [];
        _this.campaigns = [];
        _this.endDate = new Date();
        _this.dTo = new Date();
        _this.dMax = new Date();
        _this.app = { 'app_id': '', 'os': '', 'version': '' };
        _this.paging = _this.service.defaultPaging('date');
        _this.startDate = _this.service.fromDate(_this.endDate.getFullYear(), _this.endDate.getMonth(), _this.endDate.getDate());
        _this.dFrom = _this.service.fromDate(_this.dTo.getFullYear(), _this.dTo.getMonth(), _this.dTo.getDate());
        _this.dMin = _this.service.fromDate(_this.dMax.getFullYear(), _this.dMax.getMonth(), _this.dMax.getDate());
        _this.isnext = true;
        _this.headers = [
            { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
            { id: 'utm_source', name: 'Utm Source', is_search: 1, st_col: 'utm_source', st_type: 1 },
            { id: 'utm_medium', name: 'Utm Medium', is_search: 1, st_col: 'utm_medium', st_type: 1 },
            { id: 'utm_term', name: 'Utm Term', is_search: 1, st_col: 'utm_term', st_type: 1 },
            { id: 'utm_content', name: 'Utm Content', is_search: 1, st_col: 'utm_content', st_type: 1 },
            { id: 'utm_campaign', name: 'Utm Campaign', is_search: 1, st_col: 'utm_campaign', st_type: 1 },
            { id: 'link', name: 'Link', is_search: 1, st_col: 'link', st_type: 1 },
            { id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'rev', name: 'Rev', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'roi', name: 'Roi', is_search: 1 },
            { id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
            { id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
        ];
        _this.facebookHeaders = [
            { id: 'fb_campaign_name', name: 'Campaign', is_search: 1, st_col: 'fb_campaign_name', st_type: 1 },
            { id: 'fb_adset_name', name: 'Ad Set', is_search: 1, st_col: 'fb_adset_name', st_type: 1 },
            { id: 'fb_adgroup_name', name: 'Ad Group', is_search: 1, st_col: 'fb_adgroup_name', st_type: 1 },
            { id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'rev', name: 'Rev', is_search: 1, st_col: 'rev', st_type: 1 },
            { id: 'roi', name: 'Roi', is_search: 1 }
        ];
        return _this;
    }
    AdsReportComponent.prototype.ngOnInit = function () {
        if (!this.service.isExpired())
            this.refresh();
    };
    AdsReportComponent.prototype.ngOnDestroy = function () {
        this.service.removeCampaign();
    };
    AdsReportComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.refresh();
    };
    AdsReportComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    AdsReportComponent.prototype.refresh = function () {
        this.reset();
        this.getApps();
        this.getFacebookAd();
        this.doAnalysis();
    };
    AdsReportComponent.prototype.doAnalysis = function () {
        this.getFacebookAd();
        this.getBanner();
    };
    AdsReportComponent.prototype.getApps = function () {
        this.app.app_id = this.service.getAppId();
        this.apps = this.gService.getGroupSetting();
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var ap = _a[_i];
            if (ap.app_id == this.app.app_id) {
                this.app.os = ap.os;
                this.app.version = ap.version;
            }
        }
    };
    AdsReportComponent.prototype.reset = function () {
        this.ads = [];
        this.isHidden = true;
        this.isEdit = false;
        this.cp = { '_id': '' };
        this.onerow = {
            'id': 'ad' + new Date().getMilliseconds(),
            'name': 'ad' + new Date().getMilliseconds(),
            'desc': 'ad' + new Date().getMilliseconds(),
            'is_active': 1,
            'start_date': '',
            'end_date': '',
            'link': 'link' + new Date().getMilliseconds(),
            'cost': new Date().getMilliseconds(),
            'type': 'banner_ad'
        };
    };
    AdsReportComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.refresh();
    };
    AdsReportComponent.prototype.getBanner = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'search_type': 'banner_ad',
                'app_group_id': this.service.getGroupId(),
                'search_app_id': this.service.getAppId()
            },
            _a['search_' + this.search.field] = this.search.term,
            _a['search_campaign_id'] = this.cp._id,
            _a);
        this.service.getAds(params, function (data) { _this.ads = data; });
    };
    AdsReportComponent.prototype.getFacebookAd = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'app_group_id': this.service.getGroupId(),
                'search_app_id': this.service.getAppId(),
                'startdate': Math.round(this.dFrom.getTime() / 1000),
                'enddate': Math.round(this.dTo.getTime() / 1000)
            },
            _a['search_' + this.search.field] = this.search.term,
            _a);
        this.service.getAdsReport(params, function (data) { _this.facebookAds = data; });
    };
    AdsReportComponent.prototype.sort1 = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol)
                this.paging.st_type *= -1;
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.getBanner();
        }
    };
    AdsReportComponent.prototype.sort2 = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol)
                this.paging.st_type *= -1;
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.getFacebookAd();
        }
    };
    AdsReportComponent.prototype.show = function () {
        this.campaigns.splice(-1, 1);
        this.isHidden = false;
        this.isEdit = false;
    };
    AdsReportComponent.prototype.getCampaign = function (id) {
        for (var _i = 0, _a = this.campaigns; _i < _a.length; _i++) {
            var cp = _a[_i];
            if (cp._id == id)
                return cp;
        }
    };
    AdsReportComponent.prototype.calAdgroup = function (arradgroup) {
        var arrtmpadgroup = [];
        arradgroup.forEach(function (adgroupobj) {
            var objectadgroup = arrtmpadgroup.find(function (obj) { return obj.adgroup_name === adgroupobj.adgroup_name; });
            if (typeof (objectadgroup) == 'undefined') {
                var jsonadgroup = { adgroup_name: adgroupobj.adgroup_name, cost: adgroupobj.cost, rev: adgroupobj.rev };
                arrtmpadgroup.push(jsonadgroup);
            }
            else {
                objectadgroup['cost'] += adgroupobj.cost;
                objectadgroup['rev'] += adgroupobj.rev;
            }
        });
        return arrtmpadgroup;
    };
    AdsReportComponent.prototype.getRoi = function (ad) {
        return ad.cost > 0 ? (ad.rev * 1.0 / ad.cost) : 0;
    };
    AdsReportComponent.prototype.calAdCampain = function (index, arrcampain) {
        var date = new Date();
        var indextime = date.getTime();
        if (arrcampain.campaignindex) {
            this.facebookAds = this.facebookAds.filter(function (obj) {
                return obj.checkindex != arrcampain.campaignindex;
            });
        }
        if (arrcampain.adsetindex) {
            this.facebookAds = this.facebookAds.filter(function (obj) {
                return (typeof (obj.adgroup_name) == 'undefined' || obj.checkindex != arrcampain.adsetindex || obj.adgroupindex != arrcampain.adgroupindex);
            });
        }
        arrcampain.checked = (arrcampain.checked) ? !arrcampain.checked : true;
        if (arrcampain && (typeof (arrcampain.checked) == 'undefined' || arrcampain.checked == true)) {
            if (arrcampain && arrcampain.adset) {
                if (!arrcampain.campaignindex) {
                    arrcampain.campaignindex = indextime;
                }
                var jadset = 1;
                for (var _i = 0, _a = arrcampain.adset; _i < _a.length; _i++) {
                    var objadset = _a[_i];
                    var jsonadsettmp = { campaign_id: '', adset_name: objadset.adset_name, cost: objadset.cost, rev: objadset.rev, checkindex: arrcampain.campaignindex, arradgroup: objadset.arradgroup };
                    this.facebookAds.splice(index + jadset, 0, jsonadsettmp);
                    jadset++;
                }
            }
            if (arrcampain && arrcampain.arradgroup) {
                if (!arrcampain.adsetindex) {
                    arrcampain.adsetindex = arrcampain.checkindex;
                    arrcampain.adgroupindex = indextime;
                }
                var jadgroup = 1;
                var arrtmp = this.calAdgroup(arrcampain.arradgroup);
                for (var _b = 0, arrtmp_1 = arrtmp; _b < arrtmp_1.length; _b++) {
                    var objadset = arrtmp_1[_b];
                    var jsonadgrouptmp = { campaign_id: '', adset_name: '', adgroup_name: objadset.adgroup_name, cost: objadset.cost, rev: objadset.rev, checkindex: arrcampain.adsetindex, adgroupindex: arrcampain.adgroupindex };
                    this.facebookAds.splice(index + jadgroup, 0, jsonadgrouptmp);
                    jadgroup++;
                }
            }
        }
    };
    AdsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ads-report',
            template: __webpack_require__(/*! ./ads-report.component.html */ "./src/app/dashboard/reports/ads-report/ads-report.component.html"),
            styles: [__webpack_require__(/*! ../report.component.scss */ "./src/app/dashboard/reports/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"], _service_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"]])
    ], AdsReportComponent);
    return AdsReportComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/dashboard/reports/arm/arm.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/reports/arm/arm.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">ARM Report from {{dFrom | date: 'dd/MM/yyyy' }} to {{dTo |  date:'dd/MM/yyyy'}}</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row col-md-12 form-group\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Source</span>\n                    <select class=\"form-control\" [(ngModel)]=\"source\" (ngModelChange)=\"onSourceChanged($event)\">\n                        <option *ngFor=\"let s of sources\" [ngValue]=\"s\"> {{s.source_group}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Audience</span>\n                    <select class=\"form-control\" [(ngModel)]=\"currentAudience\" [disabled] = \"isAudienceHidden\">\n                        <option *ngFor=\"let audience of audiences\" [ngValue]=\"audience\"> {{audience.name}}</option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">OS</span>\n                    <select class=\"form-control\" [(ngModel)]=\"platform\" (ngModelChange)=\"osPickerChanged($event)\">\n                        <option *ngFor=\"let p of platforms\" [ngValue]=\"p\"> {{p.name}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <div [hidden]=\"!isVersionHidden\">\n                        <span class=\"input-group-text\">Version</span>\n                        <select class=\"form-control\" [(ngModel)]=\"version\"\n                            (ngModelChange)=\"onVersionChanged($event)\">\n                            <option *ngFor=\"let v of versionDisplay\" [ngValue]=\"v\"> {{v.version}} </option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">From</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dFrom\">\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">To</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker\n                    [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dTo\">\n                </div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Acquisition Retention </h5>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"chartdiv\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <div class=\"clearfix\">\n                <div class=\"card-tools\">\n                    <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                        <option *ngFor=\"let perheader of header\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                    </select><i class=\"icon-arrow-down sel-ico\"></i>\n                    <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                    <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                    <button class=\"btn btn-sm btn-success\"> <i class=\"icon-cloud-download\"></i></button>\n                </div>\n            </div>\n            <div class=\"tTableWraper\">\n                <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                    <thead class=\"thead-default\">\n                        <tr>\n                            <th colspan=\"5\" class=\"rx-table-head-border\"></th>\n                            <th colspan=\"6\" class=\"rx-table-head-border\">Acquisition</th>\n                            <th colspan=\"3\" class=\"rx-table-head-border\">Retention</th>\n                            <th colspan=\"6\" class=\"rx-table-head-border\">Monitization</th>\n                            <tr>\n                                <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}}\">{{perheader.name}}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let d of data\">\n                                <td class=\"text-center\">{{d._id * 1000 | date:'dd/MM/yyyy'}} </td>\n                                <td> {{d.source}}</td>\n                                <td> {{d.os}}</td>\n                                <td> {{d.campaign_name}}</td>\n                                <td> {{d.ad_name}}</td>\n                                <td> {{d.install}} </td>\n                                <td> {{d.nru0}}</td>\n                                <td> {{d.nru}}</td>\n                                <td> {{d.nru0_install | number:'1.0-2'}} %</td>\n                                <td> {{d.cost}}</td>\n                                <td> {{d.cpi}}</td>\n                                <td> {{d.rr1}}%</td>\n                                <td> {{d.rr7}}%</td>\n                                <td> {{d.rr30}}%</td>\n                                <td> {{d.uv30}}</td>\n                                <td> {{d.cr7}}%</td>\n                                <td> {{d.rev0}}</td>\n                                <td> {{d.rev7}}</td>\n                                <td> {{d.cr30}}%</td>\n                                <td> {{d.rev30}}</td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"100%\" class=\"rx-pagin\">\n                                    <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                                    <</button>\n                                    <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                                    <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                                    <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                                    <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                        <option value=\"10\" selected>10</option>\n                                        <option value=\"50\" selected>50</option>\n                                        <option value=\"100\" selected>100</option>\n                                    </select> / page\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/dashboard/reports/arm/arm.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/reports/arm/arm.component.ts ***!
  \********************************************************/
/*! exports provided: ArmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmComponent", function() { return ArmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var _service_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/report.service */ "./src/app/service/report.service.ts");
/* harmony import */ var _service_campaign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/campaign.service */ "./src/app/service/campaign.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArmComponent = /** @class */ (function () {
    function ArmComponent(service, AmCharts, campaignService) {
        this.service = service;
        this.AmCharts = AmCharts;
        this.campaignService = campaignService;
        this.dTo = new Date();
        this.dMax = new Date();
        this.data = [];
        this.isnext = true;
        this.search = { field: 'source', term: '' };
        this.platforms = [];
        this.sources = [{ 'source_group': "All", 'source': '-1' }];
        this.versions = [{ 'version': '', 'os': '' }];
        this.versionDisplay = [{ 'version': '', 'os': '' }];
        // Audiences
        this.audiences = [{ _id: -1, name: 'All' }];
        this.isAudienceHidden = true;
        this.source = this.sources[0];
        this.currentAudience = this.audiences[0];
        this.platforms = this.service.defaultPlatforms();
        this.platform = this.platforms[0];
        this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
        this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());
        this.paging = this.service.defaultPaging('date');
        this.header = [
            { id: 'date', name: 'Date', is_search: 1, st_col: 'date', st_type: 1 },
            { id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
            { id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
            { id: 'campain_name', name: 'Campain Name', is_search: 1, st_col: 'campain_name', st_type: 0 },
            { id: 'ad_name', name: 'Ad Name', is_search: 1, st_col: 'ad_name', st_type: 0 },
            { id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
            { id: 'nru0', name: 'NRU0', is_search: 1, st_col: 'nru0', st_type: 1 },
            { id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
            { id: 'nru0_install', name: 'NRU0/Install', is_search: 1, st_col: 'nru0_install', st_type: 1 },
            { id: 'cost', name: 'Cost(USD)', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'cpi', name: 'CPI', is_search: 1, st_col: 'cpi', st_type: 1 },
            { id: 'rr1', name: 'RR1', is_search: 1, st_col: 'rr1', st_type: 1 },
            { id: 'rr7', name: 'RR7', is_search: 1, st_col: 'rr7', st_type: 1 },
            { id: 'rr30', name: 'RR30', is_search: 1, st_col: 'rr30', st_type: 1 },
            { id: 'uv30', name: 'UV30', is_search: 1, st_col: 'uv30', st_type: 1 },
            { id: 'cr7', name: 'CR7', is_search: 1, st_col: 'cr7', st_type: 1 },
            { id: 'rev0', name: 'REV0', is_search: 1, st_col: 'rev0', st_type: 1 },
            { id: 'rev7', name: 'REV7', is_search: 1, st_col: 'rev7', st_type: 1 },
            { id: 'cr30', name: 'CR30', is_search: 1, st_col: 'cr30', st_type: 1 },
            { id: 'rev30', name: 'REV30', is_search: 1, st_col: 'rev30', st_type: 1 }
        ];
        this.getSources();
        this.doAnalysis();
    }
    ArmComponent.prototype.ngOnInit = function () {
    };
    ArmComponent.prototype.makeChart = function (chartData) {
        chartData.sort(function (l, r) {
            var date1 = Date.parse(l.date);
            var date2 = Date.parse(r.date);
            if (date1 > date2)
                return 1;
            if (date1 < date2)
                return -1;
            return 0;
        });
        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "legend": {
                "equalWidths": false,
                "useGraphSettings": true,
                "valueAlign": "left",
                "valueWidth": 120
            },
            "dataProvider": chartData,
            "valueAxes": [{
                    "id": "leftAxis",
                    "axisAlpha": 0,
                    "gridAlpha": 0,
                    "position": "left"
                }, {
                    "id": "rightAxis",
                    "axisAlpha": 0,
                    "gridAlpha": 0,
                    "position": "right"
                }],
            "graphs": [{
                    "alphaField": "alpha",
                    "balloonText": "INSTALL:[[value]]",
                    "dashLengthField": "dashLength",
                    "fillAlphas": 0.7,
                    "legendPeriodValueText": "total: [[value.sum]]",
                    "legendValueText": "[[value]]",
                    "title": "INSTALL",
                    "type": "column",
                    "valueField": "install",
                    "valueAxis": "leftAxis",
                    'fillColors': "#7bc0f7",
                    'lineColor': '#64b5f6'
                }, {
                    "alphaField": "alpha",
                    "balloonText": "NRU:[[value]]",
                    "dashLengthField": "dashLength",
                    "fillAlphas": 0.7,
                    "legendPeriodValueText": "total: [[value.sum]]",
                    "legendValueText": "[[value]]",
                    "title": "NRU",
                    "type": "column",
                    "valueField": "nru",
                    "valueAxis": "leftAxis",
                    'fillColors': "#3b8ad9",
                    'lineColor': '#1976d2'
                }, {
                    "balloonText": "RR1:[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "useLineColorForBulletBorder": true,
                    "bulletColor": "#FFFFFF",
                    "bulletSizeField": "townSize",
                    "dashLengthField": "dashLength",
                    "descriptionField": "",
                    "labelPosition": "right",
                    "labelText": "[[]]",
                    "legendValueText": "[[value]]",
                    "title": "RR1",
                    "fillAlphas": 0,
                    "valueField": "rr1",
                    'lineColor': '#ffdb69',
                    "valueAxis": "rightAxis"
                }, {
                    "balloonText": "RR7:[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "useLineColorForBulletBorder": true,
                    "bulletColor": "#FFFFFF",
                    "bulletSizeField": "townSize",
                    "dashLengthField": "dashLength",
                    "descriptionField": "",
                    "labelPosition": "right",
                    "labelText": "[[]]",
                    "legendValueText": "[[value]]%",
                    "title": "RR7",
                    "fillAlphas": 0,
                    "valueField": "rr7",
                    "valueAxis": "rightAxis"
                }, {
                    "balloonText": "RR30:[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "useLineColorForBulletBorder": true,
                    "bulletColor": "#FFFFFF",
                    "bulletSizeField": "townSize",
                    "dashLengthField": "dashLength",
                    "descriptionField": "",
                    "labelPosition": "right",
                    "labelText": "[[]]",
                    "legendValueText": "[[value]]%",
                    "title": "RR30",
                    "fillAlphas": 0,
                    "valueField": "rr30",
                    "valueAxis": "rightAxis",
                    'lineColor': '#ef6c00'
                }],
            "chartCursor": {
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0.1,
                "cursorColor": "#000000",
                "fullWidth": true,
                "valueBalloonsEnabled": false,
                "zoomable": false
            },
            "dataDateFormat": "YYYY-MM-DD",
            "categoryField": "date",
            "categoryAxis": {
                "dateFormats": [{
                        "period": "DD",
                        "format": "DD"
                    }, {
                        "period": "WW",
                        "format": "MMM DD"
                    }, {
                        "period": "MM",
                        "format": "MMM"
                    }, {
                        "period": "YYYY",
                        "format": "YYYY"
                    }],
                "parseDates": true,
                "autoGridCount": false,
                "axisColor": "#555555",
                "gridAlpha": 0.1,
                "gridColor": "#FFFFFF",
                "gridCount": 50
            },
            "export": {
                "enabled": true
            }
        });
    };
    ArmComponent.prototype.ngOnDestroy = function () {
        if (this.chart)
            this.AmCharts.destroyChart(this.chart);
    };
    ArmComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.doAnalysis();
    };
    ArmComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    ArmComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol)
                this.paging.st_type *= -1;
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.doAnalysis();
        }
    };
    ArmComponent.prototype.doAnalysis = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'app_group_id': this.service.getGroupId(),
                'startdate': Math.round(this.dFrom.getTime() / 1000),
                'enddate': Math.round(this.dTo.getTime() / 1000)
            },
            _a['search_' + this.search.field] = this.search.term,
            _a);
        if (this.platform.id != '-1') {
            params.search_os = this.platform.id;
            params.app_id = this.service.getAppId();
        }
        if (this.source.source != '-1')
            params.search_source = this.source.source;
        if (this.currentAudience._id != -1)
            params.ad_id = this.currentAudience._id;
        this.service.armAnalysis(params, function (data) {
            _this.data = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                _this.data.push(item);
                for (var _a = 0, _b = item.docs; _a < _b.length; _a++) {
                    var doc = _b[_a];
                    _this.data.push(doc);
                }
            }
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
        this.getChart();
    };
    ArmComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            // Sources
            _this.sources = _this.sources.concat(data.source);
            _this.source = _this.sources[0];
            // Os
            _this.versions = data.os.settings;
            _this.versionDisplay = _this.versions;
            _this.version = _this.versionDisplay[0];
        });
    };
    ArmComponent.prototype.getChart = function () {
        var _this = this;
        var params = {
            'pg_page': 1,
            'pg_size': 100,
            'st_col': 'date',
            'st_type': 1,
            'app_id': null,
            'ad_id': null,
            'app_group_id': this.service.getGroupId(),
            'search_os': null,
            'search_source': null,
            'startdate': Math.round(this.dFrom.getTime() / 1000),
            'enddate': Math.round(this.dTo.getTime() / 1000)
        };
        if (this.platform.id != '-1') {
            params.search_os = this.platform.id;
            params.app_id = this.service.getAppId();
        }
        if (this.source.source != '-1')
            params.search_source = this.source.source;
        if (this.currentAudience._id != -1)
            params.ad_id = this.currentAudience._id;
        this.service.armChartAnalysis(params, function (data) {
            _this.makeChart(data);
        });
    };
    ArmComponent.prototype.onVersionChanged = function (event) {
        this.service.setAppId(event.app_id);
    };
    ArmComponent.prototype.onSourceChanged = function (selectedSource) {
        var _this = this;
        if (selectedSource.source == -1) {
            this.isAudienceHidden = true;
            this.currentAudience = this.audiences[0];
        }
        else {
            this.isAudienceHidden = false;
            var params = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'search_type': selectedSource.source,
                'app_group_id': this.service.getGroupId()
            };
            this.campaignService.getAds(params, function (data) {
                _this.audiences = data;
                _this.audiences.splice(0, 0, { _id: -1, name: 'All' });
                _this.currentAudience = _this.audiences[0];
            });
        }
    };
    ArmComponent.prototype.osPickerChanged = function (event) {
        this.versionDisplay = [];
        if (event.id == '-1')
            this.isVersionHidden = false;
        else {
            this.isVersionHidden = true;
            for (var _i = 0, _a = this.versions; _i < _a.length; _i++) {
                var v = _a[_i];
                if (v.os == event.id)
                    this.versionDisplay.push(v);
            }
            this.version = this.versionDisplay[0];
            this.service.setAppId(this.version.app_id);
        }
    };
    ArmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arm',
            template: __webpack_require__(/*! ./arm.component.html */ "./src/app/dashboard/reports/arm/arm.component.html"),
            styles: [__webpack_require__(/*! ../report.component.scss */ "./src/app/dashboard/reports/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__["AmChartsService"],
            _service_campaign_service__WEBPACK_IMPORTED_MODULE_3__["CampaignService"]])
    ], ArmComponent);
    return ArmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reports/armpd/armpd.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/reports/armpd/armpd.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">ARM PD Report from {{dFrom | date: 'dd/MM/yyyy' }} to {{dTo |  date:'dd/MM/yyyy'}}</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row col-md-12 form-group\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Source</span>\n                    <select class=\"form-control\" [(ngModel)]=\"source\" (ngModelChange)=\"onSourceChanged($event)\">\n                        <option *ngFor=\"let s of sources\" [ngValue]=\"s\"> {{s.source_group}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Audience</span>\n                    <select class=\"form-control\" [(ngModel)]=\"currentAudience\" [disabled] = \"isAudienceHidden\">\n                        <option *ngFor=\"let audience of audiences\" [ngValue]=\"audience\"> {{audience.name}}</option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">OS</span>\n                    <select class=\"form-control\" [(ngModel)]=\"platform\" (ngModelChange)=\"osPickerChanged($event)\">\n                        <option *ngFor=\"let p of platforms\" [ngValue]=\"p\"> {{p.name}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <div [hidden]=\"!isVersionHidden\">\n                        <span class=\"input-group-text\">Version</span>\n                        <select class=\"form-control\" [(ngModel)]=\"version\"\n                            (ngModelChange)=\"onVersionChanged($event)\">\n                            <option *ngFor=\"let v of versionDisplay\" [ngValue]=\"v\"> {{v.version}} </option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">From</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dFrom\">\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">To</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker\n                    [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dTo\">\n                </div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Acquisition Retention </h5>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"chartdiv\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <div class=\"clearfix\">\n                <div class=\"card-tools\">\n                    <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                        <option *ngFor=\"let perheader of header\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                    </select><i class=\"icon-arrow-down sel-ico\"></i>\n                    <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                    <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                    <button class=\"btn btn-sm btn-success\"> <i class=\"icon-cloud-download\"></i></button>\n                </div>\n            </div>\n            <div class=\"tTableWraper\">\n                <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                    <thead class=\"thead-default\">\n                        <tr>\n                            <th colspan=\"3\" class=\"rx-table-head-border\"></th>\n                            <th colspan=\"6\" class=\"rx-table-head-border\">Acquisition</th>\n                            <th colspan=\"3\" class=\"rx-table-head-border\">Retention</th>\n                            <th colspan=\"6\" class=\"rx-table-head-border\">Monitization</th>\n                            <tr>\n                                <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}}\">{{perheader.name}}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let d of data\">\n                                <td class=\"text-center\">{{d._id * 1000 | date:'dd-MM-yyyy'}} </td>\n                                <td> {{d.source}} </td>\n                                <td> {{d.os }} </td>\n                                <td> {{d.install }} </td>\n                                <td> {{d.nru0 }} </td>\n                                <td> {{d.nru }} </td>\n                                <td> {{d.nru0_install == null ? 0 : d.nru0_install | number:'1.0-2' }}% </td>\n                                <td> {{d.cost }} </td>\n                                <td> {{d.cpi }} </td>\n                                <td> {{d.rr1 }}% </td>\n                                <td> {{d.rr7 }}% </td>\n                                <td> {{d.rr30 }}% </td>\n                                <td> {{d.uv30 }} </td>\n                                <td> {{d.cr7 }}% </td>\n                                <td> {{d.cr30 }} </td>\n                                <td> {{d.rev0}}</td>\n                                <td> {{d.rev7 }}% </td>\n                                <td> {{d.rev30 }} </td>\n                            </tr>\n                            <!-- Pagination -->\n                            <tr>\n                                <td colspan=\"100%\" class=\"rx-pagin\">\n                                    <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                                    <</button>\n                                    <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                                    <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                                    <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                                    <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                        <option value=\"10\" selected>10</option>\n                                        <option value=\"50\" selected>50</option>\n                                        <option value=\"100\" selected>100</option>\n                                    </select> / page\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/dashboard/reports/armpd/armpd.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/reports/armpd/armpd.component.ts ***!
  \************************************************************/
/*! exports provided: ArmpdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmpdComponent", function() { return ArmpdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var _service_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/report.service */ "./src/app/service/report.service.ts");
/* harmony import */ var _service_campaign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/campaign.service */ "./src/app/service/campaign.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArmpdComponent = /** @class */ (function () {
    function ArmpdComponent(service, AmCharts, campaignService) {
        this.service = service;
        this.AmCharts = AmCharts;
        this.campaignService = campaignService;
        this.dTo = new Date();
        this.dMax = new Date();
        this.data = [];
        this.isnext = true;
        this.search = { field: 'source', term: '' };
        this.platforms = [];
        this.sources = [{ 'source_group': "All", 'source': '-1' }];
        this.versions = [{ 'version': '', 'os': '' }];
        this.versionDisplay = [{ 'version': '', 'os': '' }];
        // Audiences
        this.audiences = [{ _id: -1, name: 'All' }];
        this.isAudienceHidden = true;
        this.source = this.sources[0];
        this.currentAudience = this.audiences[0];
        this.platforms = this.service.defaultPlatforms();
        this.platform = this.platforms[0];
        this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
        this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());
        this.paging = this.service.defaultPaging('date');
        this.header = [
            { id: 'date', name: 'Date', is_search: 1, st_col: 'data', st_type: 1 },
            { id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
            { id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
            { id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
            { id: 'nru0', name: 'NRU0', is_search: 1, st_col: 'nru0', st_type: 1 },
            { id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
            { id: 'nru0_install', name: 'NRU0/Install', is_search: 1, st_col: 'nru0_install', st_type: 1 },
            { id: 'cost', name: 'Cost(USD)', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'cpi', name: 'CPI', is_search: 1, st_col: 'cpi', st_type: 1 },
            { id: 'rr1', name: 'RR1', is_search: 1, st_col: 'rr1', st_type: 1 },
            { id: 'rr7', name: 'RR7', is_search: 1, st_col: 'rr7', st_type: 1 },
            { id: 'rr30', name: 'RR30', is_search: 1, st_col: 'rr30', st_type: 1 },
            { id: 'uv30', name: 'UV30', is_search: 1, st_col: 'uv30', st_type: 1 },
            { id: 'cr7', name: 'CR7', is_search: 1, st_col: 'cr7', st_type: 1 },
            { id: 'rev0', name: 'REV0', is_search: 1, st_col: 'rev0', st_type: 1 },
            { id: 'rev7', name: 'REV7', is_search: 1, st_col: 'rev7', st_type: 1 },
            { id: 'cr30', name: 'CR30', is_search: 1, st_col: 'cr30', st_type: 1 },
            { id: 'rev30', name: 'REV30', is_search: 1, st_col: 'rev30', st_type: 1 }
        ];
        this.doAnalysis();
        this.getSources();
    }
    ArmpdComponent.prototype.ngOnInit = function () {
    };
    ArmpdComponent.prototype.makeChart = function (chartData) {
        chartData.sort(function (l, r) {
            var date1 = Date.parse(l.date);
            var date2 = Date.parse(r.date);
            if (date1 > date2)
                return 1;
            if (date1 < date2)
                return -1;
            return 0;
        });
        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "legend": {
                "equalWidths": false,
                "useGraphSettings": true,
                "valueAlign": "left",
                "valueWidth": 120
            },
            "dataProvider": chartData,
            "valueAxes": [{
                    "id": "leftAxis",
                    "axisAlpha": 0,
                    "gridAlpha": 0,
                    "position": "left",
                    "title": ""
                }, {
                    "id": "rightAxis",
                    "axisAlpha": 0,
                    "gridAlpha": 0,
                    "position": "right",
                    "title": ""
                }],
            "graphs": [{
                    "alphaField": "alpha",
                    "balloonText": "INSTALL:[[value]]",
                    "dashLengthField": "dashLength",
                    "fillAlphas": 0.7,
                    "legendPeriodValueText": "total: [[value.sum]]",
                    "legendValueText": "[[value]]",
                    "title": "INSTALL",
                    "type": "column",
                    "valueField": "install",
                    "valueAxis": "leftAxis",
                    'fillColors': "#7bc0f7",
                    'lineColor': '#64b5f6'
                }, {
                    "alphaField": "alpha",
                    "balloonText": "NRU:[[value]]",
                    "dashLengthField": "dashLength",
                    "fillAlphas": 0.7,
                    "legendPeriodValueText": "total: [[value.sum]]",
                    "legendValueText": "[[value]]",
                    "title": "NRU",
                    "type": "column",
                    "valueField": "nru",
                    "valueAxis": "leftAxis",
                    'fillColors': "#3b8ad9",
                    'lineColor': '#1976d2'
                }, {
                    "balloonText": "RR1:[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "useLineColorForBulletBorder": true,
                    "bulletColor": "#FFFFFF",
                    "bulletSizeField": "townSize",
                    "dashLengthField": "dashLength",
                    "descriptionField": "",
                    "labelPosition": "right",
                    "labelText": "[[]]",
                    "legendValueText": "[[value]]",
                    "title": "RR1",
                    "fillAlphas": 0,
                    "valueField": "rr1",
                    'lineColor': '#ffdb69',
                    "valueAxis": "rightAxis"
                }, {
                    "balloonText": "RR7:[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "useLineColorForBulletBorder": true,
                    "bulletColor": "#FFFFFF",
                    "bulletSizeField": "townSize",
                    "dashLengthField": "dashLength",
                    "descriptionField": "",
                    "labelPosition": "right",
                    "labelText": "[[]]",
                    "legendValueText": "[[value]]%",
                    "title": "RR7",
                    "fillAlphas": 0,
                    "valueField": "rr7",
                    "valueAxis": "rightAxis"
                }, {
                    "balloonText": "RR30:[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "useLineColorForBulletBorder": true,
                    "bulletColor": "#FFFFFF",
                    "bulletSizeField": "townSize",
                    "dashLengthField": "dashLength",
                    "descriptionField": "",
                    "labelPosition": "right",
                    "labelText": "[[]]",
                    "legendValueText": "[[value]]%",
                    "title": "RR30",
                    "fillAlphas": 0,
                    "valueField": "rr30",
                    "valueAxis": "rightAxis",
                    'lineColor': '#ef6c00'
                }],
            "chartCursor": {
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0.1,
                "cursorColor": "#000000",
                "fullWidth": true,
                "valueBalloonsEnabled": false,
                "zoomable": false
            },
            "dataDateFormat": "YYYY-MM-DD",
            "categoryField": "date",
            "categoryAxis": {
                "dateFormats": [{
                        "period": "DD",
                        "format": "DD"
                    }, {
                        "period": "WW",
                        "format": "MMM DD"
                    }, {
                        "period": "MM",
                        "format": "MMM"
                    }, {
                        "period": "YYYY",
                        "format": "YYYY"
                    }],
                "parseDates": true,
                "autoGridCount": false,
                "axisColor": "#555555",
                "gridAlpha": 0.1,
                "gridColor": "#FFFFFF",
                "gridCount": 50
            },
            "export": {
                "enabled": true
            }
        });
    };
    ArmpdComponent.prototype.ngOnDestroy = function () {
        if (this.chart)
            this.AmCharts.destroyChart(this.chart);
    };
    ArmpdComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.doAnalysis();
    };
    ArmpdComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    ArmpdComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.doAnalysis();
        }
    };
    ArmpdComponent.prototype.doAnalysis = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'app_group_id': this.service.getGroupId(),
                'startdate': Math.round(this.dFrom.getTime() / 1000),
                'enddate': Math.round(this.dTo.getTime() / 1000)
            },
            _a['search_' + this.search.field] = this.search.term,
            _a);
        if (this.platform.id != '-1') {
            params.search_os = this.platform.id;
            params.app_id = this.service.getAppId();
        }
        if (this.source.source != '-1')
            params.search_source = this.source.source;
        if (this.currentAudience._id != -1)
            params.ad_id = this.currentAudience._id;
        this.service.armPdAnalysis(params, function (data) {
            _this.data = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                _this.data.push(item);
                for (var _a = 0, _b = item.docs; _a < _b.length; _a++) {
                    var doc = _b[_a];
                    _this.data.push(doc);
                }
            }
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
        this.getChart();
    };
    ArmpdComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            // Sources
            _this.sources = _this.sources.concat(data.source);
            _this.source = _this.sources[0];
            // Os
            _this.versions = data.os.settings;
            _this.versionDisplay = _this.versions;
            _this.version = _this.versionDisplay[0];
        });
    };
    ArmpdComponent.prototype.getChart = function () {
        var _this = this;
        var params = {
            'app_id': null,
            'search_os': null,
            'search_source': null,
            'pg_page': 1,
            'pg_size': 100,
            'ad_id': null,
            'st_col': 'date',
            'st_type': 1,
            'app_group_id': this.service.getGroupId(),
            'startdate': Math.round(this.dFrom.getTime() / 1000),
            'enddate': Math.round(this.dTo.getTime() / 1000)
        };
        if (this.platform.id != '-1') {
            params.search_os = this.platform.id;
            params.app_id = this.service.getAppId();
        }
        if (this.source.source != '-1')
            params.search_source = this.source.source;
        if (this.currentAudience._id != -1)
            params.ad_id = this.currentAudience._id;
        this.service.armPdChartAnalysis(params, function (data) { _this.makeChart(data); });
    };
    ArmpdComponent.prototype.onVersionChanged = function (event) {
        this.service.setAppId(event.app_id);
    };
    ArmpdComponent.prototype.onSourceChanged = function (selectedSource) {
        var _this = this;
        if (selectedSource.source == -1) {
            this.isAudienceHidden = true;
            this.currentAudience = this.audiences[0];
        }
        else {
            this.isAudienceHidden = false;
            var params = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'search_type': selectedSource.source,
                'app_group_id': this.service.getGroupId()
            };
            this.campaignService.getAds(params, function (data) {
                _this.audiences = data;
                _this.audiences.splice(0, 0, { _id: -1, name: 'All' });
                _this.currentAudience = _this.audiences[0];
            });
        }
    };
    ArmpdComponent.prototype.osPickerChanged = function (event) {
        this.versionDisplay = [];
        if (event.id == '-1')
            this.isVersionHidden = false;
        else {
            this.isVersionHidden = true;
            for (var _i = 0, _a = this.versions; _i < _a.length; _i++) {
                var v = _a[_i];
                if (v.os == event.id)
                    this.versionDisplay.push(v);
            }
            this.version = this.versionDisplay[0];
            this.service.setAppId(this.version.app_id);
        }
    };
    ArmpdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armpd',
            template: __webpack_require__(/*! ./armpd.component.html */ "./src/app/dashboard/reports/armpd/armpd.component.html"),
            styles: [__webpack_require__(/*! ../report.component.scss */ "./src/app/dashboard/reports/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__["AmChartsService"],
            _service_campaign_service__WEBPACK_IMPORTED_MODULE_3__["CampaignService"]])
    ], ArmpdComponent);
    return ArmpdComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reports/card/card.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/reports/card/card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Card Report from {{dFrom | date: 'dd/MM/yyyy' }} to {{dTo |  date:'dd/MM/yyyy'}}</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-3\">\n                    \n                    <span class=\"input-group-text\">From</span>\n                    \n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dFrom\" >\n                    \n                </div>\n                <div class=\"col-md-3\">\n                    \n                    <span class=\"input-group-text\">To</span>\n                    \n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker\n                    [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dTo\" >\n                    \n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">CardType</span>\n                    <select class=\"form-control\" [(ngModel)]=\"cardType\">\n                        <option value=\"all\">All</option>\n                        <option *ngFor=\"let cardtype of cardTypes\" [ngValue]=\"cardtype.name\"> {{cardtype.name}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Revenue {{titlechart}}</h5>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"chartdiv\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <table class=\"table mb-0 table-striped table-responsive-sm table-bordered\">\n                <thead class=\"thead-default\">\n                    <tr>\n                        <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}}\">{{perheader.name}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let d of data\">\n                        <td class=\"text-center\">{{d.date * 1000 | date:'dd/MM/yyyy'}} </td>\n                        <td> {{d.product}}</td>\n                        <td> {{d.cardType}}</td>\n                        <td> {{d.user_pay}} </td>\n                        <td> {{d.rev_user | number : '1.0'}} vnđ</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"100%\" class=\"rx-pagin\">\n                            <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                            <</button>\n                            <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                            <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                            <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                            <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                <option value=\"10\" selected>10</option>\n                                <option value=\"50\" selected>50</option>\n                                <option value=\"100\" selected>100</option>\n                            </select> / page\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/reports/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/reports/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/report.service */ "./src/app/service/report.service.ts");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = /** @class */ (function () {
    function CardComponent(service, AmCharts) {
        this.service = service;
        this.AmCharts = AmCharts;
        this.dTo = new Date();
        this.dMax = new Date();
        this.data = [];
        this.isnext = true;
        this.search = { field: 'product', term: '' };
        this.products = ['m001', 'm002', 'm003', 'm004'];
        this.cardTypes = [{ name: 'VTT' }, { name: 'VMS' }, { name: 'VNP' }, { name: 'VTC' }];
        this.cardType = 'all';
        this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
        this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());
        this.paging = this.service.defaultPaging('date');
        this.header = [
            { id: 'date', name: 'Date', st_type: 1 },
            { id: 'product', name: 'Product', is_search: 1, st_col: 'product', st_type: 1 },
            { id: 'cardType', name: 'CardType', is_search: 1, st_col: 'cardType', st_type: 1 },
            { id: 'user_pay', name: 'PayUser', is_search: 1, st_col: 'user_pay', st_type: 1 },
            { id: 'rev_user', name: 'Rev', is_search: 1, st_col: 'rev_user', st_type: 1 }
        ];
        this.doAnalysis();
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.makeChart = function (chartData) {
        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "legend": {
                "equalWidths": false,
                "useGraphSettings": true,
                "valueAlign": "left",
                "valueWidth": 120
            },
            "dataProvider": chartData,
            "valueAxes": [{
                    "stackType": "regular",
                    "axisAlpha": 0.3,
                    "gridAlpha": 0
                }],
            "graphs": [{
                    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.3,
                    "title": "Rev VMS",
                    "type": "column",
                    "valueField": "rev_VMS"
                }, {
                    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.3,
                    "title": "Rev VNP",
                    "type": "column",
                    "valueField": "rev_VNP"
                }, {
                    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.3,
                    "title": "Rev VTC",
                    "type": "column",
                    "valueField": "rev_VTC"
                }, {
                    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.3,
                    "title": "Rev VTT",
                    "type": "column",
                    "valueField": "rev_VTT"
                }],
            "categoryField": "date",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "position": "left"
            },
            "export": {
                "enabled": true
            }
        });
    };
    CardComponent.prototype.ngOnDestroy = function () {
        if (this.chart)
            this.AmCharts.destroyChart(this.chart);
    };
    CardComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.doAnalysis();
    };
    CardComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    CardComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol)
                this.paging.st_type *= -1;
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.doAnalysis();
        }
    };
    CardComponent.prototype.doAnalysis = function () {
        var _this = this;
        var params = {
            'id': this.service.getAppId(),
            'pg_page': this.paging.pg_page,
            'pg_size': this.paging.pg_size,
            'st_col': this.paging.st_col,
            'st_type': this.paging.st_type,
            'startdate': Math.round(this.dFrom.getTime() / 1000),
            'enddate': Math.round(this.dTo.getTime() / 1000)
        };
        if (this.cardType != 'all') {
            params['cardType'] = this.cardType;
        }
        if (this.search.term && this.search.term.length > 0) {
            params['search_' + this.search.field] = this.search.term;
        }
        this.service.cardAnalysis(params, function (data) {
            _this.data = data;
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
        this.getChart();
    };
    CardComponent.prototype.getChart = function () {
        var _this = this;
        var params = {
            'id': this.service.getAppId(),
            'pg_page': 1,
            'pg_size': 100,
            'st_col': 'date',
            'st_type': 1,
            'startdate': Math.round(this.dFrom.getTime() / 1000),
            'enddate': Math.round(this.dTo.getTime() / 1000)
        };
        if (this.cardType != 'all') {
            params['cardType'] = this.cardType;
        }
        if (this.search.term && this.search.term.length > 0) {
            params['search_' + this.search.field] = this.search.term;
        }
        this.service.cardChartAnalysis(params, function (data) {
            _this.makeChart(data);
        });
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/dashboard/reports/card/card.component.html"),
            styles: [__webpack_require__(/*! ../report.component.scss */ "./src/app/dashboard/reports/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__["AmChartsService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reports/cohort/cohort.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/reports/cohort/cohort.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Cohort Report from {{dFrom | date: 'dd/MM/yyyy' }} to {{dTo |  date:'dd/MM/yyyy'}}</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row col-md-12 form-group\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Source</span>\n                    <select class=\"form-control\" [(ngModel)]=\"source\">\n                        <option *ngFor=\"let s of sources\" [ngValue]=\"s\"> {{s.source_group}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">OS</span>\n                    <select class=\"form-control\" [(ngModel)]=\"platform\" (ngModelChange)=\"osPickerChanged($event)\">\n                        <option *ngFor=\"let p of platforms\" [ngValue]=\"p\"> {{p.name}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <div [hidden]=\"!isVersionHidden\">\n                        <span class=\"input-group-text\">Version</span>\n                        <select class=\"form-control\" [(ngModel)]=\"version\"\n                            (ngModelChange)=\"onVersionChanged($event)\">\n                            <option *ngFor=\"let v of versionDisplay\" [ngValue]=\"v\"> {{v.version}} </option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">From</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dFrom\">\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">To</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker\n                    [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dTo\">\n                </div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Cohort</h5>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"form-group col-lg-9 col-md-9\">\n                </div>\n                <div class=\"form-group col-lg-3 col-md-3\">\n                    <select class=\"form-control\" [(ngModel)]=\"timeRange\" (ngModelChange)=\"dateRangeChanged($event)\">\n                        <option *ngFor=\"let t of timeRanges\" [ngValue]=\"t\"> {{t.name}} </option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"tTableWraper\">\n                <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                    <thead class=\"thead-default\">\n                        <tr>\n                            <th *ngFor=\"let perheader of header\" class=\"tMiddle\" style=\"width: 48px; height: 24px;\">\n                                {{perheader.name}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let d of data\">\n                            <td class=\"tMiddle\">\n                                <strong>{{d.date * 1000 | date:'dd/MM/yyyy'}}</strong>\n                                <br/> {{d.install}} install(s) - {{d.user}} nru0\n                            </td>\n                            <td *ngFor=\"let itemreturn of d.arrreturn\" style=\"text-align: center;vertical-align: middle;\" [style.background-color]=\"'rgba(13, 71, 161, ' + itemreturn.value + ')'\" [style.color]=\"itemreturn.value < 0.5 ? 'black' : 'white'\">\n                                <div *ngIf=\"itemreturn.value != null\">\n                                    <strong>{{itemreturn.value * 100 | number : '1.2-2'}}%</strong>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/reports/cohort/cohort.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/reports/cohort/cohort.component.ts ***!
  \**************************************************************/
/*! exports provided: CohortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CohortComponent", function() { return CohortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/report.service */ "./src/app/service/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CohortComponent = /** @class */ (function () {
    function CohortComponent(service) {
        this.service = service;
        this.dTo = new Date();
        this.dMax = new Date();
        this.data = [];
        this.header = [];
        this.isnext = true;
        this.search = { field: 'source', term: '' };
        this.versions = [{ 'version': '', 'os': '' }];
        this.versionDisplay = [{ 'version': '', 'os': '' }];
        this.sources = [{ 'source_group': "All", 'source': '-1' }];
        this.platforms = [];
        this.tRvalues = [];
        this.timeRanges = [
            { 'id': 7, 'name': '7 ngày' },
            { 'id': 14, 'name': '14 ngày' },
            { 'id': 21, 'name': '21 ngày' },
            { 'id': 30, 'name': '30 ngày' }
        ];
        this.source = this.sources[0];
        this.platforms = this.service.defaultPlatforms();
        this.platform = this.platforms[0];
        this.timeRange = this.timeRanges[0];
        this.makeFilterDataArray(this.timeRange.id);
        this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
        this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());
        this.paging = { pg_page: 1, pg_size: 30, st_col: 'date', st_type: -1 };
        this.changeHeader(7);
        this.getSources();
        this.doAnalysis();
    }
    CohortComponent.prototype.ngOnInit = function () {
    };
    CohortComponent.prototype.doAnalysis = function () {
        var _this = this;
        var _a;
        this.data = [];
        var params = (_a = {
                'pg_page': 1,
                'pg_size': 100,
                'st_col': 'date_install',
                'search_os': null,
                'app_id': null,
                'app_group_id': this.service.getGroupId(),
                'search_source': null,
                'startdate': Math.round(this.dFrom.getTime() / 1000),
                'enddate': Math.round(this.dTo.getTime() / 1000),
                'st_type': 1,
                'filter_dates': this.tRvalues
            },
            _a['search_' + this.search.field] = this.search.term,
            _a);
        if (this.platform.id != '-1') {
            params.search_os = this.platform.id;
            params.app_id = this.service.getAppId();
        }
        if (this.source.source != '-1')
            params.search_source = this.source.source;
        this.service.cohortAnalysis(params, function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var objdata = data_1[_i];
                var arrReturnRate = [];
                var indexrrs = 0;
                for (var _a = 0, _b = objdata.rrs; _a < _b.length; _a++) {
                    var valuereturn = _b[_a];
                    for (var _c = 0, _d = _this.header; _c < _d.length; _c++) {
                        var valueheader = _d[_c];
                        if (valueheader.index == indexrrs + 1) {
                            var namerr = 'rr' + (indexrrs + 1);
                            arrReturnRate.push({ key: namerr, value: valuereturn, index: indexrrs + 1 });
                        }
                    }
                    indexrrs++;
                }
                _this.data.push({
                    'date': objdata.date_install,
                    'install': objdata.installs,
                    'user': objdata.new_users,
                    'arrreturn': arrReturnRate
                });
            }
        });
    };
    CohortComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            // Sources
            _this.sources = _this.sources.concat(data.source);
            _this.source = _this.sources[0];
            // Os
            _this.versions = data.os.settings;
            _this.versionDisplay = _this.versions;
            _this.version = _this.versionDisplay[0];
        });
    };
    CohortComponent.prototype.changeHeader = function (index) {
        this.header = [];
        if (index == 7) {
            for (var i = 0; i <= 7; i++) {
                if (i == 0) {
                    this.header.push({ id: 'rr0', name: '', index: i });
                }
                else {
                    this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
                }
            }
        }
        else if (index == 14) {
            for (var i = 0; i < 10; i++) {
                if (i == 0) {
                    this.header.push({ id: 'rr0', name: '', index: i });
                }
                else {
                    this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
                }
            }
            for (var i = 10; i <= 14; i++) {
                if (i % 2 == 0) {
                    this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
                }
            }
        }
        else if (index == 21) {
            for (var i = 0; i < 10; i++) {
                if (i == 0) {
                    this.header.push({ id: 'rr0', name: '', index: i });
                }
                else {
                    this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
                }
            }
            for (var i = 10; i <= 21; i++) {
                if (i % 3 == 0) {
                    this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
                }
            }
        }
        else if (index == 30) {
            for (var i = 0; i < 10; i++) {
                if (i == 0) {
                    this.header.push({ id: 'rr0', name: '', index: i });
                }
                else {
                    this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
                }
            }
            for (var i = 10; i <= 30; i++) {
                if (i % 6 == 0) {
                    this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
                }
            }
        }
    };
    CohortComponent.prototype.makeFilterDataArray = function (idx) {
        this.tRvalues = [];
        for (var i = 1; i <= idx; i++)
            this.tRvalues.push(i);
    };
    CohortComponent.prototype.dateRangeChanged = function (event) {
        this.changeHeader(event.id);
        this.makeFilterDataArray(event.id);
        this.doAnalysis();
    };
    CohortComponent.prototype.onVersionChanged = function (event) {
        this.service.setAppId(event.app_id);
    };
    CohortComponent.prototype.osPickerChanged = function (event) {
        this.versionDisplay = [];
        if (event.id == '-1')
            this.isVersionHidden = false;
        else
            this.isVersionHidden = true;
        for (var _i = 0, _a = this.versions; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v.os == event.id)
                this.versionDisplay.push(v);
        }
        this.version = this.versionDisplay[0];
        this.service.setAppId(this.version.app_id);
    };
    CohortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cohort',
            template: __webpack_require__(/*! ./cohort.component.html */ "./src/app/dashboard/reports/cohort/cohort.component.html"),
            styles: [__webpack_require__(/*! ../report.component.scss */ "./src/app/dashboard/reports/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], CohortComponent);
    return CohortComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reports/kpireport/kpireport.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/reports/kpireport/kpireport.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">KPI Report</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Pick date</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\" [(ngModel)]=\"dDate\">\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">OS</span>\n                    <select class=\"form-control\" [(ngModel)]=\"platform\" (ngModelChange)=\"osPickerChanged($event)\">\n                        <option *ngFor=\"let p of platforms\" [ngValue]=\"p\"> {{p.name}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Version</span>\n                    <select class=\"form-control\" [(ngModel)]=\"version\" (ngModelChange)=\"onVersionChanged($event)\">\n                        <option *ngFor=\"let v of versionDisplay\" [ngValue]=\"v\" >\n                        {{v.version}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Matrix</h5>\n        </div>\n        <div class=\"card-block\">\n            \n            <div class=\"table table-responsive-sm table-bordered kpitable\">\n                <div class=\"thead-default\">\n                    <div class=\"tMiddle\">#</div>\n                    <div class=\"tMiddle\"> {{dDate | date:'dd/MM/yyyy' }}</div>\n                    <div class=\"tMiddle\"> Yesterday </div>\n                    <div class=\"tMiddle\"> One week ago </div>\n                </div>\n                <div class=\"tbody-default\">\n                    <div class=\"tbody-col\" *ngFor=\"let d of data\">\n                        <div> {{d.a1}} </div>\n                        <div> {{d.a7}} </div>\n                        <div> {{d.a30}} </div>\n                        <div> {{d.nru0}} </div>\n                        <div> {{d.gross_rev}} </div>\n                        <div> {{d.pu}} </div>\n                        <div> {{d.pu1}} </div>\n                        <div> {{d.arpu}} </div>\n                        <div> {{d.arppu}} </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/reports/kpireport/kpireport.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/reports/kpireport/kpireport.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kpitable .thead-default > div {\n  float: left;\n  width: 25%;\n  padding: 5px 10px;\n  background-color: #000;\n  color: #fff;\n  border-right: solid 1px #dddddd69; }\n\n.kpitable .thead-default > div:last-child {\n  border-right: none; }\n\n.kpitable .tbody-default .tbody-col {\n  float: left;\n  width: 25%;\n  border-right: solid 1px #eee; }\n\n.kpitable .tbody-default .tbody-col:last-child {\n  border-right: none; }\n\n.kpitable .tbody-default .tbody-col > div:nth-child(even) {\n  background-color: #eee; }\n\n.tbody-col > div {\n  padding: 3px 10px; }\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: .375rem .75rem;\n  margin-bottom: 0;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: .25rem 0 0 .25rem; }\n"

/***/ }),

/***/ "./src/app/dashboard/reports/kpireport/kpireport.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/reports/kpireport/kpireport.component.ts ***!
  \********************************************************************/
/*! exports provided: KpireportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpireportComponent", function() { return KpireportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/report.service */ "./src/app/service/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KpireportComponent = /** @class */ (function () {
    function KpireportComponent(service) {
        this.service = service;
        this.data = [];
        this.versions = [{ 'version': '', 'os': '' }];
        this.versionDisplay = [{ 'version': '', 'os': '' }];
        this.sources = [{ 'source_group': "All", 'source': '-1' }];
        this.platforms = [];
        this.dDate = new Date();
        this.dMax = new Date();
        this.source = this.sources[0];
        this.platforms = this.service.defaultPlatforms();
        this.platform = this.platforms[0];
    }
    KpireportComponent.prototype.ngOnInit = function () {
        if (!this.service.isExpired()) {
            this.getSources();
            this.doAnalysis();
        }
    };
    KpireportComponent.prototype.doAnalysis = function () {
        var _this = this;
        var params = {
            'app_id': null,
            'app_group_id': this.service.getGroupId(),
            'search_app_id': null,
            'search_os': null,
            'search_date': this.service.formatDate(this.dDate)
        };
        if (this.platform.id != '-1') {
            params.search_os = this.platform.id;
            params.search_app_id = this.service.getAppId();
        }
        this.service.kpiAnalysis(params, function (data) {
            _this.data = data;
        });
    };
    KpireportComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            // Sources
            _this.sources = _this.sources.concat(data.source);
            _this.source = _this.sources[0];
            // Os
            _this.versions = data.os.settings;
            _this.versionDisplay = _this.versions;
            _this.version = _this.versionDisplay[0];
        });
    };
    KpireportComponent.prototype.onVersionChanged = function (event) {
        this.service.setAppId(event.app_id);
    };
    KpireportComponent.prototype.osPickerChanged = function (event) {
        this.versionDisplay = [];
        if (event.id == '-1')
            this.osVerionDisplay = false;
        else {
            this.osVerionDisplay = true;
            for (var _i = 0, _a = this.versions; _i < _a.length; _i++) {
                var v = _a[_i];
                if (v.os == event.id)
                    this.versionDisplay.push(v);
            }
            this.version = this.versionDisplay[0];
            this.service.setAppId(this.version.app_id);
        }
    };
    KpireportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kpireport',
            template: __webpack_require__(/*! ./kpireport.component.html */ "./src/app/dashboard/reports/kpireport/kpireport.component.html"),
            styles: [__webpack_require__(/*! ./kpireport.component.scss */ "./src/app/dashboard/reports/kpireport/kpireport.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], KpireportComponent);
    return KpireportComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reports/report.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/reports/report.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tTableWraper {\n  max-width: 100%;\n  overflow-y: auto; }\n\nth {\n  text-align: center; }\n\ntr > td {\n  text-align: right; }\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: .375rem .75rem;\n  margin-bottom: 0;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: .25rem 0 0 .25rem; }\n"

/***/ }),

/***/ "./src/app/dashboard/reports/roi/roi.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/reports/roi/roi.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">ROI Report from {{dFrom | date: 'dd/MM/yyyy' }} to {{dTo |  date:'dd/MM/yyyy'}}</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row col-md-12 form-group\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Source</span>\n                    <select class=\"form-control\" [(ngModel)]=\"source\" (ngModelChange)=\"onSourceChanged($event)\">\n                        <option *ngFor=\"let s of sources\" [ngValue]=\"s\"> {{s.source_group}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">Audience</span>\n                    <select class=\"form-control\" [(ngModel)]=\"currentAudience\" [disabled] = \"isAudienceHidden\">\n                        <option *ngFor=\"let audience of audiences\" [ngValue]=\"audience\"> {{audience.name}}</option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">OS</span>\n                    <select class=\"form-control\" [(ngModel)]=\"platform\" (ngModelChange)=\"osPickerChanged($event)\">\n                        <option *ngFor=\"let p of platforms\" [ngValue]=\"p\"> {{p.name}} </option>\n                    </select>\n                </div>\n                <div class=\"col-md-3\">\n                    <div [hidden]=\"!isVersionHidden\">\n                        <span class=\"input-group-text\">Version</span>\n                        <select class=\"form-control\" [(ngModel)]=\"version\"\n                            (ngModelChange)=\"onVersionChanged($event)\">\n                            <option *ngFor=\"let v of versionDisplay\" [ngValue]=\"v\"> {{v.version}} </option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">From</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dFrom\">\n                </div>\n                <div class=\"col-md-3\">\n                    <span class=\"input-group-text\">To</span>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker\n                    [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\"\n                    [(ngModel)]=\"dTo\">\n                </div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Matrix</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"clearfix\">\n                <div class=\"card-tools\">\n                    <div>\n                        <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                            <option *ngFor=\"let perheader of header\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                        </select><i class=\"icon-arrow-down sel-ico\"></i>\n                        <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                        <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                        <button class=\"btn btn-sm btn-success\"> <i class=\"icon-cloud-download\"></i></button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"tTableWraper\">\n                <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                    <thead class=\"thead-default\">\n                        <tr>\n                            <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} tMiddle\" \n                            style=\"min-width: 96px\">\n                                {{perheader.name}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let d of data\">\n                            <td> {{d.date * 1000 | date:'dd-MM-yyyy'}} </td>\n                            <td> {{d.source}} </td>\n                            <td> {{d.os }} </td>\n                            <td class=\"tTextRight\"> {{d.install }} </td>\n                            <td class=\"tTextRight\"> {{d.nru }} </td>\n                            <td class=\"tTextRight\"> {{d.cost | currency:'VND':symbol:'1.0-0'}} </td>\n                            <td class=\"tTextRight\" [style.color]=\"d.roi < 100 ? 'red' : 'green'\">\n                                <strong>{{d.roi}}%</strong>\n                            </td>\n                            <td class=\"tTextRight\"> {{d.rr3 }}%</td>\n                            <td class=\"tTextRight\"> {{d.pu1 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev0 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev1 }} </td>\n                            <td class=\"tTextRight\"> {{d.pu3 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev3 }} </td>\n                            <td class=\"tTextRight\"> {{d.pu7 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev7 }} </td>\n                            <td class=\"tTextRight\"> {{d.pu14 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev14 }} </td>\n                            <td class=\"tTextRight\"> {{d.pu21 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev21 }} </td>\n                            <td class=\"tTextRight\"> {{d.pu30 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev30 }} </td>\n                            <td class=\"tTextRight\"> {{d.pu60 }} </td>\n                        </tr>\n                        <!-- Pagination -->\n                        <tr>\n                            <td colspan=\"100%\" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                                    <</button>\n                                        <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                                        <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                                        <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                                        <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                            <option value=\"10\" selected>10</option>\n                                            <option value=\"50\" selected>50</option>\n                                            <option value=\"100\" selected>100</option>\n                                        </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/reports/roi/roi.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/reports/roi/roi.component.ts ***!
  \********************************************************/
/*! exports provided: RoiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoiComponent", function() { return RoiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/report.service */ "./src/app/service/report.service.ts");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var _service_campaign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/campaign.service */ "./src/app/service/campaign.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoiComponent = /** @class */ (function () {
    function RoiComponent(service, AmCharts, campaignService) {
        this.service = service;
        this.AmCharts = AmCharts;
        this.campaignService = campaignService;
        this.dTo = new Date();
        this.dMax = new Date();
        this.data = [];
        this.isnext = true;
        this.search = { field: 'source', term: '' };
        this.platforms = [];
        this.sources = [{ 'source_group': "All", 'source': '-1' }];
        this.versions = [{ 'version': '', 'os': '' }];
        this.versionDisplay = [{ 'version': '', 'os': '' }];
        // Audiences
        this.audiences = [{ _id: -1, name: 'All' }];
        this.isAudienceHidden = true;
        this.source = this.sources[0];
        this.currentAudience = this.audiences[0];
        this.platforms = this.service.defaultPlatforms();
        this.platform = this.platforms[0];
        this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
        this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());
        this.paging = this.service.defaultPaging('date');
        this.header = [
            { id: 'date', name: 'Date', is_search: 1, st_col: 'data', st_type: 1 },
            { id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
            { id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
            { id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
            { id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
            { id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'roi', name: 'ROI', is_search: 1, st_col: 'roi', st_type: 1 },
            { id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3', st_type: 1 },
            { id: 'pu1', name: 'PU1', is_search: 1, st_col: 'pu1', st_type: 1 },
            { id: 'rev0', name: 'REV0', is_search: 1, st_col: 'rev0', st_type: 1 },
            { id: 'rev1', name: 'REV1', is_search: 1, st_col: 'rev1', st_type: 1 },
            { id: 'pu3', name: 'PU3', is_search: 1, st_col: 'pu3', st_type: 1 },
            { id: 'rev3', name: 'REV3', is_search: 1, st_col: 'rev3', st_type: 1 },
            { id: 'pu7', name: 'PU7', is_search: 1, st_col: 'pu7', st_type: 1 },
            { id: 'rev7', name: 'REV7', is_search: 1, st_col: 'rev7', st_type: 1 },
            { id: 'pu14', name: 'PU14', is_search: 1, st_col: 'pu14', st_type: 1 },
            { id: 'rev14', name: 'REV14', is_search: 1, st_col: 'rev14', st_type: 1 },
            { id: 'pu21', name: 'PU21', is_search: 1, st_col: 'pu21', st_type: 1 },
            { id: 'rev21', name: 'REV21', is_search: 1, st_col: 'rev21', st_type: 1 },
            { id: 'pu30', name: 'PU30', is_search: 1, st_col: 'pu30', st_type: 1 },
            { id: 'rev30', name: 'REV30', is_search: 1, st_col: 'rev30', st_type: 1 },
            { id: 'pu60', name: 'PU60', is_search: 1, st_col: 'pu60', st_type: 1 },
        ];
        this.doAnalysis();
        this.getSources();
    }
    RoiComponent.prototype.ngOnInit = function () {
    };
    RoiComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.doAnalysis();
    };
    RoiComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    RoiComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.doAnalysis();
        }
    };
    RoiComponent.prototype.doAnalysis = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'st_col': this.paging.st_col,
                'app_id': null,
                'app_group_id': this.service.getGroupId(),
                'search_os': null,
                'startdate': Math.round(this.dFrom.getTime() / 1000),
                'enddate': Math.round(this.dTo.getTime() / 1000),
                'st_type': this.paging.st_type
            },
            _a['search_' + this.search.field] = this.search.term,
            _a);
        if (this.platform.id != '-1') {
            params.search_os = this.platform.id;
            params.app_id = this.service.getAppId();
        }
        if (this.source.source != '-1')
            params.search_source = this.source.source;
        if (this.currentAudience._id != -1)
            params.ad_id = this.currentAudience._id;
        this.service.roiAnalysis(params, function (data) {
            _this.data = data;
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
    };
    RoiComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            // Sources
            _this.sources = _this.sources.concat(data.source);
            _this.source = _this.sources[0];
            // Os
            _this.versions = data.os.settings;
            _this.versionDisplay = _this.versions;
            _this.version = _this.versionDisplay[0];
        });
    };
    RoiComponent.prototype.onSourceChanged = function (selectedSource) {
        var _this = this;
        if (selectedSource.source == -1) {
            this.isAudienceHidden = true;
            this.currentAudience = this.audiences[0];
        }
        else {
            this.isAudienceHidden = false;
            var params = {
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type,
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'search_type': selectedSource.source,
                'app_group_id': this.service.getGroupId()
            };
            this.campaignService.getAds(params, function (data) {
                _this.audiences = data;
                _this.audiences.splice(0, 0, { _id: -1, name: 'All' });
                _this.currentAudience = _this.audiences[0];
            });
        }
    };
    RoiComponent.prototype.onVersionChanged = function (event) {
        this.service.setAppId(event.app_id);
    };
    RoiComponent.prototype.osPickerChanged = function (event) {
        this.versionDisplay = [];
        if (event.id == '-1')
            this.isVersionHidden = false;
        else {
            this.isVersionHidden = true;
            for (var _i = 0, _a = this.versions; _i < _a.length; _i++) {
                var v = _a[_i];
                if (v.os == event.id)
                    this.versionDisplay.push(v);
            }
        }
        this.version = this.versionDisplay[0];
        this.service.setAppId(this.version.app_id);
    };
    RoiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roi',
            template: __webpack_require__(/*! ./roi.component.html */ "./src/app/dashboard/reports/roi/roi.component.html"),
            styles: [__webpack_require__(/*! ../report.component.scss */ "./src/app/dashboard/reports/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__["AmChartsService"],
            _service_campaign_service__WEBPACK_IMPORTED_MODULE_3__["CampaignService"]])
    ], RoiComponent);
    return RoiComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reports/roipd/roipd.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/reports/roipd/roipd.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">ROI PD Report from {{dFrom | date: 'dd/MM/yyyy' }} to {{dTo |  date:'dd/MM/yyyy'}}</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6 col-md-6\">\n                    <label class=\"col-form-label\">From</label>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\" [(ngModel)]=\"dFrom\">\n                </div>\n                <div class=\"form-group col-lg-6 col-md-6\">\n                    <label class=\"col-form-label\">To</label>\n                    <input type=\"text\" class=\"form-control\" [minDate]=\"dMin\" [maxDate]=\"dMax\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue' }\" [(ngModel)]=\"dTo\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-lg-6 col-md-6\">\n                    <label class=\"col-form-label\">Source</label>\n                    <select class=\"form-control\" [(ngModel)]=\"source\">\n                        <option *ngFor=\"let s of sources\" [ngValue]=\"s\"> {{s.source_group}} </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-lg-3 col-md-3\">\n                    <label class=\"col-form-label\">OS</label>\n                    <select class=\"form-control\" [(ngModel)]=\"platform\" (ngModelChange)=\"osPickerChanged($event)\">\n                        <option *ngFor=\"let p of platforms\" [ngValue]=\"p\"> {{p.name}} </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-lg-3 col-md-3\" [hidden]=\"!osVerionDisplay\">\n                    <label class=\"col-form-label\">Version</label>\n                    <select class=\"form-control\" [(ngModel)]=\"version\" (ngModelChange)=\"onVersionChanged($event)\">\n                        <option *ngFor=\"let v of versionDisplay\" [ngValue]=\"v\"> {{v.version}} </option>\n                    </select>\n                </div>\n            </div>\n            <button class=\"btn btn-success tright\" (click)=\"doAnalysis()\"><i class=\"icon-magic-wand\"></i> Analytic</button>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <div class=\"clearfix\">\n                <div class=\"card-tools\">\n                    <div>\n                        <select class=\"sel-search\" [(ngModel)]=\"search.field\">\n                            <option *ngFor=\"let perheader of header\" [hidden]=\"!perheader.is_search\" value=\"{{perheader.id}}\">{{perheader.name}}</option>\n                        </select><i class=\"icon-arrow-down sel-ico\"></i>\n                        <input type=\"text\" class=\"rx-cur input-search\" [(ngModel)]=\"search.term\">\n                        <button class=\"btn btn-sm btn-default btn-search\" (click)=\"jumpPage(1)\"><i class=\"icon-magnifier\"></i></button>\n                        <button class=\"btn btn-sm btn-success\"> <i class=\"icon-cloud-download\"></i></button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"tTableWraper\">\n                <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                    <thead class=\"thead-default\">\n                        <tr>\n                            <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} tMiddle\" style=\"min-width: 96px\">\n                                {{perheader.name}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let d of data\">\n                            <td class=\"text-center\"> {{d.date * 1000| date:'dd-MM-yyyy'}} </td>\n                            <td class=\"tTextRight\"> {{d.source}} </td>\n                            <td class=\"tTextRight\"> {{d.os }} </td>\n                            <td class=\"tTextRight\"> {{d.install }} </td>\n                            <td class=\"tTextRight\"> {{d.cost | currency:'VND':symbol:'1.0-0' }}</td>\n                            <td class=\"tTextRight\" [style.color]=\"d.roi < 100 ? 'red' : 'green'\">\n                                <strong>{{d.roi}}%</strong>\n                            </td>\n                            <td class=\"tTextRight\"> {{d.rr3 }}%</td>\n                            <td class=\"tTextRight\"> {{d.pd1 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev0 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev1 }} </td>\n                            <td class=\"tTextRight\"> {{d.pd3 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev3 }} </td>\n                            <td class=\"tTextRight\"> {{d.pd7 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev7 }} </td>\n                            <td class=\"tTextRight\"> {{d.pd14 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev14 }} </td>\n                            <td class=\"tTextRight\"> {{d.pd21 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev21 }} </td>\n                            <td class=\"tTextRight\"> {{d.pd30 }} </td>\n                            <td class=\"tTextRight\"> {{d.rev30 }} </td>\n                        </tr>\n                        <!-- Pagination -->\n                        <tr>\n                            <td colspan=\"100%\" class=\"rx-pagin\">\n                                <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                                    <</button>\n                                        <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                                        <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                                        <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                                        <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                            <option value=\"10\" selected>10</option>\n                                            <option value=\"50\" selected>50</option>\n                                            <option value=\"100\" selected>100</option>\n                                        </select> / page\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/reports/roipd/roipd.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/reports/roipd/roipd.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tTableWraper {\n  max-width: 100%;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/dashboard/reports/roipd/roipd.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/reports/roipd/roipd.component.ts ***!
  \************************************************************/
/*! exports provided: RoipdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoipdComponent", function() { return RoipdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/report.service */ "./src/app/service/report.service.ts");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoipdComponent = /** @class */ (function () {
    function RoipdComponent(service, AmCharts) {
        this.service = service;
        this.AmCharts = AmCharts;
        this.dTo = new Date();
        this.dMax = new Date();
        this.data = [];
        this.isnext = true;
        this.search = { field: 'source', term: '' };
        this.versions = [{ 'version': '', 'os': '' }];
        this.versionDisplay = [{ 'version': '', 'os': '' }];
        this.sources = [{ 'source_group': "All", 'source': '-1' }];
        this.platforms = [];
        this.source = this.sources[0];
        this.platforms = this.service.defaultPlatforms();
        this.platform = this.platforms[0];
        this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
        this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());
        this.paging = this.service.defaultPaging('date');
        this.header = [
            { id: 'date', name: 'Date', is_search: 1, st_col: 'date', st_type: 1 },
            { id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
            { id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
            { id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
            { id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
            { id: 'roi', name: 'ROI', is_search: 1, st_col: 'roi', st_type: 1 },
            { id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3', st_type: 1 },
            { id: 'pd1', name: 'PD1', is_search: 1, st_col: 'pd1', st_type: 1 },
            { id: 'rev0', name: 'REV0', is_search: 1, st_col: 'rev0', st_type: 1 },
            { id: 'rev1', name: 'REV1', is_search: 1, st_col: 'rev1', st_type: 1 },
            { id: 'pd3', name: 'PD3', is_search: 1, st_col: 'pd3', st_type: 1 },
            { id: 'rev3', name: 'REV3', is_search: 1, st_col: 'rev3', st_type: 1 },
            { id: 'pd7', name: 'PD7', is_search: 1, st_col: 'pd7', st_type: 1 },
            { id: 'rev7', name: 'REV7', is_search: 1, st_col: 'rev7', st_type: 1 },
            { id: 'pd14', name: 'PD14', is_search: 1, st_col: 'pd14', st_type: 1 },
            { id: 'rev14', name: 'REV14', is_search: 1, st_col: 'rev14', st_type: 1 },
            { id: 'pd21', name: 'PD21', is_search: 1, st_col: 'pd21', st_type: 1 },
            { id: 'rev21', name: 'REV21', is_search: 1, st_col: 'rev21', st_type: 1 },
            { id: 'pd30', name: 'PD30', is_search: 1, st_col: 'pd30', st_type: 1 },
            { id: 'rev30', name: 'REV30', is_search: 1, st_col: 'rev30', st_type: 1 }
        ];
        this.doAnalysis();
        this.getSources();
    }
    RoipdComponent.prototype.ngOnInit = function () {
    };
    RoipdComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.doAnalysis();
    };
    RoipdComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    RoipdComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.doAnalysis();
        }
    };
    RoipdComponent.prototype.doAnalysis = function () {
        var _this = this;
        var _a;
        var params = (_a = {
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'st_col': this.paging.st_col,
                'app_id': null,
                'app_group_id': this.service.getGroupId(),
                'search_os': null,
                'startdate': Math.round(this.dFrom.getTime() / 1000),
                'enddate': Math.round(this.dTo.getTime() / 1000),
                'st_type': this.paging.st_type
            },
            _a['search_' + this.search.field] = this.search.term,
            _a);
        if (this.platform.id != '-1') {
            params.search_os = this.platform.id;
            params.app_id = this.service.getAppId();
        }
        if (this.source.source != '-1')
            params.search_source = this.source.source;
        this.service.roiPdAnalysis(params, function (data) {
            _this.data = data;
            _this.isnext = (_this.data.length >= _this.paging.pg_size) ? true : false;
        });
    };
    RoipdComponent.prototype.getSources = function () {
        var _this = this;
        this.service.getSources(function (data) {
            // Sources
            _this.sources = _this.sources.concat(data.source);
            _this.source = _this.sources[0];
            // Os
            _this.versions = data.os.settings;
            _this.versionDisplay = _this.versions;
            _this.version = _this.versionDisplay[0];
        });
    };
    RoipdComponent.prototype.onVersionChanged = function (event) {
        this.service.setAppId(event.app_id);
    };
    RoipdComponent.prototype.osPickerChanged = function (event) {
        this.versionDisplay = [];
        if (event.id == '-1')
            this.osVerionDisplay = false;
        else {
            this.osVerionDisplay = true;
            for (var _i = 0, _a = this.versions; _i < _a.length; _i++) {
                var v = _a[_i];
                if (v.os == event.id)
                    this.versionDisplay.push(v);
            }
        }
        this.version = this.versionDisplay[0];
        this.service.setAppId(this.version.app_id);
    };
    RoipdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roipd',
            template: __webpack_require__(/*! ./roipd.component.html */ "./src/app/dashboard/reports/roipd/roipd.component.html"),
            styles: [__webpack_require__(/*! ./roipd.component.scss */ "./src/app/dashboard/reports/roipd/roipd.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__["AmChartsService"]])
    ], RoipdComponent);
    return RoipdComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/sourceslist/sourceslist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/sourceslist/sourceslist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn rx-relative\">\n    <div class=\"card-block rx-floathide-form\" [hidden]=\"isHidden\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"card-title\">Create source</h5>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Source Group</label>\n                        <input class=\"form-control\" name=\"source_group\" placeholder=\"Source Group ...\" type=\"text\" [disabled]=\"isEdit\" [(ngModel)]=\"onerow.source_group\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-lg-3\">\n                        <label class=\"col-form-label-none\">Source</label>\n                        <input class=\"form-control\" name=\"source\" placeholder=\"Source ...\" type=\"text\" [(ngModel)]=\"onerow.source\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-primary\" (click)=\"create()\" [hidden]=\"isEdit\"><i class=\"icon-plus\"></i> Create </button>\n                <button class=\"btn btn-sm btn-primary\" (click)=\"update()\" [hidden]=\"!isEdit\"><i class=\"icon-check\"></i> Save</button>\n                <button class=\"btn btn-sm btn-danger tright\" (click)=\"delete()\" [hidden]=\"!isEdit\"><i class=\"icon-trash\"></i> Delete</button>\n                <button class=\"btn btn-sm btn-secondary tright\" (click)=\"reset()\"><i class=\"icon-close\"></i> Cancel</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">Sources List</h5>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"card-tools\">\n                <button class=\"btn btn-sm btn-success\" (click)=\"show()\"> <i class=\"icon-plus\"></i> Create </button>\n            </div>\n            <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                <thead class=\"thead-default\">\n                    <tr>\n                        <th *ngFor=\"let perheader of headers\" class=\"text-center rx-table-ico-head\">{{perheader.name}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let d of data\" class=\"tpointer\" (click)=\"onItemClick(d)\">\n                        <td align=\"center\" style=\"vertical-align: middle;\">{{d.source_group}}</td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">{{d.source}}</td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{d.created_at * 1000 | date:'dd/MM/yyyy'}}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/sourceslist/sourceslist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/sourceslist/sourceslist.component.ts ***!
  \****************************************************************/
/*! exports provided: SourceslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceslistComponent", function() { return SourceslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SourceslistComponent = /** @class */ (function () {
    function SourceslistComponent(service) {
        this.service = service;
        this.search = { field: 'source', term: '' };
        this.isHidden = true;
        this.isEdit = false;
        this.data = [];
        this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
        this.onerow = { 'source_group': '', 'source': '', 'is_delete': 0, 'created_at': '' };
        this.headers = [
            { id: 'source_group', name: 'Source Group', is_search: 1, st_col: 'sourcename', st_type: 1 },
            { id: 'source', name: 'Source', is_search: 1, st_col: 'sourceid', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }
        ];
    }
    SourceslistComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    SourceslistComponent.prototype.refresh = function () {
        var _this = this;
        this.reset();
        this.service.getSources(function (data) {
            _this.data = data.source;
        });
    };
    SourceslistComponent.prototype.reset = function () {
        this.isEdit = false;
        this.isHidden = true;
    };
    SourceslistComponent.prototype.show = function () {
        this.isHidden = false;
        this.isEdit = false;
    };
    SourceslistComponent.prototype.onItemClick = function (item) {
        this.onerow = item;
        this.isEdit = true;
        this.isHidden = false;
    };
    SourceslistComponent.prototype.delete = function () {
        var _this = this;
        this.service.deleteSource({ 'id': this.onerow._id }, function (data) {
            _this.refresh();
        });
    };
    SourceslistComponent.prototype.create = function () {
        var _this = this;
        this.service.insertSource(this.onerow, function (data) { _this.refresh(); });
    };
    SourceslistComponent.prototype.update = function () {
        var _this = this;
        this.service.updateSource(this.onerow, function (data) { _this.refresh(); });
    };
    SourceslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sourceslist',
            template: __webpack_require__(/*! ./sourceslist.component.html */ "./src/app/dashboard/sourceslist/sourceslist.component.html")
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], SourceslistComponent);
    return SourceslistComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/telco/telco.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/telco/telco.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-block animated fadeIn rx-relative\" style=\"margin-left:10%; margin-right: 10%; z-index: 1; padding: 0px;\">\n        <div class=\"card\">\n            <div class=\"rx-floathide-form rx-isview\" [hidden]=\"isHidden\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <h5>Telco</h5>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <div class=\"btn-group tright\" dropdown>\n                                    <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"margin:0px;\">\n                                    {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                                    </button>\n                                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                                        <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\">\n                                            <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-block\">\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-6 col-lg-6\">\n                                <label class=\"col-form-label-none\">Item Id</label>\n                                <input class=\"form-control\" name=\"id\" placeholder=\"Item Id ...\" type=\"text\" [(ngModel)]=\"onerow.id\">\n                            </div>\n                            <div class=\"form-group col-md-6 col-lg-6\">\n                                <label class=\"col-form-label-none\">Item Name</label>\n                                <input class=\"form-control\" name=\"name\" placeholder=\"Item Name ...\" type=\"text\" [(ngModel)]=\"onerow.name\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"form-group col-lg-6 col-md-6\">\n                                <label class=\"col-form-label-none\">Description</label>\n                                <input class=\"form-control\" name=\"desc\" placeholder=\"Description ...\" type=\"text\" [(ngModel)]=\"onerow.desc\">\n                            </div>\n                            <div class=\"form-group col-lg-6 col-md-6\">\n                                <label class=\"col-form-label-none\">Price (USD)</label>\n                                <input class=\"form-control\" name=\"Price\" placeholder=\"Price ...\" type=\"number\" [(ngModel)]=\"onerow.price\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6 col-md-6 row\">\n                                <div class=\"col-lg-6 col-md-6\">\n                                    <label class=\"col-form-label-none\">Status</label>\n                                </div>\n                                <div class=\"col-lg-6 col-md-6\">\n                                    <label class=\"switch switch-text switch-pill switch-primary tright\">\n                                        <input type=\"checkbox\" class=\"switch-input\" [checked]=\"onerow.is_active\" (change)=\"onerow.is_active == 1 ? onerow.is_active = 0: onerow.is_active = 1\">\n                                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                        <span class=\"switch-handle\"></span>\n                                    </label>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6 col-md-6\">\n                                <div class=\"col-lg-6 col-md-6\">\n                                    <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\"*.*\">\n                                </div>\n                                <img [src]=\"onerow.icon\" onError=\"this.src='./assets/img/ico_app_default.png'\" style=\"width: 128px;\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button class=\"btn btn-sm btn-primary\" (click)=(save()) [hidden]=\"isEdit\"> <i class=\"icon-plus\"></i> OK </button>\n                        <button class=\"btn btn-sm btn-primary\" (click)=(update()) [hidden]=\"!isEdit\"><i class=\"icon-check\"></i> Save</button>\n                        <button class=\"btn btn-sm btn-danger tright\" (click)=(delete()) [hidden]=\"!isEdit\"><i class=\"icon-trash\"></i> Delete</button>\n                        <button class=\"btn btn-sm btn-secondary tright\" (click)=(cancel())><i class=\"icon-close\"></i> Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h5>Telco</h5>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"btn-group tright\" dropdown>\n                        <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"margin:0px;\">\n                        {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                        </button>\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                            <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\">\n                                <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <div class=\"card-tools\">\n                <button class=\"btn btn-sm btn-primary tright\" (click)=(toggle())>\n                <i class=\"icon-plus\"></i> Create\n                </button>\n            </div>\n            <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                <thead class=\"thead-default\">\n                    <tr>\n                        <th class=\"text-center rx-table-ico-head\">Card Id</th>\n                        <th class=\"text-center rx-table-ico-head\">Name</th>\n                        <th class=\"text-center rx-table-ico-head\">Description</th>\n                        <th class=\"text-center rx-table-ico-head\">Price (VND)</th>\n                        <th class=\"text-center rx-table-ico-head\">Image</th>\n                        <th class=\"text-center rx-table-ico-head\">Status</th>\n                        <th class=\"text-center rx-table-ico-head\">Created</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of items\" style=\"cursor: pointer;\" (click)=(onRowClick(item))>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{item.id}}\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{item.name}}\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{item.desc}}\n                        </td>\n                         <td class=\"tTextRight\">\n                            <strong>{{item.price | currency:'VND':symbol:'1.0-3'}}</strong>\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            <img [src]=\"getUrl(item.icon)\" onError=\"this.src='./assets/img/ico_app_default.png'\" style=\"width: 96px;\" />\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            <span class=\"tag tag-success\" *ngIf=\"item.is_active\">Active</span>\n                            <span class=\"tag tag-danger\" *ngIf=\"!item.is_active\">Inactive</span>\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{item.created_at * 1000 | date:'dd/MM/yyyy'}}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/dashboard/telco/telco.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/telco/telco.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-form-label-none {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/dashboard/telco/telco.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/telco/telco.component.ts ***!
  \****************************************************/
/*! exports provided: TelcoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelcoComponent", function() { return TelcoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_telco_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/telco.service */ "./src/app/service/telco.service.ts");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/service/group.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TelcoComponent = /** @class */ (function (_super) {
    __extends(TelcoComponent, _super);
    function TelcoComponent(service, gService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.gService = gService;
        _this.app = { 'app_id': '', 'os': '', 'version': '' };
        return _this;
    }
    TelcoComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    TelcoComponent.prototype.refresh = function () {
        var _this = this;
        if (!this.service.isExpired()) {
            this.reset();
            this.service.getTelcos({
                'search_app_id': this.service.getAppId(),
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type
            }, function (data) {
                _this.items = Array.isArray(data) ? data : [];
            });
            this.getApps();
        }
    };
    TelcoComponent.prototype.getApps = function () {
        this.app.app_id = this.service.getAppId();
        this.apps = this.gService.getGroupSetting();
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var ap = _a[_i];
            if (ap.app_id == this.app.app_id) {
                this.app.os = ap.os;
                this.app.version = ap.version;
            }
        }
    };
    TelcoComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.refresh();
    };
    TelcoComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.service.upload(file, function (data) {
                _this.onerow.icon = data;
            });
        }
    };
    TelcoComponent.prototype.cancel = function () {
        this.refresh();
    };
    TelcoComponent.prototype.onRowClick = function (item) {
        this.onerow = item;
        this.isHidden = false;
        this.isEdit = true;
    };
    TelcoComponent.prototype.update = function () {
        var _this = this;
        this.service.update(this.onerow, function (data) { _this.refresh(); });
    };
    TelcoComponent.prototype.save = function () {
        var _this = this;
        this.service.insert(this.onerow, function (data) { _this.refresh(); });
    };
    TelcoComponent.prototype.delete = function () {
        var _this = this;
        if (window.confirm('Bạn chắc chắn muốn xoá?')) {
            this.service.delete(this.onerow, function (data) { _this.refresh(); });
        }
    };
    TelcoComponent.prototype.reset = function () {
        this.isEdit = false;
        this.isHidden = true;
        this.onerow = {
            'price': 1000,
            'name': 'items' + new Date().getMilliseconds(),
            'desc': 'New in-app items',
            'icon': '',
            'app_id': this.service.getAppId(),
            'is_active': 1
        };
        this.items = [];
        this.paging = this.service.defaultPaging('created_at');
    };
    TelcoComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
        this.isEdit = false;
    };
    TelcoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-telco',
            template: __webpack_require__(/*! ./telco.component.html */ "./src/app/dashboard/telco/telco.component.html"),
            styles: [__webpack_require__(/*! ./telco.component.scss */ "./src/app/dashboard/telco/telco.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_telco_service__WEBPACK_IMPORTED_MODULE_1__["TelcoService"], _service_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]])
    ], TelcoComponent);
    return TelcoComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/dashboard/transaction/transaction.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/transaction/transaction.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-6 col-lg-3\">\n        <div class=\"card\">\n            <div class=\"card-body p-0 d-flex align-items-center\">\n                <i class=\"fa fa-money bg-success p-4 font-2xl mr-3\"></i>\n                <div>\n                    <div class=\"text-value-sm text-primary\">\n                        <strong>{{totalSUSD | currency:'USD':'symbol':'1.0-0'}}</strong>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6 col-lg-3\">\n        <div class=\"card\">\n            <div class=\"card-body p-0 d-flex align-items-center\">\n                <i class=\"fa fa-money bg-success p-4 font-2xl mr-3\"></i>\n                <div>\n                    <div class=\"text-value-sm text-primary\">\n                        <strong>{{totalSVND | currency:'VND':'symbol':'1.0-0'}}</strong>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6 col-lg-3\">\n        <div class=\"card\">\n            <div class=\"card-body p-0 d-flex align-items-center\">\n                <i class=\"fa fa-money bg-danger p-4 font-2xl mr-3\"></i>\n                <div>\n                    <div class=\"text-value-sm text-primary\">\n                        <strong>{{totalFUSD | currency:'USD':'symbol':'1.0-0'}}</strong>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6 col-lg-3\">\n        <div class=\"card\">\n            <div class=\"card-body p-0 d-flex align-items-center\">\n                <i class=\"fa fa-money bg-danger p-4 font-2xl mr-3\"></i>\n                <div>\n                    <div class=\"text-value-sm text-primary\">\n                        <strong>{{totalFVND | currency:'VND':'symbol':'1.0-0'}}</strong>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h5>Transaction Logs</h5>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"btn-group tright\" dropdown>\n                    <button dropdownToggle type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" style=\"margin:0px;\">\n                    {{app.os}} - {{app.version}} <span class=\"caret\"></span>\n                    </button>\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                        <li role=\"menuitem\" *ngFor=\"let app of apps\" (click)=\"switchApp(app)\" class=\"tpointer\">\n                            <a class=\"dropdown-item\"> {{app.os}} - {{app.version}}</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-block\">\n        <div class=\"tTableWraper\">\n            <table class=\"table table-hover mb-0 table-striped fixed table-bordered\">\n                <thead class=\"thead-default\">\n                    <tr>\n                        <th *ngFor=\"let perheader of header\" (click)=\"sort($event)\" [attr.rxdata]=\"perheader.id\" class=\"{{(perheader.id == paging.st_col)? 'rxsorting' : ''}} {{(paging.st_type == 1)? 'rxup' : 'rxdown'}} tMiddle\">{{perheader.name}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of items\" style=\"cursor: pointer;\">\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{item.trans_id}}\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{item.product_currency}}\n                        </td>\n                        <td style=\"vertical-align: middle;\">\n                            {{item.product_id}}\n                        </td>\n                        <td align=\"center\"  style=\"vertical-align: middle;\">\n                            <strong>{{item.product_price | currency:'USD':'symbol':'1.0-0'}}</strong>\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{item.purchase_date_ms | date:'dd/MM/yyyy'}}\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            {{item.created_at * 1000 | date:'dd/MM/yyyy'}}\n                        </td>\n                        <td align=\"center\" style=\"vertical-align: middle;\">\n                            <span class=\"tag tag-success\" *ngIf=\"item.status == 1\">Success</span>\n                            <span class=\"tag tag-danger\" *ngIf=\"item.status == 0\">Failed</span>\n                        </td>\n                        <td style=\"vertical-align: middle;\">\n                            {{item.payload}}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"100%\" class=\"rx-pagin\">\n                            <button class=\"rx-back\" [disabled]=\"paging.pg_page <= 1\" (click)=\"jumpPage(paging.pg_page - 1)\">\n                            <</button>\n                            <input type=\"number\" class=\"rx-cur\" [(ngModel)]=\"paging.pg_page\">\n                            <button class=\"rx-next\" [disabled]=\"!isnext\" (click)=\"jumpPage(paging.pg_page + 1)\">></button>\n                            <span class=\"rx-jump\" (click)=\"jumpPage(paging.pg_page)\"><i class=\"icon-rocket\"></i></span>\n                            <select type=\"number\" class=\"rx-pg-size\" (ngModelChange)=\"resizePage($event)\" [(ngModel)]=\"paging.pg_size\">\n                                <option value=\"10\" selected>10</option>\n                                <option value=\"50\" selected>50</option>\n                                <option value=\"100\" selected>100</option>\n                            </select> / page\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/transaction/transaction.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/transaction/transaction.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tTableWraper {\n  max-width: 100%;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/dashboard/transaction/transaction.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/transaction/transaction.component.ts ***!
  \****************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/transaction.service */ "./src/app/service/transaction.service.ts");
/* harmony import */ var _service_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/base.component */ "./src/app/service/base.component.ts");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/service/group.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionComponent = /** @class */ (function (_super) {
    __extends(TransactionComponent, _super);
    function TransactionComponent(service, gService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.gService = gService;
        _this.app = { 'app_id': '', 'os': '', 'version': '' };
        _this.totalSUSD = 0;
        _this.totalSVND = 0;
        _this.totalFUSD = 0;
        _this.totalFVND = 0;
        _this.search = { field: 'created_at', term: '' };
        _this.isnext = true;
        _this.paging = _this.service.defaultPaging('created_at');
        _this.header = [
            { id: 'trans_id', name: 'Id', is_search: 1, st_col: 'trans_id', st_type: 1 },
            { id: 'product_currency', name: 'Currency', is_search: 1, st_col: 'product_currency', st_type: 1 },
            { id: 'product_id', name: 'Product Id', is_search: 1, st_col: 'product_id', st_type: 1 },
            { id: 'product_price', name: 'Price', is_search: 1, st_col: 'product_price', st_type: 1 },
            { id: 'purchase_date_ms', name: 'Purchase Date', is_search: 1, st_col: 'purchase_date_ms', st_type: 1 },
            { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
            { id: 'status', name: 'Status', is_search: 1, st_col: 'status', st_type: 1 },
            { id: 'payload', name: 'Payload', is_search: 1, st_col: 'payload', st_type: 1 }
        ];
        return _this;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        this.sync();
    };
    TransactionComponent.prototype.sync = function () {
        var _this = this;
        if (!this.service.isExpired()) {
            this.getApps();
            this.service.getTransactions({
                'search_app_id': this.service.getAppId(),
                'pg_page': this.paging.pg_page,
                'pg_size': this.paging.pg_size,
                'st_col': this.paging.st_col,
                'st_type': this.paging.st_type
            }, function (data) {
                _this.items = data;
                for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                    var it = _a[_i];
                    if (it.status == 1) {
                        if (it.product_currency == 'USD')
                            _this.totalSUSD += it.product_price;
                        else if (it.product_currency == 'VND')
                            _this.totalSVND += it.product_price;
                    }
                    else if (it.status == 0) {
                        if (it.product_currency == 'USD')
                            _this.totalFUSD += it.product_price;
                        else if (it.product_currency == 'VND')
                            _this.totalFVND += it.product_price;
                    }
                }
            });
        }
    };
    TransactionComponent.prototype.getApps = function () {
        this.app.app_id = this.service.getAppId();
        this.apps = this.gService.getGroupSetting();
        for (var _i = 0, _a = this.apps; _i < _a.length; _i++) {
            var ap = _a[_i];
            if (ap.app_id == this.app.app_id) {
                this.app.os = ap.os;
                this.app.version = ap.version;
            }
        }
    };
    TransactionComponent.prototype.switchApp = function (app) {
        this.service.setAppId(app.app_id);
        this.sync();
    };
    TransactionComponent.prototype.jumpPage = function (_page) {
        _page = (_page <= 0) ? 1 : _page;
        this.paging.pg_page = _page;
        this.sync();
    };
    TransactionComponent.prototype.resizePage = function ($event) {
        this.paging.pg_size = $event;
        this.jumpPage(1);
    };
    TransactionComponent.prototype.sort = function ($event) {
        var target = $event.target || $event.srcElement || $event.currentTarget;
        var idAttr = target.attributes.rxdata;
        if (typeof (idAttr) != 'undefined') {
            var tempcol = idAttr.nodeValue;
            if (this.paging.st_col == tempcol) {
                this.paging.st_type *= -1;
            }
            else {
                this.paging.st_col = tempcol;
                this.paging.st_type = -1;
            }
            this.sync();
        }
    };
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__(/*! ./transaction.component.html */ "./src/app/dashboard/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.scss */ "./src/app/dashboard/transaction/transaction.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"], _service_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]])
    ], TransactionComponent);
    return TransactionComponent;
}(_service_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map