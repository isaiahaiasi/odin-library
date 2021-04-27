/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./env.js":
/*!****************!*\
  !*** ./env.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const env = {
  API_KEY: "AIzaSyAwegV7xlbTZlIdLijPYk-cyMgezu0_Ozs",
  AUTH_DOMAIN: "odinlibrary-f5.firebaseapp.com",
  PROJECT_ID: "odinlibrary-f5",
  STORAGE_BUCKET: "odinlibrary-f5.appspot.com",
  MESSAGING_SENDER_ID: "1092737413441",
  APP_ID: "1:1092737413441:web:a879709c9e7f5c3db671c0",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (env);


/***/ }),

/***/ "./node_modules/@firebase/app/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "firebase": () => (/* binding */ firebase$1)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");





/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory('app', 'Firebase', ERRORS);

var name = "@firebase/app";
var version = "0.6.20";

var name$1 = "@firebase/analytics";

var name$2 = "@firebase/auth";

var name$3 = "@firebase/database";

var name$4 = "@firebase/functions";

var name$5 = "@firebase/installations";

var name$6 = "@firebase/messaging";

var name$7 = "@firebase/performance";

var name$8 = "@firebase/remote-config";

var name$9 = "@firebase/storage";

var name$a = "@firebase/firestore";

var name$b = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name] = 'fire-core',
    _a$1[name$1] = 'fire-analytics',
    _a$1[name$2] = 'fire-auth',
    _a$1[name$3] = 'fire-rtdb',
    _a$1[name$4] = 'fire-fn',
    _a$1[name$5] = 'fire-iid',
    _a$1[name$6] = 'fire-fcm',
    _a$1[name$7] = 'fire-perf',
    _a$1[name$8] = 'fire-rc',
    _a$1[name$9] = 'fire-gcs',
    _a$1[name$a] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$b] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepCopy)(options);
        this.container = new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        // populate ComponentContainer with existing components
        this.firebase_.INTERNAL.components.forEach(function (component) {
            return _this._addComponent(component);
        });
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: false,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    FirebaseAppImpl.prototype.toJSON = function () {
        return {
            name: this.name,
            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
            options: this.options
        };
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "8.4.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        // add the component to existing app instances
        for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) {
            var appName = _a[_i];
            apps[appName]._addComponent(component);
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
        }
        (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.setUserLogHandler)(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.createSubscribe,
        ErrorFactory: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory,
        deepExtend: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.isBrowser)() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.isNode)()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase$1);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "ComponentContainer": () => (/* binding */ ComponentContainer),
/* harmony export */   "Provider": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");



/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
        this.onInstanceCreated = null;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    Component.prototype.setInstanceCreatedCallback = function (callback) {
        this.onInstanceCreated = callback;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error("Service " + this.name + " is not available");
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var services;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(services
                                .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(services
                                .filter(function (service) { return '_delete' in service; }) // modularized services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service._delete(); }))))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.isInitialized = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instances.has(identifier);
    };
    Provider.prototype.initialize = function (opts) {
        var e_2, _a;
        if (opts === void 0) { opts = {}; }
        var _b = opts.instanceIdentifier, instanceIdentifier = _b === void 0 ? DEFAULT_ENTRY_NAME : _b, _c = opts.options, options = _c === void 0 ? {} : _c;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
        }
        if (!this.isComponentSet()) {
            throw Error("Component " + this.name + " has not been registered yet");
        }
        var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options: options
        });
        try {
            // resolve any pending promise waiting for the service instance
            for (var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.instancesDeferred.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_e.value, 2), instanceIdentifier_1 = _f[0], instanceDeferred = _f[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier_1);
                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                    instanceDeferred.resolve(instance);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return instance;
    };
    Provider.prototype.getOrInitializeService = function (_a) {
        var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
        var instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options: options
            });
            this.instances.set(instanceIdentifier, instance);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_c) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    Provider.prototype.shouldAutoInitialize = function () {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */);
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
/* harmony export */   "Logger": () => (/* binding */ Logger),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel),
/* harmony export */   "setUserLogHandler": () => (/* binding */ setUserLogHandler)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS),
/* harmony export */   "Deferred": () => (/* binding */ Deferred),
/* harmony export */   "ErrorFactory": () => (/* binding */ ErrorFactory),
/* harmony export */   "FirebaseError": () => (/* binding */ FirebaseError),
/* harmony export */   "MAX_VALUE_MILLIS": () => (/* binding */ MAX_VALUE_MILLIS),
/* harmony export */   "RANDOM_FACTOR": () => (/* binding */ RANDOM_FACTOR),
/* harmony export */   "Sha1": () => (/* binding */ Sha1),
/* harmony export */   "areCookiesEnabled": () => (/* binding */ areCookiesEnabled),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "assertionError": () => (/* binding */ assertionError),
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "base64Decode": () => (/* binding */ base64Decode),
/* harmony export */   "base64Encode": () => (/* binding */ base64Encode),
/* harmony export */   "calculateBackoffMillis": () => (/* binding */ calculateBackoffMillis),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "createSubscribe": () => (/* binding */ createSubscribe),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "deepExtend": () => (/* binding */ deepExtend),
/* harmony export */   "errorPrefix": () => (/* binding */ errorPrefix),
/* harmony export */   "extractQuerystring": () => (/* binding */ extractQuerystring),
/* harmony export */   "getModularInstance": () => (/* binding */ getModularInstance),
/* harmony export */   "getUA": () => (/* binding */ getUA),
/* harmony export */   "isAdmin": () => (/* binding */ isAdmin),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "isBrowserExtension": () => (/* binding */ isBrowserExtension),
/* harmony export */   "isElectron": () => (/* binding */ isElectron),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isIndexedDBAvailable": () => (/* binding */ isIndexedDBAvailable),
/* harmony export */   "isMobileCordova": () => (/* binding */ isMobileCordova),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isNodeSdk": () => (/* binding */ isNodeSdk),
/* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isUWP": () => (/* binding */ isUWP),
/* harmony export */   "isValidFormat": () => (/* binding */ isValidFormat),
/* harmony export */   "isValidTimestamp": () => (/* binding */ isValidTimestamp),
/* harmony export */   "issuedAtTime": () => (/* binding */ issuedAtTime),
/* harmony export */   "jsonEval": () => (/* binding */ jsonEval),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "ordinal": () => (/* binding */ ordinal),
/* harmony export */   "querystring": () => (/* binding */ querystring),
/* harmony export */   "querystringDecode": () => (/* binding */ querystringDecode),
/* harmony export */   "safeGet": () => (/* binding */ safeGet),
/* harmony export */   "stringLength": () => (/* binding */ stringLength),
/* harmony export */   "stringToByteArray": () => (/* binding */ stringToByteArray$1),
/* harmony export */   "stringify": () => (/* binding */ stringify),
/* harmony export */   "validateArgCount": () => (/* binding */ validateArgCount),
/* harmony export */   "validateCallback": () => (/* binding */ validateCallback),
/* harmony export */   "validateContextObject": () => (/* binding */ validateContextObject),
/* harmony export */   "validateIndexedDBOpenable": () => (/* binding */ validateIndexedDBOpenable),
/* harmony export */   "validateNamespace": () => (/* binding */ validateNamespace)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    return 'indexedDB' in self && indexedDB != null;
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise(function (resolve, reject) {
        try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = self.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function () {
                request_1.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist_1) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
                }
                resolve(true);
            };
            request_1.onupgradeneeded = function () {
                preExist_1 = false;
            };
            request_1.onerror = function () {
                var _a;
                reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (!navigator || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(FirebaseError, _super);
    function FirebaseError(code, message, customData) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.customData = customData;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? String(value) : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var _a = token.split('='), key = _a[0], value = _a[1];
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    var queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    var fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return fnName + " failed: " + argName + " argument ";
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
    if (intervalMillis === void 0) { intervalMillis = DEFAULT_INTERVAL_MILLIS; }
    if (backoffFactor === void 0) { backoffFactor = DEFAULT_BACKOFF_FACTOR; }
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    var randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return "" + i;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    var cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    var dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js");



var name = "firebase";
var version = "8.4.2";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.registerVersion(name, version, 'app');
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/firebase-auth.js":
/*!************************************************!*\
  !*** ./node_modules/firebase/firebase-auth.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

!function(t,e){ true?e(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js")):0}(this,function(e){"use strict";try{!function(){function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var zl=t(e);!function(){var t,o="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)};var u=function(t){t=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g,t];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}return globalThis}(this);function c(t){var e,n,i="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return i?i.call(t):{next:(e=t,n=0,function(){return n<e.length?{done:!1,value:e[n++]}:{done:!0}})}}!function(t,e){if(e){var n=u;t=t.split(".");for(var i=0;i<t.length-1;i++){var r=t[i];r in n||(n[r]={}),n=n[r]}(e=e(i=n[t=t[t.length-1]]))!=i&&null!=e&&o(n,t,{configurable:!0,writable:!0,value:e})}}("Promise",function(t){function a(t){this.b=0,this.c=void 0,this.a=[];var e=this.f();try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function e(){this.a=null}function s(e){return e instanceof a?e:new a(function(t){t(e)})}if(t)return t;e.prototype.b=function(t){var e;null==this.a&&(this.a=[],(e=this).c(function(){e.g()})),this.a.push(t)};var n=u.setTimeout;e.prototype.c=function(t){n(t,0)},e.prototype.g=function(){for(;this.a&&this.a.length;){var t=this.a;this.a=[];for(var e=0;e<t.length;++e){var n=t[e];t[e]=null;try{n()}catch(t){this.f(t)}}}this.a=null},e.prototype.f=function(t){this.c(function(){throw t})},a.prototype.f=function(){function t(e){return function(t){i||(i=!0,e.call(n,t))}}var n=this,i=!1;return{resolve:t(this.m),reject:t(this.g)}},a.prototype.m=function(t){if(t===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(t instanceof a)this.s(t);else{t:switch(typeof t){case"object":var e=null!=t;break t;case"function":e=!0;break t;default:e=!1}e?this.v(t):this.h(t)}},a.prototype.v=function(t){var e=void 0;try{e=t.then}catch(t){return void this.g(t)}"function"==typeof e?this.u(e,t):this.h(t)},a.prototype.g=function(t){this.i(2,t)},a.prototype.h=function(t){this.i(1,t)},a.prototype.i=function(t,e){if(0!=this.b)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.b);this.b=t,this.c=e,this.l()},a.prototype.l=function(){if(null!=this.a){for(var t=0;t<this.a.length;++t)r.b(this.a[t]);this.a=null}};var r=new e;return a.prototype.s=function(t){var e=this.f();t.Qa(e.resolve,e.reject)},a.prototype.u=function(t,e){var n=this.f();try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},a.prototype.then=function(t,e){function n(e,t){return"function"==typeof e?function(t){try{i(e(t))}catch(t){r(t)}}:t}var i,r,o=new a(function(t,e){i=t,r=e});return this.Qa(n(t,i),n(e,r)),o},a.prototype.catch=function(t){return this.then(void 0,t)},a.prototype.Qa=function(t,e){function n(){switch(i.b){case 1:t(i.c);break;case 2:e(i.c);break;default:throw Error("Unexpected state: "+i.b)}}var i=this;null==this.a?r.b(n):this.a.push(n)},a.resolve=s,a.reject=function(n){return new a(function(t,e){e(n)})},a.race=function(r){return new a(function(t,e){for(var n=c(r),i=n.next();!i.done;i=n.next())s(i.value).Qa(t,e)})},a.all=function(t){var e=c(t),o=e.next();return o.done?s([]):new a(function(n,t){for(var i=[],r=0;i.push(void 0),r++,s(o.value).Qa(function(e){return function(t){i[e]=t,0==--r&&n(i)}}(i.length-1),t),o=e.next(),!o.done;);})},a});var h=h||{},l=this||self,e=/^[\w+/_-]+[=]{0,2}$/,s=null;function f(t){return(t=t.querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&e.test(t)?t:""}function a(){}function d(t){var e=typeof t;return"object"!=e?e:t?Array.isArray(t)?"array":e:"null"}function p(t){var e=d(t);return"array"==e||"object"==e&&"number"==typeof t.length}function v(t){return"function"==d(t)}function m(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var n="closure_uid_"+(1e9*Math.random()>>>0),i=0;function r(t,e,n){return t.call.apply(t.bind,arguments)}function g(e,n,t){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,i),e.apply(n,t)}}return function(){return e.apply(n,arguments)}}function b(t,e,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r:g).apply(null,arguments)}function y(e){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function w(t,e){function n(){}n.prototype=e.prototype,t.ab=e.prototype,t.prototype=new n,t.prototype.constructor=t}function I(t){return t}function T(t,e,n){this.code=k+t,this.message=e||S[t]||"",this.a=n||null}function E(t){var e=t&&t.code;return e?new T(e.substring(k.length),t.message,t.serverResponse):null}w(T,Error),T.prototype.w=function(){var t={code:this.code,message:this.message};return this.a&&(t.serverResponse=this.a),t},T.prototype.toJSON=function(){return this.w()};var A,k="auth/",S={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."},N={ld:{Ta:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Za:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},sd:{Ta:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Za:"https://securetoken.googleapis.com/v1/token",Wa:"https://identitytoolkit.googleapis.com/v2/",id:"p"},ud:{Ta:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Za:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},vd:{Ta:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Za:"https://test-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}};function _(t){for(var e in N)if(N[e].id===t)return t=N[e],{firebaseEndpoint:t.Ta,secureTokenEndpoint:t.Za,identityPlatformEndpoint:t.Wa};return null}function O(t){if(t)try{return t.$goog_Thenable}catch(t){return}}function C(t){var e;Error.captureStackTrace?Error.captureStackTrace(this,C):(e=Error().stack)&&(this.stack=e),t&&(this.message=String(t))}function R(t,e){for(var n="",i=(t=t.split("%s")).length-1,r=0;r<i;r++)n+=t[r]+(r<e.length?e[r]:"%s");C.call(this,n+t[i])}function D(t){throw new R("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function P(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function L(t,e){t.f(e),t.b<100&&(t.b++,e.next=t.a,t.a=e)}function x(){this.b=this.a=null}A=_("__EID__")?"__EID__":void 0,w(C,Error),C.prototype.name="CustomError",w(R,C),R.prototype.name="AssertionError",P.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t};var M=new P(function(){return new j},function(t){t.reset()});function j(){this.next=this.b=this.a=null}x.prototype.add=function(t,e){var n=M.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},j.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},j.prototype.reset=function(){this.next=this.b=this.a=null};var U=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},V=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,r="string"==typeof t?t.split(""):t,o=0;o<i;o++)o in r&&e.call(n,r[o],o,t)};var F=Array.prototype.filter?function(t,e){return Array.prototype.filter.call(t,e,void 0)}:function(t,e){for(var n,i=t.length,r=[],o=0,a="string"==typeof t?t.split(""):t,s=0;s<i;s++)s in a&&(n=a[s],e.call(void 0,n,s,t)&&(r[o++]=n));return r},q=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var n=t.length,i=Array(n),r="string"==typeof t?t.split(""):t,o=0;o<n;o++)o in r&&(i[o]=e.call(void 0,r[o],o,t));return i},H=Array.prototype.some?function(t,e){return Array.prototype.some.call(t,e,void 0)}:function(t,e){for(var n=t.length,i="string"==typeof t?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t))return!0;return!1};function K(t,e){return 0<=U(t,e)}function G(t,e){var n;return(n=0<=(e=U(t,e)))&&Array.prototype.splice.call(t,e,1),n}function B(n,i){!function(t,e){for(var n="string"==typeof t?t.split(""):t,i=t.length-1;0<=i;--i)i in n&&e.call(void 0,n[i],i,t)}(n,function(t,e){i.call(void 0,t,e,n)&&1==Array.prototype.splice.call(n,e,1).length&&0})}function W(){return Array.prototype.concat.apply([],arguments)}function X(t){var e=t.length;if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i];return n}return[]}var J,Y=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},z=/&/g,$=/</g,Z=/>/g,Q=/"/g,tt=/'/g,et=/\x00/g,nt=/[\x00&<>"']/;function it(t,e){return-1!=t.indexOf(e)}function rt(t,e){return t<e?-1:e<t?1:0}t:{var ot=l.navigator;if(ot){ot=ot.userAgent;if(ot){J=ot;break t}}J=""}function at(t){return it(J,t)}function st(t,e){for(var n in t)e.call(void 0,t[n],n,t)}function ut(t){for(var e in t)return;return 1}function ct(t){var e,n={};for(e in t)n[e]=t[e];return n}var ht="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(t){for(var e,n,i=1;i<arguments.length;i++){for(e in n=arguments[i])t[e]=n[e];for(var r=0;r<ht.length;r++)e=ht[r],Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}}function ft(t,e){t:{try{var n=t&&t.ownerDocument,n=n&&(n.defaultView||n.parentWindow);if((n=n||l).Element&&n.Location){var i=n;break t}}catch(t){}i=null}if(i&&void 0!==i[e]&&(!t||!(t instanceof i[e])&&(t instanceof i.Location||t instanceof i.Element))){if(m(t))try{var r=t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t)}catch(t){r="<object could not be stringified>"}else r=void 0===t?"undefined":null===t?"null":typeof t;D("Argument is not a %s (or a non-Element, non-Location mock); got: %s",e,r)}}function dt(t,e){this.a=t===gt&&e||"",this.b=mt}function pt(t){return t instanceof dt&&t.constructor===dt&&t.b===mt?t.a:(D("expected object of type Const, got '"+t+"'"),"type_error:Const")}dt.prototype.sa=!0,dt.prototype.ra=function(){return this.a},dt.prototype.toString=function(){return"Const{"+this.a+"}"};var vt,mt={},gt={};function bt(){if(void 0===vt){var t=null,e=l.trustedTypes;if(e&&e.createPolicy){try{t=e.createPolicy("goog#html",{createHTML:I,createScript:I,createScriptURL:I})}catch(t){l.console&&l.console.error(t.message)}vt=t}else vt=t}return vt}function yt(t,e){this.a=e===At?t:""}function wt(t){return t instanceof yt&&t.constructor===yt?t.a:(D("expected object of type TrustedResourceUrl, got '"+t+"' of type "+d(t)),"type_error:TrustedResourceUrl")}function It(t,n){var e,i=pt(t);if(!Et.test(i))throw Error("Invalid TrustedResourceUrl format: "+i);return t=i.replace(Tt,function(t,e){if(!Object.prototype.hasOwnProperty.call(n,e))throw Error('Found marker, "'+e+'", in format string, "'+i+'", but no valid label mapping found in args: '+JSON.stringify(n));return(t=n[e])instanceof dt?pt(t):encodeURIComponent(String(t))}),e=t,t=bt(),new yt(e=t?t.createScriptURL(e):e,At)}yt.prototype.sa=!0,yt.prototype.ra=function(){return this.a.toString()},yt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var Tt=/%{(\w+)}/g,Et=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,At={};function kt(t,e){this.a=e===Dt?t:""}function St(t){return t instanceof kt&&t.constructor===kt?t.a:(D("expected object of type SafeUrl, got '"+t+"' of type "+d(t)),"type_error:SafeUrl")}kt.prototype.sa=!0,kt.prototype.ra=function(){return this.a.toString()},kt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var Nt=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,_t=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ot=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ct(t){return t instanceof kt?t:(t="object"==typeof t&&t.sa?t.ra():String(t),t=Ot.test(t)||(e=(t=(t=String(t)).replace(/(%0A|%0D)/g,"")).match(_t))&&Nt.test(e[1])?new kt(t,Dt):null);var e}function Rt(t){return t instanceof kt?t:(t="object"==typeof t&&t.sa?t.ra():String(t),new kt(t=!Ot.test(t)?"about:invalid#zClosurez":t,Dt))}var Dt={},Pt=new kt("about:invalid#zClosurez",Dt);function Lt(t,e,n){this.a=n===xt?t:""}Lt.prototype.sa=!0,Lt.prototype.ra=function(){return this.a.toString()},Lt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var xt={};function Mt(t,e,n,i){return t=t instanceof kt?t:Rt(t),e=e||l,n=n instanceof dt?pt(n):n||"",e.open(St(t),n,i,void 0)}function jt(t){for(var e=t.split("%s"),n="",i=Array.prototype.slice.call(arguments,1);i.length&&1<e.length;)n+=e.shift()+i.shift();return n+e.join("%s")}function Ut(t){return nt.test(t)&&(-1!=(t=-1!=(t=-1!=(t=-1!=(t=-1!=(t=-1!=t.indexOf("&")?t.replace(z,"&amp;"):t).indexOf("<")?t.replace($,"&lt;"):t).indexOf(">")?t.replace(Z,"&gt;"):t).indexOf('"')?t.replace(Q,"&quot;"):t).indexOf("'")?t.replace(tt,"&#39;"):t).indexOf("\0")&&(t=t.replace(et,"&#0;"))),t}function Vt(t){return Vt[" "](t),t}Vt[" "]=a;var Ft,qt=at("Opera"),Ht=at("Trident")||at("MSIE"),Kt=at("Edge"),Gt=Kt||Ht,Bt=at("Gecko")&&!(it(J.toLowerCase(),"webkit")&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),Wt=it(J.toLowerCase(),"webkit")&&!at("Edge");function Xt(){var t=l.document;return t?t.documentMode:void 0}t:{var Jt="",Yt=(Yt=J,Bt?/rv:([^\);]+)(\)|;)/.exec(Yt):Kt?/Edge\/([\d\.]+)/.exec(Yt):Ht?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Yt):Wt?/WebKit\/(\S+)/.exec(Yt):qt?/(?:Version)[ \/]?(\S+)/.exec(Yt):void 0);if(Yt&&(Jt=Yt?Yt[1]:""),Ht){Yt=Xt();if(null!=Yt&&Yt>parseFloat(Jt)){Ft=String(Yt);break t}}Ft=Jt}var zt={};function $t(s){return t=s,e=function(){for(var t=0,e=Y(String(Ft)).split("."),n=Y(String(s)).split("."),i=Math.max(e.length,n.length),r=0;0==t&&r<i;r++)for(var o=e[r]||"",a=n[r]||"";o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],(0!=o[0].length||0!=a[0].length)&&(t=rt(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||rt(0==o[2].length,0==a[2].length)||rt(o[2],a[2]),o=o[3],a=a[3],0==t););return 0<=t},n=zt,Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t);var t,e,n}var Zt=l.document&&Ht&&(Xt()||parseInt(Ft,10))||void 0;try{new self.OffscreenCanvas(0,0).getContext("2d")}catch(t){}var Qt=!Ht||9<=Number(Zt);function te(t){var e=document;return"string"==typeof t?e.getElementById(t):t}function ee(n,t){st(t,function(t,e){t&&"object"==typeof t&&t.sa&&(t=t.ra()),"style"==e?n.style.cssText=t:"class"==e?n.className=t:"for"==e?n.htmlFor=t:re.hasOwnProperty(e)?n.setAttribute(re[e],t):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?n.setAttribute(e,t):n[e]=t})}var ne,ie,re={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function oe(){var t,e=arguments,n=document,i=String(e[0]),r=e[1];return!Qt&&r&&(r.name||r.type)&&(i=["<",i],r.name&&i.push(' name="',Ut(r.name),'"'),r.type&&(i.push(' type="',Ut(r.type),'"'),lt(t={},r),delete t.type,r=t),i.push(">"),i=i.join("")),i=ae(n,i),r&&("string"==typeof r?i.className=r:Array.isArray(r)?i.className=r.join(" "):ee(i,r)),2<e.length&&function(e,n,t){function i(t){t&&n.appendChild("string"==typeof t?e.createTextNode(t):t)}for(var r=2;r<t.length;r++){var o=t[r];if(!p(o)||m(o)&&0<o.nodeType)i(o);else{t:{if(o&&"number"==typeof o.length){if(m(o)){var a="function"==typeof o.item||"string"==typeof o.item;break t}if(v(o)){a="function"==typeof o.item;break t}}a=!1}V(a?X(o):o,i)}}}(n,i,e),i}function ae(t,e){return e=String(e),"application/xhtml+xml"===t.contentType&&(e=e.toLowerCase()),t.createElement(e)}function se(t){l.setTimeout(function(){throw t},0)}function ue(t,e){ie||function(){{var t;ie=l.Promise&&l.Promise.resolve?(t=l.Promise.resolve(void 0),function(){t.then(le)}):function(){var t=le;!v(l.setImmediate)||l.Window&&l.Window.prototype&&!at("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(ne=ne||function(){var t=l.MessageChannel;if(void 0===(t=void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!at("Presto")?function(){var t=ae(document,"IFRAME");t.style.display="none",document.documentElement.appendChild(t);var e=t.contentWindow;(t=e.document).open(),t.close();var n="callImmediate"+Math.random(),i="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host;t=b(function(t){"*"!=i&&t.origin!=i||t.data!=n||this.port1.onmessage()},this),e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,i)}}}:t)||at("Trident")||at("MSIE"))return function(t){l.setTimeout(t,0)};var e=new t,n={},i=n;return e.port1.onmessage=function(){var t;void 0!==n.next&&(t=(n=n.next).Gb,n.Gb=null,t())},function(t){i.next={Gb:t},i=i.next,e.port2.postMessage(0)}}())(t):l.setImmediate(t)}}}(),ce||(ie(),ce=!0),he.add(t,e)}var ce=!1,he=new x;function le(){for(var t,e,n;n=e=void 0,n=null,(e=he).a&&(n=e.a,e.a=e.a.next,e.a||(e.b=null),n.next=null),t=n;){try{t.a.call(t.b)}catch(t){se(t)}L(M,t)}ce=!1}function fe(t,e){if(this.a=de,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=a)try{var n=this;t.call(e,function(t){ke(n,pe,t)},function(t){if(!(t instanceof De))try{if(t instanceof Error)throw t;throw Error("Promise rejected.")}catch(t){}ke(n,ve,t)})}catch(t){ke(this,ve,t)}}var de=0,pe=2,ve=3;function me(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}me.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1};var ge=new P(function(){return new me},function(t){t.reset()});function be(t,e,n){var i=ge.get();return i.g=t,i.b=e,i.f=n,i}function ye(t){if(t instanceof fe)return t;var e=new fe(a);return ke(e,pe,t),e}function we(n){return new fe(function(t,e){e(n)})}function Ie(t,e,n){Se(t,e,n,null)||ue(y(e,t))}function Te(n){return new fe(function(i){var r=n.length,o=[];if(r)for(var t=function(t,e,n){r--,o[t]=e?{Pb:!0,value:n}:{Pb:!1,reason:n},0==r&&i(o)},e=0;e<n.length;e++)Ie(n[e],y(t,e,!0),y(t,e,!1));else i(o)})}function Ee(t,e){t.b||t.a!=pe&&t.a!=ve||Ne(t),t.f?t.f.next=e:t.b=e,t.f=e}function Ae(t,r,o,a){var e=be(null,null,null);return e.a=new fe(function(n,i){e.g=r?function(t){try{var e=r.call(a,t);n(e)}catch(t){i(t)}}:n,e.b=o?function(t){try{var e=o.call(a,t);void 0===e&&t instanceof De?i(t):n(e)}catch(t){i(t)}}:i}),Ee(e.a.c=t,e),e.a}function ke(t,e,n){var i,r;t.a==de&&(t===n&&(e=ve,n=new TypeError("Promise cannot resolve to itself")),t.a=1,Se(n,t.$c,t.ad,t)||(t.i=n,t.a=e,t.c=null,Ne(t),e!=ve||n instanceof De||(r=n,(i=t).g=!0,ue(function(){i.g&&Re.call(null,r)}))))}function Se(t,e,n,i){if(t instanceof fe)return Ee(t,be(e||a,n||null,i)),1;if(O(t))return t.then(e,n,i),1;if(m(t))try{var r=t.then;if(v(r))return function(t,e,n,i,r){function o(t){a||(a=!0,i.call(r,t))}var a=!1;try{e.call(t,function(t){a||(a=!0,n.call(r,t))},o)}catch(t){o(t)}}(t,r,e,n,i),1}catch(t){return n.call(i,t),1}}function Ne(t){t.h||(t.h=!0,ue(t.gc,t))}function _e(t){var e=null;return t.b&&(e=t.b,t.b=e.next,e.next=null),t.b||(t.f=null),e}function Oe(t,e,n,i){if(n==ve&&e.b&&!e.c)for(;t&&t.g;t=t.c)t.g=!1;if(e.a)e.a.c=null,Ce(e,n,i);else try{e.c?e.g.call(e.f):Ce(e,n,i)}catch(t){Re.call(null,t)}L(ge,e)}function Ce(t,e,n){e==pe?t.g.call(t.f,n):t.b&&t.b.call(t.f,n)}fe.prototype.then=function(t,e,n){return Ae(this,v(t)?t:null,v(e)?e:null,n)},fe.prototype.$goog_Thenable=!0,(t=fe.prototype).oa=function(t,e){return(t=be(t,t,e)).c=!0,Ee(this,t),this},t.o=function(t,e){return Ae(this,null,t,e)},t.cancel=function(t){var e;this.a==de&&(e=new De(t),ue(function(){!function t(e,n){if(e.a==de)if(e.c){var i=e.c;if(i.b){for(var r=0,o=null,a=null,s=i.b;s&&(s.c||(r++,!((o=s.a==e?s:o)&&1<r)));s=s.next)o||(a=s);o&&(i.a==de&&1==r?t(i,n):(a?((r=a).next==i.f&&(i.f=r),r.next=r.next.next):_e(i),Oe(i,o,ve,n)))}e.c=null}else ke(e,ve,n)}(this,e)},this))},t.$c=function(t){this.a=de,ke(this,pe,t)},t.ad=function(t){this.a=de,ke(this,ve,t)},t.gc=function(){for(var t;t=_e(this);)Oe(this,t,this.a,this.i);this.h=!1};var Re=se;function De(t){C.call(this,t)}function Pe(){this.xa=this.xa,this.pa=this.pa}w(De,C);var Le=0;function xe(t){t.xa||(t.xa=!0,t.Da(),0==Le)||(t=t,Object.prototype.hasOwnProperty.call(t,n)&&t[n]||(t[n]=++i))}Pe.prototype.xa=!(De.prototype.name="cancel"),Pe.prototype.Da=function(){if(this.pa)for(;this.pa.length;)this.pa.shift()()};var Me=Object.freeze||function(t){return t},je=!Ht||9<=Number(Zt),Ue=Ht&&!$t("9"),Ve=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",a,e),l.removeEventListener("test",a,e)}catch(t){}return t}();function Fe(t,e){this.type=t,this.b=this.target=e,this.defaultPrevented=!1}function qe(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.b=e,e=t.relatedTarget){if(Bt){t:{try{Vt(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:He[t.pointerType]||"",(this.a=t).defaultPrevented&&this.preventDefault()}}Fe.prototype.preventDefault=function(){this.defaultPrevented=!0},w(qe,Fe);var He=Me({2:"touch",3:"pen",4:"mouse"});qe.prototype.preventDefault=function(){qe.ab.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Ue)try{(t.ctrlKey||112<=t.keyCode&&t.keyCode<=123)&&(t.keyCode=-1)}catch(t){}},qe.prototype.g=function(){return this.a};var Ke="closure_listenable_"+(1e6*Math.random()|0),Ge=0;function Be(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.Va=r,this.key=++Ge,this.va=this.Pa=!1}function We(t){t.va=!0,t.listener=null,t.proxy=null,t.src=null,t.Va=null}function Xe(t){this.src=t,this.a={},this.b=0}function Je(t,e){var n=e.type;n in t.a&&G(t.a[n],e)&&(We(e),0==t.a[n].length&&(delete t.a[n],t.b--))}function Ye(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r];if(!o.va&&o.listener==e&&o.capture==!!n&&o.Va==i)return r}return-1}Xe.prototype.add=function(t,e,n,i,r){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++);var a=Ye(t,e,i,r);return-1<a?(e=t[a],n||(e.Pa=!1)):((e=new Be(e,this.src,o,!!i,r)).Pa=n,t.push(e)),e};var ze="closure_lm_"+(1e6*Math.random()|0),$e={};function Ze(t,e,n,i,r){if(i&&i.once)tn(t,e,n,i,r);else if(Array.isArray(e))for(var o=0;o<e.length;o++)Ze(t,e[o],n,i,r);else n=hn(n),t&&t[Ke]?fn(t,e,n,m(i)?!!i.capture:!!i,r):Qe(t,e,n,!1,i,r)}function Qe(t,e,n,i,r,o){if(!e)throw Error("Invalid event type");var a,s,u=m(r)?!!r.capture:!!r,c=un(t);if(c||(t[ze]=c=new Xe(t)),!(n=c.add(e,n,i,u,o)).proxy)if(a=sn,i=s=je?function(t){return a.call(s.src,s.listener,t)}:function(t){if(!(t=a.call(s.src,s.listener,t)))return t},(n.proxy=i).src=t,i.listener=n,t.addEventListener)void 0===(r=!Ve?u:r)&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(rn(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}}function tn(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)tn(t,e[o],n,i,r);else n=hn(n),t&&t[Ke]?dn(t,e,n,m(i)?!!i.capture:!!i,r):Qe(t,e,n,!0,i,r)}function en(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)en(t,e[o],n,i,r);else i=m(i)?!!i.capture:!!i,n=hn(n),t&&t[Ke]?(t=t.v,(e=String(e).toString())in t.a&&(-1<(n=Ye(o=t.a[e],n,i,r))&&(We(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.a[e],t.b--)))):(t=t&&un(t))&&(e=t.a[e.toString()],(n=(t=-1)<(t=e?Ye(e,n,i,r):t)?e[t]:null)&&nn(n))}function nn(t){var e,n,i;"number"!=typeof t&&t&&!t.va&&((e=t.src)&&e[Ke]?Je(e.v,t):(n=t.type,i=t.proxy,e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(rn(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=un(e))?(Je(n,t),0==n.b&&(n.src=null,e[ze]=null)):We(t)))}function rn(t){return t in $e?$e[t]:$e[t]="on"+t}function on(t,e,n,i){var r=!0;if((t=un(t))&&(e=t.a[e.toString()]))for(e=e.concat(),t=0;t<e.length;t++){var o=e[t];o&&o.capture==n&&!o.va&&(o=an(o,i),r=r&&!1!==o)}return r}function an(t,e){var n=t.listener,i=t.Va||t.src;return t.Pa&&nn(t),n.call(i,e)}function sn(t,e){if(t.va)return!0;if(je)return an(t,new qe(e,this));if(!e)t:{e=["window","event"];for(var n=l,i=0;i<e.length;i++)if(null==(n=n[e[i]])){e=null;break t}e=n}if(e=new qe(i=e,this),n=!0,!(i.keyCode<0||null!=i.returnValue)){t:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break t}catch(t){r=!0}!r&&null!=i.returnValue||(i.returnValue=!0)}for(i=[],r=e.b;r;r=r.parentNode)i.push(r);for(t=t.type,r=i.length-1;0<=r;r--){e.b=i[r];var o=on(i[r],t,!0,e),n=n&&o}for(r=0;r<i.length;r++)e.b=i[r],o=on(i[r],t,!1,e),n=n&&o}return n}function un(t){return(t=t[ze])instanceof Xe?t:null}var cn="__closure_events_fn_"+(1e9*Math.random()>>>0);function hn(e){return v(e)?e:(e[cn]||(e[cn]=function(t){return e.handleEvent(t)}),e[cn])}function ln(){Pe.call(this),this.v=new Xe(this),(this.ac=this).gb=null}function fn(t,e,n,i,r){t.v.add(String(e),n,!1,i,r)}function dn(t,e,n,i,r){t.v.add(String(e),n,!0,i,r)}function pn(t,e,n,i){if(!(e=t.v.a[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var a,s,u=e[o];u&&!u.va&&u.capture==n&&(a=u.listener,s=u.Va||u.src,u.Pa&&Je(t.v,u),r=!1!==a.call(s,i)&&r)}return r&&!i.defaultPrevented}function vn(t,e,n){if(v(t))n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function mn(n){var i=null;return new fe(function(t,e){-1==(i=vn(function(){t(void 0)},n))&&e(Error("Failed to schedule timer."))}).o(function(t){throw l.clearTimeout(i),t})}function gn(t){if(t.W&&"function"==typeof t.W)return t.W();if("string"==typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function bn(t){if(t.Y&&"function"==typeof t.Y)return t.Y();if(!t.W||"function"!=typeof t.W){if(p(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(var i in e=[],n=0,t)e[n++]=i;return e}}function yn(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof yn)for(n=t.Y(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function wn(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var i=t.a[e];In(t.b,i)&&(t.a[n++]=i),e++}t.a.length=n}if(t.c!=t.a.length){for(var r={},n=e=0;e<t.a.length;)In(r,i=t.a[e])||(r[t.a[n++]=i]=1),e++;t.a.length=n}}function In(t,e){return Object.prototype.hasOwnProperty.call(t,e)}w(ln,Pe),ln.prototype[Ke]=!0,ln.prototype.addEventListener=function(t,e,n,i){Ze(this,t,e,n,i)},ln.prototype.removeEventListener=function(t,e,n,i){en(this,t,e,n,i)},ln.prototype.dispatchEvent=function(t){var e;if(n=this.gb)for(e=[];n;n=n.gb)e.push(n);var n=this.ac,i=t.type||t;if("string"==typeof t?t=new Fe(t,n):t instanceof Fe?t.target=t.target||n:(a=t,lt(t=new Fe(i,n),a)),a=!0,e)for(var r=e.length-1;0<=r;r--)var o=t.b=e[r],a=pn(o,i,!0,t)&&a;if(a=pn(o=t.b=n,i,!0,t)&&a,a=pn(o,i,!1,t)&&a,e)for(r=0;r<e.length;r++)a=pn(o=t.b=e[r],i,!1,t)&&a;return a},ln.prototype.Da=function(){if(ln.ab.Da.call(this),this.v){var t,e=this.v;for(t in e.a){for(var n=e.a[t],i=0;i<n.length;i++)We(n[i]);delete e.a[t],e.b--}}this.gb=null},(t=yn.prototype).W=function(){wn(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},t.Y=function(){return wn(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,e){return In(this.b,t)?this.b[t]:e},t.set=function(t,e){In(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},t.forEach=function(t,e){for(var n=this.Y(),i=0;i<n.length;i++){var r=n[i],o=this.get(r);t.call(e,o,r,this)}};var Tn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function En(t,e){var n;this.a=this.l=this.c="",this.g=null,this.h=this.f="",this.i=!1,t instanceof En?(this.i=void 0!==e?e:t.i,An(this,t.c),this.l=t.l,this.a=t.a,kn(this,t.g),this.f=t.f,Sn(this,Bn(t.b)),this.h=t.h):t&&(n=String(t).match(Tn))?(this.i=!!e,An(this,n[1]||"",!0),this.l=Rn(n[2]||""),this.a=Rn(n[3]||"",!0),kn(this,n[4]),this.f=Rn(n[5]||"",!0),Sn(this,n[6]||"",!0),this.h=Rn(n[7]||"")):(this.i=!!e,this.b=new Vn(null,this.i))}function An(t,e,n){t.c=n?Rn(e,!0):e,t.c&&(t.c=t.c.replace(/:$/,""))}function kn(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.g=e}else t.g=null}function Sn(t,e,n){var i,r;e instanceof Vn?(t.b=e,i=t.b,(r=t.i)&&!i.f&&(Fn(i),i.c=null,i.a.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(Hn(this,e),Gn(this,n,t))},i)),i.f=r):(n||(e=Dn(e,jn)),t.b=new Vn(e,t.i))}function Nn(t,e,n){t.b.set(e,n)}function _n(t,e){return t.b.get(e)}function On(t){return t instanceof En?new En(t):new En(t,void 0)}function Cn(t,e,n,i){var r=new En(null,void 0);return t&&An(r,t),e&&(r.a=e),n&&kn(r,n),i&&(r.f=i),r}function Rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Pn),t=n?t.replace(/%25([0-9a-fA-F]{2})/g,"%$1"):t):null}function Pn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}En.prototype.toString=function(){var t=[],e=this.c;e&&t.push(Dn(e,Ln,!0),":");var n=this.a;return!n&&"file"!=e||(t.push("//"),(e=this.l)&&t.push(Dn(e,Ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.g)&&t.push(":",String(n))),(n=this.f)&&(this.a&&"/"!=n.charAt(0)&&t.push("/"),t.push(Dn(n,"/"==n.charAt(0)?Mn:xn,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.h)&&t.push("#",Dn(n,Un)),t.join("")},En.prototype.resolve=function(t){var e=new En(this),n=!!t.c;n?An(e,t.c):n=!!t.l,n?e.l=t.l:n=!!t.a,n?e.a=t.a:n=null!=t.g;var i=t.f;if(n)kn(e,t.g);else if(n=!!t.f)if("/"!=i.charAt(0)&&(this.a&&!this.f?i="/"+i:-1!=(r=e.f.lastIndexOf("/"))&&(i=e.f.substr(0,r+1)+i)),".."==(r=i)||"."==r)i="";else if(it(r,"./")||it(r,"/.")){for(var i=0==r.lastIndexOf("/",0),r=r.split("/"),o=[],a=0;a<r.length;){var s=r[a++];"."==s?i&&a==r.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==r.length&&o.push("")):(o.push(s),i=!0)}i=o.join("/")}else i=r;return n?e.f=i:n=""!==t.b.toString(),n?Sn(e,Bn(t.b)):n=!!t.h,n&&(e.h=t.h),e};var Ln=/[#\/\?@]/g,xn=/[#\?:]/g,Mn=/[#\?]/g,jn=/[#\?@]/g,Un=/#/g;function Vn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Fn(n){n.a||(n.a=new yn,n.b=0,n.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i,r=t[n].indexOf("="),o=null;0<=r?(i=t[n].substring(0,r),o=t[n].substring(r+1)):i=t[n],e(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}(n.c,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}function qn(t){var e=bn(t);if(void 0===e)throw Error("Keys are undefined");var n=new Vn(null,void 0);t=gn(t);for(var i=0;i<e.length;i++){var r=e[i],o=t[i];Array.isArray(o)?Gn(n,r,o):n.add(r,o)}return n}function Hn(t,e){Fn(t),e=Wn(t,e),In(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,In((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&wn(t)))}function Kn(t,e){return Fn(t),e=Wn(t,e),In(t.a.b,e)}function Gn(t,e,n){Hn(t,e),0<n.length&&(t.c=null,t.a.set(Wn(t,e),X(n)),t.b+=n.length)}function Bn(t){var e=new Vn;return e.c=t.c,t.a&&(e.a=new yn(t.a),e.b=t.b),e}function Wn(t,e){return e=String(e),e=t.f?e.toLowerCase():e}function Xn(t){var e=[];return function t(e,n,i){if(null==n)i.push("null");else{if("object"==typeof n){if(Array.isArray(n)){var r=n;n=r.length,i.push("[");for(var o="",a=0;a<n;a++)i.push(o),t(e,r[a],i),o=",";return void i.push("]")}if(!(n instanceof String||n instanceof Number||n instanceof Boolean)){for(r in i.push("{"),o="",n)Object.prototype.hasOwnProperty.call(n,r)&&(a=n[r],"function"!=typeof a&&(i.push(o),$n(r,i),i.push(":"),t(e,a,i),o=","));return void i.push("}")}n=n.valueOf()}switch(typeof n){case"string":$n(n,i);break;case"number":i.push(isFinite(n)&&!isNaN(n)?String(n):"null");break;case"boolean":i.push(String(n));break;case"function":i.push("null");break;default:throw Error("Unknown type: "+typeof n)}}}(new Jn,t,e),e.join("")}function Jn(){}(t=Vn.prototype).add=function(t,e){Fn(this),this.c=null,t=Wn(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(n,i){Fn(this),this.a.forEach(function(t,e){V(t,function(t){n.call(i,t,e,this)},this)},this)},t.Y=function(){Fn(this);for(var t=this.a.W(),e=this.a.Y(),n=[],i=0;i<e.length;i++)for(var r=t[i],o=0;o<r.length;o++)n.push(e[i]);return n},t.W=function(t){Fn(this);var e=[];if("string"==typeof t)Kn(this,t)&&(e=W(e,this.a.get(Wn(this,t))));else{t=this.a.W();for(var n=0;n<t.length;n++)e=W(e,t[n])}return e},t.set=function(t,e){return Fn(this),this.c=null,Kn(this,t=Wn(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},t.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},t.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.Y(),n=0;n<e.length;n++)for(var i=e[n],r=encodeURIComponent(String(i)),i=this.W(i),o=0;o<i.length;o++){var a=r;""!==i[o]&&(a+="="+encodeURIComponent(String(i[o]))),t.push(a)}return this.c=t.join("&")};var Yn={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},zn=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function $n(t,e){e.push('"',t.replace(zn,function(t){var e=Yn[t];return e||(e="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),Yn[t]=e),e}),'"')}function Zn(){var t=gi();return Ht&&Zt&&11==Zt||/Edge\/\d+/.test(t)}function Qn(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function ti(t,e){e=e||l.window;var n="about:blank";t&&(n=St(Ct(t)||Pt)),e.location.href=n}function ei(t){return!!((t=(t||gi()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function ni(t){t=t||l.window;try{t.close()}catch(t){}}function ii(t,e,n){var i=Math.floor(1e9*Math.random()).toString();e=e||500,n=n||600;var r=(window.screen.availHeight-n)/2,o=(window.screen.availWidth-e)/2;for(a in e={width:e,height:n,top:0<r?r:0,left:0<o?o:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},n=gi().toLowerCase(),i&&(e.target=i,it(n,"crios/")&&(e.target="_blank")),pi(gi())==fi&&(t=t||"http://localhost",e.scrollbars=!0),n=t||"",(t=e)||(t={}),i=window,e=n instanceof kt?n:Ct(void 0!==n.href?n.href:String(n))||Pt,n=t.target||n.target,r=[],t)switch(a){case"width":case"height":case"top":case"left":r.push(a+"="+t[a]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(a+"="+(t[a]?1:0))}var a=r.join(",");if((at("iPhone")&&!at("iPod")&&!at("iPad")||at("iPad")||at("iPod"))&&i.navigator&&i.navigator.standalone&&n&&"_self"!=n?(ft(a=ae(document,"A"),"HTMLAnchorElement"),e=e instanceof kt?e:Rt(e),a.href=St(e),a.setAttribute("target",n),t.noreferrer&&a.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),a.dispatchEvent(t),a={}):t.noreferrer?(a=Mt("",i,n,a),t=St(e),a&&(Gt&&it(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),a.opener=null,t='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ut(t)+'">',t=new Lt(t=(i=bt())?i.createHTML(t):t,0,xt),i=a.document)&&(i.write((o=t)instanceof Lt&&o.constructor===Lt?o.a:(D("expected object of type SafeHtml, got '"+o+"' of type "+d(o)),"type_error:SafeHtml")),i.close())):(a=Mt(e,i,n,a))&&t.noopener&&(a.opener=null),a)try{a.focus()}catch(t){}return a}var ri=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oi=/^[^@]+@[^@]+$/;function ai(){var e=null;return new fe(function(t){"complete"==l.document.readyState?t():(e=function(){t()},tn(window,"load",e))}).o(function(t){throw en(window,"load",e),t})}function si(t){return t=t||gi(),!("file:"!==Ti()&&"ionic:"!==Ti()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ui(){var t=l.window;try{return t&&t!=t.top}catch(t){return}}function ci(){return void 0!==l.WorkerGlobalScope&&"function"==typeof l.importScripts}function hi(){return zl.default.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":zl.default.INTERNAL.hasOwnProperty("node")?"Node":ci()?"Worker":"Browser"}function li(){var t=hi();return"ReactNative"===t||"Node"===t}var fi="Firefox",di="Chrome";function pi(t){var e=t.toLowerCase();return it(e,"opera/")||it(e,"opr/")||it(e,"opios/")?"Opera":it(e,"iemobile")?"IEMobile":it(e,"msie")||it(e,"trident/")?"IE":it(e,"edge/")?"Edge":it(e,"firefox/")?fi:it(e,"silk/")?"Silk":it(e,"blackberry")?"Blackberry":it(e,"webos")?"Webos":!it(e,"safari/")||it(e,"chrome/")||it(e,"crios/")||it(e,"android")?!it(e,"chrome/")&&!it(e,"crios/")||it(e,"edge/")?it(e,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":di:"Safari"}var vi={md:"FirebaseCore-web",od:"FirebaseUI-web"};function mi(t,e){e=e||[];var n,i=[],r={};for(n in vi)r[vi[n]]=!0;for(n=0;n<e.length;n++)void 0!==r[e[n]]&&(delete r[e[n]],i.push(e[n]));return i.sort(),(e=i).length||(e=["FirebaseCore-web"]),"Browser"===(i=hi())?i=pi(r=gi()):"Worker"===i&&(i=pi(r=gi())+"-"+i),i+"/JsCore/"+t+"/"+e.join(",")}function gi(){return l.navigator&&l.navigator.userAgent||""}function bi(t,e){t=t.split("."),e=e||l;for(var n=0;n<t.length&&"object"==typeof e&&null!=e;n++)e=e[t[n]];return e=n!=t.length?void 0:e}function yi(){try{var t=l.localStorage,e=Ni();if(t)return t.setItem(e,"1"),t.removeItem(e),!Zn()||!!l.indexedDB}catch(t){return ci()&&!!l.indexedDB}return!1}function wi(){return(Ii()||"chrome-extension:"===Ti()||si())&&!li()&&yi()&&!ci()}function Ii(){return"http:"===Ti()||"https:"===Ti()}function Ti(){return l.location&&l.location.protocol||null}function Ei(t){return!ei(t=t||gi())&&pi(t)!=fi}function Ai(t){return void 0===t?null:Xn(t)}function ki(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&(n[e]=t[e]);return n}function Si(t){if(null!==t)return JSON.parse(t)}function Ni(t){return t||Math.floor(1e9*Math.random()).toString()}function _i(t){return"Safari"!=pi(t=t||gi())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function Oi(){var t=l.___jsl;if(t&&t.H)for(var e in t.H)if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=t.H[e].L.concat(),t.CP)for(var n=0;n<t.CP.length;n++)t.CP[n]=null}function Ci(t,e){if(e<t)throw Error("Short delay should be less than long delay!");this.a=t,this.c=e,t=gi(),e=hi(),this.b=ei(t)||"ReactNative"===e}function Ri(){var t=l.document;return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Di(){var e=l.document,n=null;return Ri()||!e?ye():new fe(function(t){n=function(){Ri()&&(e.removeEventListener("visibilitychange",n,!1),t())},e.addEventListener("visibilitychange",n,!1)}).o(function(t){throw e.removeEventListener("visibilitychange",n,!1),t})}function Pi(t){try{var e=new Date(parseInt(t,10));if(!isNaN(e.getTime())&&!/[^0-9]/.test(t))return e.toUTCString()}catch(t){}return null}function Li(){return bi("fireauth.oauthhelper",l)||bi("fireauth.iframe",l)}Ci.prototype.get=function(){var t=l.navigator;return!t||"boolean"!=typeof t.onLine||!Ii()&&"chrome-extension:"!==Ti()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)};var xi,Mi={};function ji(t){Mi[t]||(Mi[t]=!0,"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t))}try{var Ui={};Object.defineProperty(Ui,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(Ui,"abcd",{configurable:!0,enumerable:!0,value:2}),xi=2==Ui.abcd}catch(t){xi=!1}function Vi(t,e,n){xi?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n}):t[e]=n}function Fi(t,e){if(e)for(var n in e)e.hasOwnProperty(n)&&Vi(t,n,e[n])}function qi(t){var e={};return Fi(e,t),e}function Hi(t){var e=t;if("object"==typeof t&&null!=t)for(var n in e="length"in t?[]:{},t)Vi(e,n,Hi(t[n]));return e}function Ki(t){var e=t&&(t[Ji]?"phone":null);if(!(e&&t&&t[Xi]))throw new T("internal-error","Internal assert: invalid MultiFactorInfo object");Vi(this,"uid",t[Xi]),Vi(this,"displayName",t[Bi]||null);var n=null;Vi(this,"enrollmentTime",n=t[Wi]?new Date(t[Wi]).toUTCString():n),Vi(this,"factorId",e)}function Gi(t){try{var e=new Yi(t)}catch(t){e=null}return e}Ki.prototype.w=function(){return{uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}};var Bi="displayName",Wi="enrolledAt",Xi="mfaEnrollmentId",Ji="phoneInfo";function Yi(t){Ki.call(this,t),Vi(this,"phoneNumber",t[Ji])}function zi(t){var e={},n=t[tr],i=t[nr],r=t[ir];if(t=Gi(t[er]),!r||r!=Zi&&r!=Qi&&!n||r==Qi&&!i||r==$i&&!t)throw Error("Invalid checkActionCode response!");r==Qi?(e[or]=n||null,e[sr]=n||null,e[rr]=i):(e[or]=i||null,e[sr]=i||null,e[rr]=n||null),e[ar]=t||null,Vi(this,cr,r),Vi(this,ur,Hi(e))}w(Yi,Ki),Yi.prototype.w=function(){var t=Yi.ab.w.call(this);return t.phoneNumber=this.phoneNumber,t};var $i="REVERT_SECOND_FACTOR_ADDITION",Zi="EMAIL_SIGNIN",Qi="VERIFY_AND_CHANGE_EMAIL",tr="email",er="mfaInfo",nr="newEmail",ir="requestType",rr="email",or="fromEmail",ar="multiFactorInfo",sr="previousEmail",ur="data",cr="operation";function hr(t){var e=_n(t=On(t),lr)||null,n=_n(t,fr)||null,i=(i=_n(t,vr)||null)&&gr[i]||null;if(!e||!n||!i)throw new T("argument-error",lr+", "+fr+"and "+vr+" are required in a valid action code URL.");Fi(this,{apiKey:e,operation:i,code:n,continueUrl:_n(t,dr)||null,languageCode:_n(t,pr)||null,tenantId:_n(t,mr)||null})}var lr="apiKey",fr="oobCode",dr="continueUrl",pr="languageCode",vr="mode",mr="tenantId",gr={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:$i,signIn:Zi,verifyAndChangeEmail:Qi,verifyEmail:"VERIFY_EMAIL"};function br(t){try{return new hr(t)}catch(t){return null}}function yr(t){if(void 0===(e=t[Ar]))throw new T("missing-continue-uri");if("string"!=typeof e||"string"==typeof e&&!e.length)throw new T("invalid-continue-uri");if(this.h=e,this.b=this.a=null,this.g=!1,(i=t[wr])&&"object"==typeof i){var e=i[Nr],n=i[kr],i=i[Sr];if("string"==typeof e&&e.length){if(this.a=e,void 0!==n&&"boolean"!=typeof n)throw new T("argument-error",kr+" property must be a boolean when specified.");if(this.g=!!n,void 0!==i&&("string"!=typeof i||"string"==typeof i&&!i.length))throw new T("argument-error",Sr+" property must be a non empty string when specified.");this.b=i||null}else{if(void 0!==e)throw new T("argument-error",Nr+" property must be a non empty string when specified.");if(void 0!==n||void 0!==i)throw new T("missing-android-pkg-name")}}else if(void 0!==i)throw new T("argument-error",wr+" property must be a non null object when specified.");if(this.f=null,(e=t[Er])&&"object"==typeof e){if("string"==typeof(e=e[_r])&&e.length)this.f=e;else if(void 0!==e)throw new T("argument-error",_r+" property must be a non empty string when specified.")}else if(void 0!==e)throw new T("argument-error",Er+" property must be a non null object when specified.");if(void 0!==(e=t[Tr])&&"boolean"!=typeof e)throw new T("argument-error",Tr+" property must be a boolean when specified.");if(this.c=!!e,void 0!==(t=t[Ir])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new T("argument-error",Ir+" property must be a non empty string when specified.");this.i=t||null}var wr="android",Ir="dynamicLinkDomain",Tr="handleCodeInApp",Er="iOS",Ar="url",kr="installApp",Sr="minimumVersion",Nr="packageName",_r="bundleId";function Or(t){var e,n={};for(e in n.continueUrl=t.h,n.canHandleCodeInApp=t.c,(n.androidPackageName=t.a)&&(n.androidMinimumVersion=t.b,n.androidInstallApp=t.g),n.iOSBundleId=t.f,n.dynamicLinkDomain=t.i,n)null===n[e]&&delete n[e];return n}var Cr=null;function Rr(t){var e=[];return function(i,t){function e(t){for(;r<i.length;){var e=i.charAt(r++),n=Cr[e];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(e))throw Error("Unknown base64 encoding at char: "+e)}return t}!function(){if(!Cr){Cr={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;n<5;n++)for(var i=t.concat(e[n].split("")),r=0;r<i.length;r++){var o=i[r];void 0===Cr[o]&&(Cr[o]=r)}}}();for(var r=0;;){var n=e(-1),o=e(0),a=e(64),s=e(64);if(64===s&&-1===n)break;t(n<<2|o>>4),64!=a&&(t(o<<4&240|a>>2),64!=s&&t(a<<6&192|s))}}(t,function(t){e.push(t)}),e}function Dr(t){var e=Lr(t);if(!(e&&e.sub&&e.iss&&e.aud&&e.exp))throw Error("Invalid JWT");this.h=t,this.a=e.exp,this.i=e.sub,t=Date.now()/1e3,this.g=e.iat||(t>this.a?this.a:t),this.b=e.provider_id||e.firebase&&e.firebase.sign_in_provider||null,this.f=e.firebase&&e.firebase.tenant||null,this.c=!!e.is_anonymous||"anonymous"==this.b}function Pr(t){try{return new Dr(t)}catch(t){return null}}function Lr(t){if(!t)return null;if(3!=(t=t.split(".")).length)return null;for(var e=(4-(t=t[1]).length%4)%4,n=0;n<e;n++)t+=".";try{var i=Rr(t);for(t=[],n=e=0;e<i.length;){var r,o,a,s=i[e++];s<128?t[n++]=String.fromCharCode(s):191<s&&s<224?(r=i[e++],t[n++]=String.fromCharCode((31&s)<<6|63&r)):239<s&&s<365?(a=((7&s)<<18|(63&(r=i[e++]))<<12|(63&(o=i[e++]))<<6|63&i[e++])-65536,t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))):(r=i[e++],o=i[e++],t[n++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o))}return JSON.parse(t.join(""))}catch(t){}return null}Dr.prototype.T=function(){return this.f},Dr.prototype.l=function(){return this.c},Dr.prototype.toString=function(){return this.h};var xr="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Mr=["client_id","response_type","scope","redirect_uri","state"],jr={nd:{Ja:"locale",ua:700,ta:600,fa:"facebook.com",Xa:Mr},pd:{Ja:null,ua:500,ta:750,fa:"github.com",Xa:Mr},qd:{Ja:"hl",ua:515,ta:680,fa:"google.com",Xa:Mr},wd:{Ja:"lang",ua:485,ta:705,fa:"twitter.com",Xa:xr},kd:{Ja:"locale",ua:640,ta:600,fa:"apple.com",Xa:[]}};function Ur(t){for(var e in jr)if(jr[e].fa==t)return jr[e];return null}function Vr(t){var e={};e["facebook.com"]=Gr,e["google.com"]=Wr,e["github.com"]=Br,e["twitter.com"]=Xr;var n=t&&t[qr];try{if(n)return new(e[n]||Kr)(t);if(void 0!==t[Fr])return new Hr(t)}catch(t){}return null}var Fr="idToken",qr="providerId";function Hr(t){var e,n=t[qr];if(n||!t[Fr]||(e=Pr(t[Fr]))&&e.b&&(n=e.b),!n)throw Error("Invalid additional user info!");"anonymous"!=n&&"custom"!=n||(n=null),e=!1,void 0!==t.isNewUser?e=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(e=!0),Vi(this,"providerId",n),Vi(this,"isNewUser",e)}function Kr(t){Hr.call(this,t),Vi(this,"profile",Hi((t=Si(t.rawUserInfo||"{}"))||{}))}function Gr(t){if(Kr.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Br(t){if(Kr.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!");Vi(this,"username",this.profile&&this.profile.login||null)}function Wr(t){if(Kr.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function Xr(t){if(Kr.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!");Vi(this,"username",t.screenName||null)}function Jr(t){var e=_n(i=On(t),"link"),n=_n(On(e),"link"),i=_n(i,"deep_link_id");return _n(On(i),"link")||i||n||e||t}function Yr(t,e){if(!t&&!e)throw new T("internal-error","Internal assert: no raw session string available");if(t&&e)throw new T("internal-error","Internal assert: unable to determine the session type");this.a=t||null,this.b=e||null,this.type=this.a?zr:$r}w(Kr,Hr),w(Gr,Kr),w(Br,Kr),w(Wr,Kr),w(Xr,Kr);var zr="enroll",$r="signin";function Zr(){}function Qr(t,n){return t.then(function(t){if(t[Ha]){var e=Pr(t[Ha]);if(!e||n!=e.i)throw new T("user-mismatch");return t}throw new T("user-mismatch")}).o(function(t){throw t&&t.code&&t.code==k+"user-not-found"?new T("user-mismatch"):t})}function to(t,e){if(!e)throw new T("internal-error","failed to construct a credential");this.a=e,Vi(this,"providerId",t),Vi(this,"signInMethod",t)}function eo(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function no(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new to(t.providerId,t.pendingToken)}catch(t){}return null}function io(t,e,n){if(this.a=null,e.idToken||e.accessToken)e.idToken&&Vi(this,"idToken",e.idToken),e.accessToken&&Vi(this,"accessToken",e.accessToken),e.nonce&&!e.pendingToken&&Vi(this,"nonce",e.nonce),e.pendingToken&&(this.a=e.pendingToken);else{if(!e.oauthToken||!e.oauthTokenSecret)throw new T("internal-error","failed to construct a credential");Vi(this,"accessToken",e.oauthToken),Vi(this,"secret",e.oauthTokenSecret)}Vi(this,"providerId",t),Vi(this,"signInMethod",n)}function ro(t){var e={};return t.idToken&&(e.id_token=t.idToken),t.accessToken&&(e.access_token=t.accessToken),t.secret&&(e.oauth_token_secret=t.secret),e.providerId=t.providerId,t.nonce&&!t.a&&(e.nonce=t.nonce),e={postBody:qn(e).toString(),requestUri:"http://localhost"},t.a&&(delete e.postBody,e.pendingToken=t.a),e}function oo(t){if(t&&t.providerId&&t.signInMethod){var e={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken};try{return new io(t.providerId,e,t.signInMethod)}catch(t){}}return null}function ao(t,e){this.Qc=e||[],Fi(this,{providerId:t,isOAuthProvider:!0}),this.Ib={},this.pb=(Ur(t)||{}).Ja||null,this.ob=null}function so(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new T("argument-error",'SAML provider IDs must be prefixed with "saml."');ao.call(this,t,[])}function uo(t){ao.call(this,t,Mr),this.a=[]}function co(){uo.call(this,"facebook.com")}function ho(t){if(!t)throw new T("argument-error","credential failed: expected 1 argument (the OAuth access token).");var e=t;return m(t)&&(e=t.accessToken),(new co).credential({accessToken:e})}function lo(){uo.call(this,"github.com")}function fo(t){if(!t)throw new T("argument-error","credential failed: expected 1 argument (the OAuth access token).");var e=t;return m(t)&&(e=t.accessToken),(new lo).credential({accessToken:e})}function po(){uo.call(this,"google.com"),this.Ca("profile")}function vo(t,e){var n=t;return m(t)&&(n=t.idToken,e=t.accessToken),(new po).credential({idToken:n,accessToken:e})}function mo(){ao.call(this,"twitter.com",xr)}function go(t,e){var n=t;if(!(n=!m(n)?{oauthToken:t,oauthTokenSecret:e}:n).oauthToken||!n.oauthTokenSecret)throw new T("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new io("twitter.com",n,"twitter.com")}function bo(t,e,n){this.a=t,this.f=e,Vi(this,"providerId","password"),Vi(this,"signInMethod",n===wo.EMAIL_LINK_SIGN_IN_METHOD?wo.EMAIL_LINK_SIGN_IN_METHOD:wo.EMAIL_PASSWORD_SIGN_IN_METHOD)}function yo(t){return t&&t.email&&t.password?new bo(t.email,t.password,t.signInMethod):null}function wo(){Fi(this,{providerId:"password",isOAuthProvider:!1})}function Io(t,e){if(!(e=To(e)))throw new T("argument-error","Invalid email link!");return new bo(t,e.code,wo.EMAIL_LINK_SIGN_IN_METHOD)}function To(t){return(t=br(t=Jr(t)))&&t.operation===Zi?t:null}function Eo(t){if(!(t.eb&&t.cb||t.La&&t.ea))throw new T("internal-error");this.a=t,Vi(this,"providerId","phone"),this.fa="phone",Vi(this,"signInMethod","phone")}function Ao(e){if(e&&"phone"===e.providerId&&(e.verificationId&&e.verificationCode||e.temporaryProof&&e.phoneNumber)){var n={};return V(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(t){e[t]&&(n[t]=e[t])}),new Eo(n)}return null}function ko(t){return t.a.La&&t.a.ea?{temporaryProof:t.a.La,phoneNumber:t.a.ea}:{sessionInfo:t.a.eb,code:t.a.cb}}function So(t){try{this.a=t||zl.default.auth()}catch(t){throw new T("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}Fi(this,{providerId:"phone",isOAuthProvider:!1})}function No(t,e){if(!t)throw new T("missing-verification-id");if(!e)throw new T("missing-verification-code");return new Eo({eb:t,cb:e})}function _o(t){if(t.temporaryProof&&t.phoneNumber)return new Eo({La:t.temporaryProof,ea:t.phoneNumber});var e=t&&t.providerId;if(!e||"password"===e)return null;var n=t&&t.oauthAccessToken,i=t&&t.oauthTokenSecret,r=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken;try{switch(e){case"google.com":return vo(o,n);case"facebook.com":return ho(n);case"github.com":return fo(n);case"twitter.com":return go(n,i);default:return n||i||o||a?a?0==e.indexOf("saml.")?new to(e,a):new io(e,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},e):new uo(e).credential({idToken:o,accessToken:n,rawNonce:r}):null}}catch(t){return null}}function Oo(t){if(!t.isOAuthProvider)throw new T("invalid-oauth-provider")}function Co(t,e,n,i,r,o,a){if(this.c=t,this.b=e||null,this.g=n||null,this.f=i||null,this.i=o||null,this.h=a||null,this.a=r||null,!this.g&&!this.a)throw new T("invalid-auth-event");if(this.g&&this.a)throw new T("invalid-auth-event");if(this.g&&!this.f)throw new T("invalid-auth-event")}function Ro(t){return(t=t||{}).type?new Co(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&E(t.error),t.postBody,t.tenantId):null}function Do(){this.b=null,this.a=[]}Yr.prototype.Ha=function(){return this.a?ye(this.a):ye(this.b)},Yr.prototype.w=function(){return this.type==zr?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}},Zr.prototype.ka=function(){},Zr.prototype.b=function(){},Zr.prototype.c=function(){},Zr.prototype.w=function(){},to.prototype.ka=function(t){return hs(t,eo(this))},to.prototype.b=function(t,e){var n=eo(this);return n.idToken=e,ls(t,n)},to.prototype.c=function(t,e){return Qr(fs(t,eo(this)),e)},to.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},io.prototype.ka=function(t){return hs(t,ro(this))},io.prototype.b=function(t,e){var n=ro(this);return n.idToken=e,ls(t,n)},io.prototype.c=function(t,e){return Qr(fs(t,ro(this)),e)},io.prototype.w=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod};return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},ao.prototype.Ka=function(t){return this.Ib=ct(t),this},w(so,ao),w(uo,ao),uo.prototype.Ca=function(t){return K(this.a,t)||this.a.push(t),this},uo.prototype.Qb=function(){return X(this.a)},uo.prototype.credential=function(t,e){e=m(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:e||null};if(!e.idToken&&!e.accessToken)throw new T("argument-error","credential failed: must provide the ID token and/or the access token.");return new io(this.providerId,e,this.providerId)},w(co,uo),Vi(co,"PROVIDER_ID","facebook.com"),Vi(co,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),w(lo,uo),Vi(lo,"PROVIDER_ID","github.com"),Vi(lo,"GITHUB_SIGN_IN_METHOD","github.com"),w(po,uo),Vi(po,"PROVIDER_ID","google.com"),Vi(po,"GOOGLE_SIGN_IN_METHOD","google.com"),w(mo,ao),Vi(mo,"PROVIDER_ID","twitter.com"),Vi(mo,"TWITTER_SIGN_IN_METHOD","twitter.com"),bo.prototype.ka=function(t){return this.signInMethod==wo.EMAIL_LINK_SIGN_IN_METHOD?Xs(t,ws,{email:this.a,oobCode:this.f}):Xs(t,Hs,{email:this.a,password:this.f})},bo.prototype.b=function(t,e){return this.signInMethod==wo.EMAIL_LINK_SIGN_IN_METHOD?Xs(t,Is,{idToken:e,email:this.a,oobCode:this.f}):Xs(t,Ls,{idToken:e,email:this.a,password:this.f})},bo.prototype.c=function(t,e){return Qr(this.ka(t),e)},bo.prototype.w=function(){return{email:this.a,password:this.f,signInMethod:this.signInMethod}},Fi(wo,{PROVIDER_ID:"password"}),Fi(wo,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),Fi(wo,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),Eo.prototype.ka=function(t){return t.fb(ko(this))},Eo.prototype.b=function(t,e){var n=ko(this);return n.idToken=e,Xs(t,Gs,n)},Eo.prototype.c=function(t,e){var n=ko(this);return n.operation="REAUTH",Qr(t=Xs(t,Bs,n),e)},Eo.prototype.w=function(){var t={providerId:"phone"};return this.a.eb&&(t.verificationId=this.a.eb),this.a.cb&&(t.verificationCode=this.a.cb),this.a.La&&(t.temporaryProof=this.a.La),this.a.ea&&(t.phoneNumber=this.a.ea),t},So.prototype.fb=function(i,r){var o=this.a.a;return ye(r.verify()).then(function(n){if("string"!=typeof n)throw new T("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");if("recaptcha"!==r.type)throw new T("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');var t=m(i)?i.session:null,e=m(i)?i.phoneNumber:i,t=t&&t.type==zr?t.Ha().then(function(t){return Xs(o,Ms,{idToken:t,phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:n}}).then(function(t){return t.phoneSessionInfo.sessionInfo})}):t&&t.type==$r?t.Ha().then(function(t){return e=o,t={mfaPendingCredential:t,mfaEnrollmentId:i.multiFactorHint&&i.multiFactorHint.uid||i.multiFactorUid,phoneSignInInfo:{recaptchaToken:n}},Xs(e,js,t).then(function(t){return t.phoneResponseInfo.sessionInfo});var e}):Xs(o,Ds,{phoneNumber:e,recaptchaToken:n});return t.then(function(t){return"function"==typeof r.reset&&r.reset(),t},function(t){throw"function"==typeof r.reset&&r.reset(),t})})},Fi(So,{PROVIDER_ID:"phone"}),Fi(So,{PHONE_SIGN_IN_METHOD:"phone"}),Co.prototype.getUid=function(){var t=[];return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.h&&t.push(this.h),t.join("-")},Co.prototype.T=function(){return this.h},Co.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.w()}};var Po,Lo=null;function xo(t){var e="unauthorized-domain",n=void 0,i=On(t);t=i.a,"chrome-extension"==(i=i.c)?n=jt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==i||"https"==i?n=jt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):e="operation-not-supported-in-this-environment",T.call(this,e,n)}function Mo(t,e,n){T.call(this,t,n),(t=e||{}).Jb&&Vi(this,"email",t.Jb),t.ea&&Vi(this,"phoneNumber",t.ea),t.credential&&Vi(this,"credential",t.credential),t.Zb&&Vi(this,"tenantId",t.Zb)}function jo(t){if(t.code){var e=t.code||"";0==e.indexOf(k)&&(e=e.substring(k.length));var n={credential:_o(t),Zb:t.tenantId};if(t.email)n.Jb=t.email;else if(t.phoneNumber)n.ea=t.phoneNumber;else if(!n.credential)return new T(e,t.message||void 0);return new Mo(e,n,t.message)}return null}function Uo(){}function Vo(t){return t.c||(t.c=t.b())}function Fo(){}function qo(t){if(t.f||"undefined"!=typeof XMLHttpRequest||"undefined"==typeof ActiveXObject)return t.f;for(var e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],n=0;n<e.length;n++){var i=e[n];try{return new ActiveXObject(i),t.f=i}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}function Ho(){}function Ko(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=b(this.qc,this),this.a.onerror=b(this.Sb,this),this.a.onprogress=b(this.rc,this),this.a.ontimeout=b(this.vc,this)}function Go(t,e){t.readyState=e,t.onreadystatechange&&t.onreadystatechange()}function Bo(t,e,n){this.reset(t,e,n,void 0,void 0)}function Wo(t){this.f=t,this.b=this.c=this.a=null}function Xo(t,e){this.name=t,this.value=e}w(xo,T),w(Mo,T),Mo.prototype.w=function(){var t={code:this.code,message:this.message};this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber),this.tenantId&&(t.tenantId=this.tenantId);var e=this.credential&&this.credential.w();return e&&lt(t,e),t},Mo.prototype.toJSON=function(){return this.w()},Uo.prototype.c=null,w(Fo,Uo),Fo.prototype.a=function(){var t=qo(this);return t?new ActiveXObject(t):new XMLHttpRequest},Fo.prototype.b=function(){var t={};return qo(this)&&(t[0]=!0,t[1]=!0),t},Po=new Fo,w(Ho,Uo),Ho.prototype.a=function(){var t=new XMLHttpRequest;if("withCredentials"in t)return t;if("undefined"!=typeof XDomainRequest)return new Ko;throw Error("Unsupported browser")},Ho.prototype.b=function(){return{}},(t=Ko.prototype).open=function(t,e,n){if(null!=n&&!n)throw Error("Only async requests are supported.");this.a.open(t,e)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported");this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.qc=function(){this.status=200,this.response=this.responseText=this.a.responseText,Go(this,4)},t.Sb=function(){this.status=500,this.response=this.responseText="",Go(this,4)},t.vc=function(){this.Sb()},t.rc=function(){this.status=200,Go(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},Bo.prototype.a=null,Bo.prototype.reset=function(t,e,n,i,r){delete this.a},Xo.prototype.toString=function(){return this.name};var Jo=new Xo("SEVERE",1e3),Yo=new Xo("WARNING",900),zo=new Xo("CONFIG",700),$o=new Xo("FINE",500);Wo.prototype.log=function(t,e,n){if(t.value>=function t(e){return e.c||(e.a?t(e.a):(D("Root logger has no level set."),null))}(this).value)for(v(e)&&(e=e()),t=new Bo(t,String(e),this.f),n&&(t.a=n),n=this;n;)n=n.a};var Zo,Qo={},ta=null;function ea(t){var e,n,i;return ta||(ta=new Wo(""),(Qo[""]=ta).c=zo),(e=Qo[t])||(e=new Wo(t),i=t.lastIndexOf("."),n=t.substr(i+1),(i=ea(t.substr(0,i))).b||(i.b={}),(i.b[n]=e).a=i,Qo[t]=e),e}function na(t,e){t&&t.log($o,e,void 0)}function ia(t){this.f=t}function ra(t){ln.call(this),this.u=t,this.h=void 0,this.readyState=oa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.l=new Headers,this.b=null,this.s="GET",this.f="",this.a=!1,this.i=ea("goog.net.FetchXmlHttp"),this.m=this.c=this.g=null}w(ia,Uo),ia.prototype.a=function(){return new ra(this.f)},ia.prototype.b=(Zo={},function(){return Zo}),w(ra,ln);var oa=0;function aa(t){t.c.read().then(t.pc.bind(t)).catch(t.Ua.bind(t))}function sa(t){t.readyState=4,t.g=null,t.c=null,t.m=null,ua(t)}function ua(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ca(t){ln.call(this),this.headers=new yn,this.D=t||null,this.c=!1,this.C=this.a=null,this.h=this.R=this.l="",this.f=this.O=this.i=this.J=!1,this.g=0,this.s=null,this.m=ha,this.u=this.S=!1}(t=ra.prototype).open=function(t,e){if(this.readyState!=oa)throw this.abort(),Error("Error reopening a connection");this.s=t,this.f=e,this.readyState=1,ua(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var e={headers:this.l,method:this.s,credentials:this.h,cache:void 0};t&&(e.body=t),this.u.fetch(new Request(this.f,e)).then(this.uc.bind(this),this.Ua.bind(this))},t.abort=function(){this.response=this.responseText="",this.l=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,sa(this)),this.readyState=oa},t.uc=function(t){this.a&&(this.g=t,this.b||(this.status=this.g.status,this.statusText=this.g.statusText,this.b=t.headers,this.readyState=2,ua(this)),this.a&&(this.readyState=3,ua(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.sc.bind(this),this.Ua.bind(this)):void 0!==l.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.m=new TextDecoder,aa(this)):t.text().then(this.tc.bind(this),this.Ua.bind(this)))))},t.pc=function(t){var e;this.a&&((e=this.m.decode(t.value||new Uint8Array(0),{stream:!t.done}))&&(this.response=this.responseText+=e),(t.done?sa:ua)(this),3==this.readyState&&aa(this))},t.tc=function(t){this.a&&(this.response=this.responseText=t,sa(this))},t.sc=function(t){this.a&&(this.response=t,sa(this))},t.Ua=function(t){var e=this.i;e&&e.log(Yo,"Failed to fetch url "+this.f,t instanceof Error?t:Error(t)),this.a&&sa(this)},t.setRequestHeader=function(t,e){this.l.append(t,e)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.i)&&t.log(Yo,"Attempting to get response header but no headers have been received for url: "+this.f,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.i;return t&&t.log(Yo,"Attempting to get all response headers but no headers have been received for url: "+this.f,void 0),""}for(var t=[],e=this.b.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return"include"===this.h},set:function(t){this.h=t?"include":"same-origin"}}),w(ca,ln);var ha="";ca.prototype.b=ea("goog.net.XhrIo");var la=/^https?$/i,fa=["POST","PUT"];function da(e,t,n,i,r){if(e.a)throw Error("[goog.net.XhrIo] Object is active with another request="+e.l+"; newUri="+t);n=n?n.toUpperCase():"GET",e.l=t,e.h="",e.R=n,e.J=!1,e.c=!0,e.a=(e.D||Po).a(),e.C=e.D?Vo(e.D):Vo(Po),e.a.onreadystatechange=b(e.Vb,e);try{na(e.b,Ta(e,"Opening Xhr")),e.O=!0,e.a.open(n,String(t),!0),e.O=!1}catch(t){return na(e.b,Ta(e,"Error opening Xhr: "+t.message)),void va(e,t)}t=i||"";var o,a=new yn(e.headers);r&&function(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"==typeof t)V(t,e,void 0);else for(var n=bn(t),i=gn(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}(r,function(t,e){a.set(e,t)}),r=function(t){t:{for(var e=pa,n=t.length,i="string"==typeof t?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return e<0?null:"string"==typeof t?t.charAt(e):t[e]}(a.Y()),i=l.FormData&&t instanceof l.FormData,!K(fa,n)||r||i||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),a.forEach(function(t,e){this.a.setRequestHeader(e,t)},e),e.m&&(e.a.responseType=e.m),"withCredentials"in e.a&&e.a.withCredentials!==e.S&&(e.a.withCredentials=e.S);try{ya(e),0<e.g&&(e.u=(o=e.a,Ht&&$t(9)&&"number"==typeof o.timeout&&void 0!==o.ontimeout),na(e.b,Ta(e,"Will abort after "+e.g+"ms if incomplete, xhr2 "+e.u)),e.u?(e.a.timeout=e.g,e.a.ontimeout=b(e.Ma,e)):e.s=vn(e.Ma,e.g,e)),na(e.b,Ta(e,"Sending request")),e.i=!0,e.a.send(t),e.i=!1}catch(t){na(e.b,Ta(e,"Send error: "+t.message)),va(e,t)}}function pa(t){return"content-type"==t.toLowerCase()}function va(t,e){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=e,ma(t),ba(t)}function ma(t){t.J||(t.J=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function ga(e){if(e.c&&void 0!==h)if(e.C[1]&&4==wa(e)&&2==Ia(e))na(e.b,Ta(e,"Local request error detected and ignored"));else if(e.i&&4==wa(e))vn(e.Vb,0,e);else if(e.dispatchEvent("readystatechange"),4==wa(e)){na(e.b,Ta(e,"Request complete")),e.c=!1;try{var t,n,i,r,o=Ia(e);t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}if((t=a)||((n=0===o)&&(!(r=String(e.l).match(Tn)[1]||null)&&l.self&&l.self.location&&(r=(i=l.self.location.protocol).substr(0,i.length-1)),n=!la.test(r?r.toLowerCase():"")),t=n),t)e.dispatchEvent("complete"),e.dispatchEvent("success");else{try{var s=2<wa(e)?e.a.statusText:""}catch(t){na(e.b,"Can not get status: "+t.message),s=""}e.h=s+" ["+Ia(e)+"]",ma(e)}}finally{ba(e)}}}function ba(e,t){if(e.a){ya(e);var n=e.a,i=e.C[0]?a:null;e.a=null,e.C=null,t||e.dispatchEvent("ready");try{n.onreadystatechange=i}catch(t){(e=e.b)&&e.log(Jo,"Problem encountered resetting onreadystatechange: "+t.message,void 0)}}}function ya(t){t.a&&t.u&&(t.a.ontimeout=null),t.s&&(l.clearTimeout(t.s),t.s=null)}function wa(t){return t.a?t.a.readyState:0}function Ia(t){try{return 2<wa(t)?t.a.status:-1}catch(t){return-1}}function Ta(t,e){return e+" ["+t.R+" "+t.l+" "+Ia(t)+"]"}function Ea(t){var e=La;this.g=[],this.u=e,this.s=t||null,this.f=this.a=!1,this.c=void 0,this.v=this.C=this.i=!1,this.h=0,this.b=null,this.l=0}function Aa(t,e,n){t.a=!0,t.c=n,t.f=!e,_a(t)}function ka(t){if(t.a){if(!t.v)throw new Oa;t.v=!1}}function Sa(t,e,n,i){t.g.push([e,n,i]),t.a&&_a(t)}function Na(t){return H(t.g,function(t){return v(t[1])})}function _a(e){var n;e.h&&e.a&&Na(e)&&(i=e.h,(n=Da[i])&&(l.clearTimeout(n.a),delete Da[i]),e.h=0),e.b&&(e.b.l--,delete e.b);for(var i=e.c,t=n=!1;e.g.length&&!e.i;){var r=(a=e.g.shift())[0],o=a[1],a=a[2];if(r=e.f?o:r)try{var s=r.call(a||e.s,i);void 0!==s&&(e.f=e.f&&(s==i||s instanceof Error),e.c=i=s),(O(i)||"function"==typeof l.Promise&&i instanceof l.Promise)&&(t=!0,e.i=!0)}catch(t){i=t,e.f=!0,Na(e)||(n=!0)}}e.c=i,t&&(s=b(e.m,e,!0),t=b(e.m,e,!1),i instanceof Ea?(Sa(i,s,t),i.C=!0):i.then(s,t)),n&&(i=new Ra(i),Da[i.a]=i,e.h=i.a)}function Oa(){C.call(this)}function Ca(){C.call(this)}function Ra(t){this.a=l.setTimeout(b(this.c,this),0),this.b=t}(t=ca.prototype).Ma=function(){void 0!==h&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",na(this.b,Ta(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(na(this.b,Ta(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ba(this))},t.Da=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ba(this,!0)),ca.ab.Da.call(this)},t.Vb=function(){this.xa||(this.O||this.i||this.f?ga(this):this.Jc())},t.Jc=function(){ga(this)},t.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case ha:case"text":return this.a.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b;return t&&t.log(Jo,"Response type "+this.m+" is not supported on this browser",void 0),null}catch(t){return na(this.b,"Can not get response: "+t.message),null}},Ea.prototype.cancel=function(t){var e;this.a?this.c instanceof Ea&&this.c.cancel():(this.b&&(e=this.b,delete this.b,t?e.cancel(t):(e.l--,e.l<=0&&e.cancel())),this.u?this.u.call(this.s,this):this.v=!0,this.a||(t=new Ca,ka(this),Aa(this,!1,t)))},Ea.prototype.m=function(t,e){this.i=!1,Aa(this,t,e)},Ea.prototype.then=function(t,e,n){var i,r,o=new fe(function(t,e){i=t,r=e});return Sa(this,i,function(t){t instanceof Ca?o.cancel():r(t)}),o.then(t,e,n)},Ea.prototype.$goog_Thenable=!0,w(Oa,C),Oa.prototype.message="Deferred has already fired",Oa.prototype.name="AlreadyCalledError",w(Ca,C),Ca.prototype.message="Deferred was canceled",Ca.prototype.name="CanceledError",Ra.prototype.c=function(){throw delete Da[this.a],this.b};var Da={};function Pa(t){var e=document,n=wt(t).toString(),i=ae(document,"SCRIPT"),r={Wb:i,Ma:void 0},o=new Ea(r),a=window.setTimeout(function(){xa(i,!0);var t=new Ua(ja,"Timeout reached for loading script "+n);ka(o),Aa(o,!1,t)},5e3);return r.Ma=a,i.onload=i.onreadystatechange=function(){i.readyState&&"loaded"!=i.readyState&&"complete"!=i.readyState||(xa(i,!1,a),ka(o),Aa(o,!0,null))},i.onerror=function(){xa(i,!0,a);var t=new Ua(Ma,"Error while loading script "+n);ka(o),Aa(o,!1,t)},lt(r={},{type:"text/javascript",charset:"UTF-8"}),ee(i,r),r=t,ft(t=i,"HTMLScriptElement"),t.src=wt(r),(r=(r=t.ownerDocument&&t.ownerDocument.defaultView)&&r!=l?f(r.document):s=null===s?f(l.document):s)&&t.setAttribute("nonce",r),((e=((r=e)||document).getElementsByTagName("HEAD"))&&0!=e.length?e[0]:r.documentElement).appendChild(i),o}function La(){var t;this&&this.Wb&&((t=this.Wb)&&"SCRIPT"==t.tagName&&xa(t,!0,this.Ma))}function xa(t,e,n){null!=n&&l.clearTimeout(n),t.onload=a,t.onerror=a,t.onreadystatechange=a,e&&window.setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},0)}var Ma=0,ja=1;function Ua(t,e){var n="Jsloader error (code #"+t+")";e&&(n+=": "+e),C.call(this,n),this.code=t}function Va(t){this.f=t}function Fa(t,e,n){if(this.c=t,t=e||{},this.l=t.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.m=t.secureTokenTimeout||Ka,this.g=ct(t.secureTokenHeaders||Ga),this.h=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.i=t.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/",this.v=t.firebaseTimeout||Ba,this.a=ct(t.firebaseHeaders||Wa),n&&(this.a["X-Client-Version"]=n,this.g["X-Client-Version"]=n),n="Node"==hi(),!(n=l.XMLHttpRequest||n&&zl.default.INTERNAL.node&&zl.default.INTERNAL.node.XMLHttpRequest)&&!ci())throw new T("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0,ci()?this.f=new ia(self):li()?this.f=new Va(n):this.f=new Ho,this.b=null}w(Ua,C),w(Va,Uo),Va.prototype.a=function(){return new this.f},Va.prototype.b=function(){return{}};var qa,Ha="idToken",Ka=new Ci(3e4,6e4),Ga={"Content-Type":"application/x-www-form-urlencoded"},Ba=new Ci(3e4,6e4),Wa={"Content-Type":"application/json"};function Xa(t,e){e?t.a["X-Firebase-Locale"]=e:delete t.a["X-Firebase-Locale"]}function Ja(t,e){e&&(t.l=Ya("https://securetoken.googleapis.com/v1/token",e),t.h=Ya("https://www.googleapis.com/identitytoolkit/v3/relyingparty/",e),t.i=Ya("https://identitytoolkit.googleapis.com/v2/",e))}function Ya(t,e){return t=On(t),e=On(e.url),t.f=t.a+t.f,An(t,e.c),t.a=e.a,kn(t,e.g),t.toString()}function za(t,e){e?(t.a["X-Client-Version"]=e,t.g["X-Client-Version"]=e):(delete t.a["X-Client-Version"],delete t.g["X-Client-Version"])}function $a(t,e,n,i,r,o,a){var s;(t=((s=pi(s=gi())==di&&(s=s.match(/\sChrome\/(\d+)/i))&&2==s.length?parseInt(s[1],10):null)&&s<30||Ht&&Zt&&!(9<Zt))&&!ci()?(qa=qa||new fe(function(t,e){var n,i;n=t,i=e,((window.gapi||{}).client||{}).request?n():(l[Qa]=function(){((window.gapi||{}).client||{}).request?n():i(Error("CORS_UNSUPPORTED"))},function(t,e){Sa(t,null,e,void 0)}(Pa(It(Za,{onload:Qa})),function(){i(Error("CORS_UNSUPPORTED"))}))}),b(t.s,t)):b(t.u,t))(e,n,i,r,o,a)}Fa.prototype.T=function(){return this.b},Fa.prototype.u=function(t,n,e,i,r,o){if(ci()&&(void 0===l.fetch||void 0===l.Headers||void 0===l.Request))throw new T("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var a,s=new ca(this.f);o&&(s.g=Math.max(0,o),a=setTimeout(function(){s.dispatchEvent("timeout")},o)),fn(s,"complete",function(){a&&clearTimeout(a);var e=null;try{e=JSON.parse(function(e){try{return e.a?e.a.responseText:""}catch(t){return na(e.b,"Can not get responseText: "+t.message),""}}(this))||null}catch(t){e=null}n&&n(e)}),dn(s,"ready",function(){a&&clearTimeout(a),xe(this)}),dn(s,"timeout",function(){a&&clearTimeout(a),xe(this),n&&n(null)}),da(s,t,e,i,r)};var Za=new dt(gt,"https://apis.google.com/js/client.js?onload=%{onload}"),Qa="__fcb"+Math.floor(1e6*Math.random()).toString();function ts(t,e,n,i,r,o,a){var s=On(e+n);Nn(s,"key",t.c),a&&Nn(s,"cb",Date.now().toString());var u="GET"==i;if(u)for(var c in r)r.hasOwnProperty(c)&&Nn(s,c,r[c]);return new fe(function(e,n){$a(t,s.toString(),function(t){t?t.error?n(Ys(t,o||{})):e(t):n(new T("network-request-failed"))},i,u?void 0:Xn(ki(r)),t.a,t.v.get())})}function es(t){if("string"!=typeof(t=t.email)||!oi.test(t))throw new T("invalid-email")}function ns(t){"email"in t&&es(t)}function is(t){if(!t[Ha]){if(t.mfaPendingCredential)throw new T("multi-factor-auth-required",null,ct(t));throw new T("internal-error")}}function rs(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new T("internal-error")}else{if(!t.sessionInfo)throw new T("missing-verification-id");if(!t.code)throw new T("missing-verification-code")}}Fa.prototype.s=function(t,n,i,r,o){var a=this;qa.then(function(){window.gapi.client.setApiKey(a.c);var e=window.gapi.auth.getToken();window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:i,body:r,headers:o,authType:"none",callback:function(t){window.gapi.auth.setToken(e),n&&n(t)}})}).o(function(t){n&&n({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})})},Fa.prototype.zb=function(){return Xs(this,xs,{})},Fa.prototype.Bb=function(t,e){return Xs(this,Ps,{idToken:t,email:e})},Fa.prototype.Cb=function(t,e){return Xs(this,Ls,{idToken:t,password:e})};var os={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};function as(t){if(!t.phoneVerificationInfo)throw new T("internal-error");if(!t.phoneVerificationInfo.sessionInfo)throw new T("missing-verification-id");if(!t.phoneVerificationInfo.code)throw new T("missing-verification-code")}function ss(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new T("internal-error")}function us(t,e){return e.oauthIdToken&&e.providerId&&0==e.providerId.indexOf("oidc.")&&!e.pendingToken&&(t.sessionId?e.nonce=t.sessionId:t.postBody&&(Kn(t=new Vn(t.postBody),"nonce")&&(e.nonce=t.get("nonce")))),e}function cs(t){var e=null;if(t.needConfirmation?(t.code="account-exists-with-different-credential",e=jo(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",e=jo(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",e=jo(t)):t.errorMessage&&(e=Js(t.errorMessage)),e)throw e;is(t)}function hs(t,e){return e.returnIdpCredential=!0,Xs(t,Us,e)}function ls(t,e){return e.returnIdpCredential=!0,Xs(t,Fs,e)}function fs(t,e){return e.returnIdpCredential=!0,e.autoCreate=!1,Xs(t,Vs,e)}function ds(t){if(!t.oobCode)throw new T("invalid-action-code")}(t=Fa.prototype).Db=function(t,i){var r={idToken:t},o=[];return st(os,function(t,e){var n=i[e];null===n?o.push(t):e in i&&(r[e]=n)}),o.length&&(r.deleteAttribute=o),Xs(this,Ps,r)},t.vb=function(t,e){return lt(t={requestType:"PASSWORD_RESET",email:t},e),Xs(this,_s,t)},t.wb=function(t,e){return lt(t={requestType:"EMAIL_SIGNIN",email:t},e),Xs(this,ks,t)},t.ub=function(t,e){return lt(t={requestType:"VERIFY_EMAIL",idToken:t},e),Xs(this,Ss,t)},t.Eb=function(t,e,n){return lt(t={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:t,newEmail:e},n),Xs(this,Ns,t)},t.fb=function(t){return Xs(this,Ks,t)},t.nb=function(t,e){return Xs(this,Rs,{oobCode:t,newPassword:e})},t.Ra=function(t){return Xs(this,vs,{oobCode:t})},t.jb=function(t){return Xs(this,ps,{oobCode:t})};var ps={endpoint:"setAccountInfo",A:ds,Z:"email",B:!0},vs={endpoint:"resetPassword",A:ds,G:function(t){var e=t.requestType;if(!e||!t.email&&"EMAIL_SIGNIN"!=e&&"VERIFY_AND_CHANGE_EMAIL"!=e)throw new T("internal-error")},B:!0},ms={endpoint:"signupNewUser",A:function(t){if(es(t),!t.password)throw new T("weak-password")},G:is,V:!0,B:!0},gs={endpoint:"createAuthUri",B:!0},bs={endpoint:"deleteAccount",N:["idToken"]},ys={endpoint:"setAccountInfo",N:["idToken","deleteProvider"],A:function(t){if(!Array.isArray(t.deleteProvider))throw new T("internal-error")}},ws={endpoint:"emailLinkSignin",N:["email","oobCode"],A:es,G:is,V:!0,B:!0},Is={endpoint:"emailLinkSignin",N:["idToken","email","oobCode"],A:es,G:is,V:!0},Ts={endpoint:"accounts/mfaEnrollment:finalize",N:["idToken","phoneVerificationInfo"],A:as,G:is,B:!0,Na:!0},Es={endpoint:"accounts/mfaSignIn:finalize",N:["mfaPendingCredential","phoneVerificationInfo"],A:as,G:is,B:!0,Na:!0},As={endpoint:"getAccountInfo"},ks={endpoint:"getOobConfirmationCode",N:["requestType"],A:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new T("internal-error");es(t)},Z:"email",B:!0},Ss={endpoint:"getOobConfirmationCode",N:["idToken","requestType"],A:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new T("internal-error")},Z:"email",B:!0},Ns={endpoint:"getOobConfirmationCode",N:["idToken","newEmail","requestType"],A:function(t){if("VERIFY_AND_CHANGE_EMAIL"!=t.requestType)throw new T("internal-error")},Z:"email",B:!0},_s={endpoint:"getOobConfirmationCode",N:["requestType"],A:function(t){if("PASSWORD_RESET"!=t.requestType)throw new T("internal-error");es(t)},Z:"email",B:!0},Os={lb:!0,endpoint:"getProjectConfig",Ub:"GET"},Cs={lb:!0,endpoint:"getRecaptchaParam",Ub:"GET",G:function(t){if(!t.recaptchaSiteKey)throw new T("internal-error")}},Rs={endpoint:"resetPassword",A:ds,Z:"email",B:!0},Ds={endpoint:"sendVerificationCode",N:["phoneNumber","recaptchaToken"],Z:"sessionInfo",B:!0},Ps={endpoint:"setAccountInfo",N:["idToken"],A:ns,V:!0},Ls={endpoint:"setAccountInfo",N:["idToken"],A:function(t){if(ns(t),!t.password)throw new T("weak-password")},G:is,V:!0},xs={endpoint:"signupNewUser",G:is,V:!0,B:!0},Ms={endpoint:"accounts/mfaEnrollment:start",N:["idToken","phoneEnrollmentInfo"],A:function(t){if(!t.phoneEnrollmentInfo)throw new T("internal-error");if(!t.phoneEnrollmentInfo.phoneNumber)throw new T("missing-phone-number");if(!t.phoneEnrollmentInfo.recaptchaToken)throw new T("missing-app-credential")},G:function(t){if(!t.phoneSessionInfo||!t.phoneSessionInfo.sessionInfo)throw new T("internal-error")},B:!0,Na:!0},js={endpoint:"accounts/mfaSignIn:start",N:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],A:function(t){if(!t.phoneSignInInfo||!t.phoneSignInInfo.recaptchaToken)throw new T("missing-app-credential")},G:function(t){if(!t.phoneResponseInfo||!t.phoneResponseInfo.sessionInfo)throw new T("internal-error")},B:!0,Na:!0},Us={endpoint:"verifyAssertion",A:ss,Ya:us,G:cs,V:!0,B:!0},Vs={endpoint:"verifyAssertion",A:ss,Ya:us,G:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new T("user-not-found");if(t.errorMessage)throw Js(t.errorMessage);is(t)},V:!0,B:!0},Fs={endpoint:"verifyAssertion",A:function(t){if(ss(t),!t.idToken)throw new T("internal-error")},Ya:us,G:cs,V:!0},qs={endpoint:"verifyCustomToken",A:function(t){if(!t.token)throw new T("invalid-custom-token")},G:is,V:!0,B:!0},Hs={endpoint:"verifyPassword",A:function(t){if(es(t),!t.password)throw new T("wrong-password")},G:is,V:!0,B:!0},Ks={endpoint:"verifyPhoneNumber",A:rs,G:is,B:!0},Gs={endpoint:"verifyPhoneNumber",A:function(t){if(!t.idToken)throw new T("internal-error");rs(t)},G:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",jo(t);is(t)}},Bs={Hb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",A:rs,G:is,B:!0},Ws={endpoint:"accounts/mfaEnrollment:withdraw",N:["idToken","mfaEnrollmentId"],G:function(t){if(!!t[Ha]^!!t.refreshToken)throw new T("internal-error")},B:!0,Na:!0};function Xs(t,e,n){if(!function(t,e){if(!e||!e.length)return 1;if(t){for(var n=0;n<e.length;n++){var i=t[e[n]];if(null==i||""===i)return}return 1}}(n,e.N))return we(new T("internal-error"));var i,r=!!e.Na,o=e.Ub||"POST";return ye(n).then(e.A).then(function(){return e.V&&(n.returnSecureToken=!0),e.B&&t.b&&void 0===n.tenantId&&(n.tenantId=t.b),ts(t,r?t.i:t.h,e.endpoint,o,n,e.Hb,e.lb||!1)}).then(function(t){return i=t,e.Ya?e.Ya(n,i):i}).then(e.G).then(function(){if(!e.Z)return i;if(!(e.Z in i))throw new T("internal-error");return i[e.Z]})}function Js(t){return Ys({error:{errors:[{message:t}],code:400,message:t}})}function Ys(t,e){var n,i=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",r={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(i=r[i]?new T(r[i]):null)return i;for(n in i=t.error&&t.error.message||"",lt(r={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"},e||{}),e=(e=i.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<e.length?e[1]:void 0,r)if(0===i.indexOf(n))return new T(r[n],e);return new T("internal-error",e=!e&&t?Ai(t):e)}function zs(t){var o;this.b=t,this.a=null,this.rb=(o=this,(tu=tu||new fe(function(t,e){function n(){Oi(),bi("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){Oi(),e(Error("Network Error"))},timeout:Zs.get()})}var i;bi("gapi.iframes.Iframe")?t():bi("gapi.load")?n():(i="__iframefcb"+Math.floor(1e6*Math.random()).toString(),l[i]=function(){bi("gapi.load")?n():e(Error("Network Error"))},ye(Pa(i=It($s,{onload:i}))).o(function(){e(Error("Network Error"))}))}).o(function(t){throw tu=null,t})).then(function(){return new fe(function(i,r){bi("gapi.iframes.getContext")().open({where:document.body,url:o.b,messageHandlersFilter:bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(t){function e(){clearTimeout(n),i()}o.a=t,o.a.restyle({setHideOnLeave:!1});var n=setTimeout(function(){r(Error("Network Error"))},Qs.get());t.ping(e).then(e,function(){r(Error("Network Error"))})})})}))}var $s=new dt(gt,"https://apis.google.com/js/api.js?onload=%{onload}"),Zs=new Ci(3e4,6e4),Qs=new Ci(5e3,15e3),tu=null;function eu(t,e,n,i){this.l=t,this.h=e,this.i=n,this.g=i,this.f=null,t=this.g?Cn((t=On(this.g.url)).c,t.a,t.g,"/emulator/auth/iframe"):Cn("https",this.l,null,"/__/auth/iframe"),this.a=t,Nn(this.a,"apiKey",this.h),Nn(this.a,"appName",this.i),this.b=null,this.c=[]}function nu(t,e,n,i,r,o){this.u=t,this.s=e,this.c=n,this.m=i,this.v=o,this.i=this.g=this.l=null,this.a=r,this.h=this.f=null}function iu(t){try{return zl.default.app(t).auth().Ga()}catch(t){return[]}}function ru(t,e,n,i,r,o){this.s=t,this.g=e,this.b=n,this.f=o,this.c=i||null,this.i=r||null,this.l=this.u=this.C=null,this.h=[],this.m=this.a=null}function ou(t){var s=Qn();return Xs(t,Os,{}).then(function(t){return t.authorizedDomains||[]}).then(function(t){t:{for(var e=(n=On(s)).c,n=n.a,i=0;i<t.length;i++){var r=t[i],o=n,a=e;if(o=0==r.indexOf("chrome-extension://")?On(r).a==o&&"chrome-extension"==a:("http"==a||"https"==a)&&(ri.test(r)?o==r:(r=r.split(".").join("\\."),new RegExp("^(.+\\."+r+"|"+r+")$","i").test(o)))){t=!0;break t}}t=!1}if(!t)throw new xo(Qn())})}function au(r){return r.m||(r.m=ai().then(function(){var t,e,n,i;r.u||(t=r.c,e=r.i,n=iu(r.b),(i=new eu(r.s,r.g,r.b,r.f)).f=t,i.b=e,i.c=X(n||[]),r.u=i.toString()),r.v=new zs(r.u),function(i){if(!i.v)throw Error("IfcHandler must be initialized!");!function(t,e){t.rb.then(function(){t.a.register("authEvent",e,bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}(i.v,function(t){var e={};if(t&&t.authEvent){var n=!1;for(t=Ro(t.authEvent),e=0;e<i.h.length;e++)n=i.h[e](t)||n;return(e={}).status=n?"ACK":"ERROR",ye(e)}return e.status="ERROR",ye(e)})}(r)}),r.m)}function su(t){return t.l||(t.C=t.c?mi(t.c,iu(t.b)):null,t.l=new Fa(t.g,_(t.i),t.C),t.f&&Ja(t.l,t.f)),t.l}function uu(t,e,n,i,r,o,a,s,u,c,h,l){return(t=new nu(t,e,n,i,r,l)).l=o,t.g=a,t.i=s,t.b=ct(u||null),t.f=c,t.yb(h).toString()}function cu(t){if(this.a=t||zl.default.INTERNAL.reactNative&&zl.default.INTERNAL.reactNative.AsyncStorage,!this.a)throw new T("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}function hu(t){this.b=t,this.a={},this.f=b(this.c,this)}eu.prototype.toString=function(){return this.f?Nn(this.a,"v",this.f):Hn(this.a.b,"v"),this.b?Nn(this.a,"eid",this.b):Hn(this.a.b,"eid"),this.c.length?Nn(this.a,"fw",this.c.join(",")):Hn(this.a.b,"fw"),this.a.toString()},nu.prototype.yb=function(t){return this.h=t,this},nu.prototype.toString=function(){var t;if(Nn(t=this.v?Cn((t=On(this.v.url)).c,t.a,t.g,"/emulator/auth/handler"):Cn("https",this.u,null,"/__/auth/handler"),"apiKey",this.s),Nn(t,"appName",this.c),Nn(t,"authType",this.m),this.a.isOAuthProvider){var e=this.a;try{var n=zl.default.app(this.c).auth().la()}catch(t){n=null}for(i in e.ob=n,Nn(t,"providerId",this.a.providerId),e=ki((n=this.a).Ib))e[i]=e[i].toString();for(var i=n.Qc,e=ct(e),r=0;r<i.length;r++){var o=i[r];o in e&&delete e[o]}n.pb&&n.ob&&!e[n.pb]&&(e[n.pb]=n.ob),ut(e)||Nn(t,"customParameters",Ai(e))}if("function"==typeof this.a.Qb&&((n=this.a.Qb()).length&&Nn(t,"scopes",n.join(","))),this.l?Nn(t,"redirectUrl",this.l):Hn(t.b,"redirectUrl"),this.g?Nn(t,"eventId",this.g):Hn(t.b,"eventId"),this.i?Nn(t,"v",this.i):Hn(t.b,"v"),this.b)for(var a in this.b)this.b.hasOwnProperty(a)&&!_n(t,a)&&Nn(t,a,this.b[a]);return this.h?Nn(t,"tid",this.h):Hn(t.b,"tid"),this.f?Nn(t,"eid",this.f):Hn(t.b,"eid"),(a=iu(this.c)).length&&Nn(t,"fw",a.join(",")),t.toString()},(t=ru.prototype).Ob=function(e,n,t){var i=new T("popup-closed-by-user"),r=new T("web-storage-unsupported"),o=this,a=!1;return this.ma().then(function(){var t,i;i={type:"webStorageSupport"},au(t=o).then(function(){return e=t.v,n=i,e.rb.then(function(){return new fe(function(t){e.a.send(n.type,n,t,bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})});var e,n}).then(function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport;throw Error()}).then(function(t){t||(e&&ni(e),n(r),a=!0)})}).o(function(){}).then(function(){if(!a)return n=e,new fe(function(e){return function t(){mn(2e3).then(function(){return n&&!n.closed?t():void e()})}()});var n}).then(function(){if(!a)return mn(t).then(function(){n(i)})})},t.Xb=function(){var t=gi();return!Ei(t)&&!_i(t)},t.Tb=function(){return!1},t.Mb=function(e,t,n,i,r,o,a,s){if(!e)return we(new T("popup-blocked"));if(a&&!Ei())return this.ma().o(function(t){ni(e),r(t)}),i(),ye();this.a||(this.a=ou(su(this)));var u=this;return this.a.then(function(){var t=u.ma().o(function(t){throw ni(e),r(t),t});return i(),t}).then(function(){Oo(n),a||ti(uu(u.s,u.g,u.b,t,n,null,o,u.c,void 0,u.i,s,u.f),e)}).o(function(t){throw"auth/network-request-failed"==t.code&&(u.a=null),t})},t.Nb=function(t,e,n,i){this.a||(this.a=ou(su(this)));var r=this;return this.a.then(function(){Oo(e),ti(uu(r.s,r.g,r.b,t,e,Qn(),n,r.c,void 0,r.i,i,r.f))}).o(function(t){throw"auth/network-request-failed"==t.code&&(r.a=null),t})},t.ma=function(){var t=this;return au(this).then(function(){return t.v.rb}).o(function(){throw t.a=null,new T("network-request-failed")})},t.$b=function(){return!0},t.Ea=function(t){this.h.push(t)},t.Sa=function(e){B(this.h,function(t){return t==e})},(t=cu.prototype).get=function(t){return ye(this.a.getItem(t)).then(function(t){return t&&Si(t)})},t.set=function(t,e){return ye(this.a.setItem(t,Ai(e)))},t.U=function(t){return ye(this.a.removeItem(t))},t.ca=function(){},t.ia=function(){};var lu,fu=[];function du(t,e,n){ut(t.a)&&t.b.addEventListener("message",t.f),void 0===t.a[e]&&(t.a[e]=[]),t.a[e].push(n)}function pu(t){this.a=t}function vu(t){this.c=t,this.b=!1,this.a=[]}function mu(i,t,e,n){var r,o,a,s,u=e||{},c=null;if(i.b)return we(Error("connection_unavailable"));var h=n?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null;return new fe(function(e,n){l?(r=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout(function(){n(Error("unsupported_event"))},h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===r&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout(function(){n(Error("timeout"))},3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?e(t.data.response):n(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),n(Error("invalid_response"))))}},i.a.push(c),l.port1.addEventListener("message",o),i.c.postMessage({eventType:t,eventId:r,data:u},[l.port2])):n(Error("connection_unavailable"))}).then(function(t){return gu(i,c),t}).o(function(t){throw gu(i,c),t})}function gu(t,e){var n,i;e&&(n=e.messageChannel,i=e.onMessage,n&&(n.port1.removeEventListener("message",i),n.port1.close()),B(t.a,function(t){return t==e}))}function bu(){if(!Tu())throw new T("web-storage-unsupported");this.c={},this.a=[],this.b=0,this.m=l.indexedDB,this.type="indexedDB",this.g=this.v=this.f=this.l=null,this.s=!1,this.h=null;var t,e,n,i=this;ci()&&self?(this.v=(n=ci()?self:null,V(fu,function(t){t.b==n&&(e=t)}),e||(e=new hu(n),fu.push(e)),e),du(this.v,"keyChanged",function(t,n){return Nu(i).then(function(e){return 0<e.length&&V(i.a,function(t){t(e)}),{keyProcessed:K(e,n.key)}})}),du(this.v,"ping",function(){return ye(["keyChanged"])})):((t=l.navigator)&&t.serviceWorker?ye().then(function(){return t.serviceWorker.ready}).then(function(t){return t.active||null}).o(function(){return null}):ye(null)).then(function(t){(i.h=t)&&(i.g=new vu(new pu(t)),mu(i.g,"ping",null,!0).then(function(t){t[0].fulfilled&&K(t[0].value,"keyChanged")&&(i.s=!0)}).o(function(){}))})}function yu(r){return new fe(function(e,n){var t=r.m.open("firebaseLocalStorageDb",1);t.onerror=function(t){try{t.preventDefault()}catch(t){}n(Error(t.target.error))},t.onupgradeneeded=function(t){t=t.target.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}},t.onsuccess=function(t){var i;(t=t.target.result).objectStoreNames.contains("firebaseLocalStorage")?e(t):(i=r,new fe(function(t,e){var n=i.m.deleteDatabase("firebaseLocalStorageDb");n.onsuccess=function(){t()},n.onerror=function(t){e(Error(t.target.error))}}).then(function(){return yu(r)}).then(function(t){e(t)}).o(function(t){n(t)}))}})}function wu(t){return t.i||(t.i=yu(t)),t.i}function Iu(r,t){var o=0;return new fe(function e(n,i){wu(r).then(t).then(n).o(function(t){return 3<++o?void i(t):wu(r).then(function(t){return t.close(),r.i=void 0,e(n,i)}).o(function(t){i(t)})})})}function Tu(){try{return l.indexedDB}catch(t){return}}function Eu(t){return t.objectStore("firebaseLocalStorage")}function Au(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly")}function ku(t){return new fe(function(e,n){t.onsuccess=function(t){t&&t.target?e(t.target.result):e()},t.onerror=function(t){n(t.target.error)}})}function Su(t,e){return t.g&&t.h&&((n=l.navigator)&&n.serviceWorker&&n.serviceWorker.controller||null)===t.h?mu(t.g,"keyChanged",{key:e},t.s).then(function(){}).o(function(){}):ye();var n}function Nu(i){return wu(i).then(function(t){var r=Eu(Au(t,!1));return r.getAll?ku(r.getAll()):new fe(function(e,n){var i=[],t=r.openCursor();t.onsuccess=function(t){(t=t.target.result)?(i.push(t.value),t.continue()):e(i)},t.onerror=function(t){n(t.target.error)}})}).then(function(t){var e={},n=[];if(0==i.b){for(n=0;n<t.length;n++)e[t[n].fbase_key]=t[n].value;n=function t(e,n){var i,r=[];for(i in e)i in n&&typeof e[i]==typeof n[i]?"object"==typeof e[i]&&null!=e[i]&&null!=n[i]?0<t(e[i],n[i]).length&&r.push(i):e[i]!==n[i]&&r.push(i):r.push(i);for(i in n)i in e||r.push(i);return r}(i.c,e),i.c=e}return n})}function _u(t){t.l&&t.l.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function Ou(t){var i=this,r=null;this.a=[],this.type="indexedDB",this.c=t,this.b=ye().then(function(){if(Tu()){var e=Ni(),n="__sak"+e;return lu=lu||new bu,(r=lu).set(n,e).then(function(){return r.get(n)}).then(function(t){if(t!==e)throw Error("indexedDB not supported!");return r.U(n)}).then(function(){return r}).o(function(){return i.c})}return i.c}).then(function(t){return i.type=t.type,t.ca(function(e){V(i.a,function(t){t(e)})}),t})}function Cu(){this.a={},this.type="inMemory"}function Ru(){if(!function(){var t="Node"==hi();if(!(t=Du()||t&&zl.default.INTERNAL.node&&zl.default.INTERNAL.node.localStorage))return!1;try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==hi())throw new T("internal-error","The LocalStorage compatibility library was not found.");throw new T("web-storage-unsupported")}this.a=Du()||zl.default.INTERNAL.node.localStorage,this.type="localStorage"}function Du(){try{var t=l.localStorage,e=Ni();return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function Pu(){this.type="nullStorage"}function Lu(){if(!function(){var t="Node"==hi();if(!(t=xu()||t&&zl.default.INTERNAL.node&&zl.default.INTERNAL.node.sessionStorage))return!1;try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==hi())throw new T("internal-error","The SessionStorage compatibility library was not found.");throw new T("web-storage-unsupported")}this.a=xu()||zl.default.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function xu(){try{var t=l.sessionStorage,e=Ni();return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function Mu(){var t={};t.Browser=Vu,t.Node=Fu,t.ReactNative=qu,t.Worker=Hu,this.a=t[hi()]}hu.prototype.c=function(n){var e,i=n.data.eventType,r=n.data.eventId,t=this.a[i];t&&0<t.length&&(n.ports[0].postMessage({status:"ack",eventId:r,eventType:i,response:null}),e=[],V(t,function(t){e.push(ye().then(function(){return t(n.origin,n.data.data)}))}),Te(e).then(function(t){var e=[];V(t,function(t){e.push({fulfilled:t.Pb,value:t.value,reason:t.reason?t.reason.message:void 0})}),V(e,function(t){for(var e in t)void 0===t[e]&&delete t[e]}),n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:e})}))},pu.prototype.postMessage=function(t,e){this.a.postMessage(t,e)},vu.prototype.close=function(){for(;0<this.a.length;)gu(this,this.a[0]);this.b=!0},(t=bu.prototype).set=function(i,r){var o=this,a=!1;return Iu(this,function(t){return ku((t=Eu(Au(t,!0))).get(i))}).then(function(n){return Iu(o,function(t){if(t=Eu(Au(t,!0)),n)return n.value=r,ku(t.put(n));o.b++,a=!0;var e={};return e.fbase_key=i,e.value=r,ku(t.add(e))})}).then(function(){return o.c[i]=r,Su(o,i)}).oa(function(){a&&o.b--})},t.get=function(e){return Iu(this,function(t){return ku(Eu(Au(t,!1)).get(e))}).then(function(t){return t&&t.value})},t.U=function(e){var n=this,i=!1;return Iu(this,function(t){return i=!0,n.b++,ku(Eu(Au(t,!0)).delete(e))}).then(function(){return delete n.c[e],Su(n,e)}).oa(function(){i&&n.b--})},t.ca=function(t){var n;0==this.a.length&&(_u(n=this),function e(){n.f=setTimeout(function(){n.l=Nu(n).then(function(e){0<e.length&&V(n.a,function(t){t(e)})}).then(function(){e()}).o(function(t){"STOP_EVENT"!=t.message&&e()})},800)}()),this.a.push(t)},t.ia=function(e){B(this.a,function(t){return t==e}),0==this.a.length&&_u(this)},(t=Ou.prototype).get=function(e){return this.b.then(function(t){return t.get(e)})},t.set=function(e,n){return this.b.then(function(t){return t.set(e,n)})},t.U=function(e){return this.b.then(function(t){return t.U(e)})},t.ca=function(t){this.a.push(t)},t.ia=function(e){B(this.a,function(t){return t==e})},(t=Cu.prototype).get=function(t){return ye(this.a[t])},t.set=function(t,e){return this.a[t]=e,ye()},t.U=function(t){return delete this.a[t],ye()},t.ca=function(){},t.ia=function(){},(t=Ru.prototype).get=function(t){var e=this;return ye().then(function(){return Si(e.a.getItem(t))})},t.set=function(e,n){var i=this;return ye().then(function(){var t=Ai(n);null===t?i.U(e):i.a.setItem(e,t)})},t.U=function(t){var e=this;return ye().then(function(){e.a.removeItem(t)})},t.ca=function(t){l.window&&Ze(l.window,"storage",t)},t.ia=function(t){l.window&&en(l.window,"storage",t)},(t=Pu.prototype).get=function(){return ye(null)},t.set=function(){return ye()},t.U=function(){return ye()},t.ca=function(){},t.ia=function(){},(t=Lu.prototype).get=function(t){var e=this;return ye().then(function(){return Si(e.a.getItem(t))})},t.set=function(e,n){var i=this;return ye().then(function(){var t=Ai(n);null===t?i.U(e):i.a.setItem(e,t)})},t.U=function(t){var e=this;return ye().then(function(){e.a.removeItem(t)})},t.ca=function(){},t.ia=function(){};var ju,Uu,Vu={F:Ru,bb:Lu},Fu={F:Ru,bb:Lu},qu={F:cu,bb:Pu},Hu={F:Ru,bb:Pu},Ku={rd:"local",NONE:"none",td:"session"};function Gu(){var t=!(_i(gi())||!ui()),e=Ei(),n=yi();this.m=t,this.h=e,this.l=n,this.a={},t=ju=ju||new Mu;try{this.g=!Zn()&&Li()||!l.indexedDB?new t.a.F:new Ou(new(ci()?Cu:t.a.F))}catch(t){this.g=new Cu,this.h=!0}try{this.i=new t.a.bb}catch(t){this.i=new Cu}this.v=new Cu,this.f=b(this.Yb,this),this.b={}}function Bu(){return Uu=Uu||new Gu}function Wu(t,e){switch(e){case"session":return t.i;case"none":return t.v;default:return t.g}}function Xu(t,e){return"firebase:"+t.name+(e?":"+e:"")}function Ju(t,e,n){return n=Xu(e,n),"local"==e.F&&(t.b[n]=null),Wu(t,e.F).U(n)}function Yu(t){t.c&&(clearInterval(t.c),t.c=null)}function zu(t){this.a=t,this.b=Bu()}(t=Gu.prototype).get=function(t,e){return Wu(this,t.F).get(Xu(t,e))},t.set=function(e,t,n){var i=Xu(e,n),r=this,o=Wu(this,e.F);return o.set(i,t).then(function(){return o.get(i)}).then(function(t){"local"==e.F&&(r.b[i]=t)})},t.addListener=function(t,e,n){var i;t=Xu(t,e),this.l&&(this.b[t]=l.localStorage.getItem(t)),ut(this.a)&&(Wu(this,"local").ca(this.f),this.h||(Zn()||!Li())&&l.indexedDB||!this.l||(Yu(i=this),i.c=setInterval(function(){for(var t in i.a){var e=l.localStorage.getItem(t),n=i.b[t];e!=n&&(i.b[t]=e,e=new qe({type:"storage",key:t,target:window,oldValue:n,newValue:e,a:!0}),i.Yb(e))}},1e3))),this.a[t]||(this.a[t]=[]),this.a[t].push(n)},t.removeListener=function(t,e,n){t=Xu(t,e),this.a[t]&&(B(this.a[t],function(t){return t==n}),0==this.a[t].length&&delete this.a[t]),ut(this.a)&&(Wu(this,"local").ia(this.f),Yu(this))},t.Yb=function(t){if(t&&t.g){var e=t.a.key;if(null==e)for(var n in this.a){var i=this.b[n];void 0===i&&(i=null);var r=l.localStorage.getItem(n);r!==i&&(this.b[n]=r,this.mb(n))}else if(0==e.indexOf("firebase:")&&this.a[e]){if(void 0!==t.a.a?Wu(this,"local").ia(this.f):Yu(this),this.m)if(n=l.localStorage.getItem(e),(i=t.a.newValue)!==n)null!==i?l.localStorage.setItem(e,i):l.localStorage.removeItem(e);else if(this.b[e]===i&&void 0===t.a.a)return;var o=this,n=function(){void 0===t.a.a&&o.b[e]===l.localStorage.getItem(e)||(o.b[e]=l.localStorage.getItem(e),o.mb(e))};Ht&&Zt&&10==Zt&&l.localStorage.getItem(e)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(n,10):n()}}else V(t,b(this.mb,this))},t.mb=function(t){this.a[t]&&V(this.a[t],function(t){t()})};var $u,Zu={name:"authEvent",F:"local"};function Qu(){this.a=Bu()}function tc(t,e){this.b=ec,this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=e,this.l=l.Int32Array?new Int32Array(64):Array(64),void 0===$u&&($u=l.Int32Array?new Int32Array(uc):uc),this.reset()}w(tc,function(){this.b=-1});for(var ec=64,nc=ec-1,ic=[],rc=0;rc<nc;rc++)ic[rc]=0;var oc=W(128,ic);function ac(t){for(var e=t.f,n=t.l,i=0,r=0;r<e.length;)n[i++]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r=4*i;for(e=16;e<64;e++){var r=0|n[e-15],i=0|n[e-2],o=(0|n[e-16])+((r>>>7|r<<25)^(r>>>18|r<<14)^r>>>3)|0,a=(0|n[e-7])+((i>>>17|i<<15)^(i>>>19|i<<13)^i>>>10)|0;n[e]=o+a|0}i=0|t.a[0],r=0|t.a[1];var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6];for(o=0|t.a[7],e=0;e<64;e++){var f=((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))+(i&r^i&s^r&s)|0;a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|$u[e])|0)+(0|n[e])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=r,r=i,i=a+f|0}t.a[0]=t.a[0]+i|0,t.a[1]=t.a[1]+r|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function sc(t,e,n){void 0===n&&(n=e.length);var i=0,r=t.c;if("string"==typeof e)for(;i<n;)t.f[r++]=e.charCodeAt(i++),r==t.b&&(ac(t),r=0);else{if(!p(e))throw Error("message must be string or array");for(;i<n;){var o=e[i++];if(!("number"==typeof o&&0<=o&&o<=255&&o==(0|o)))throw Error("message must be a byte array");t.f[r++]=o,r==t.b&&(ac(t),r=0)}}t.c=r,t.g+=n}tc.prototype.reset=function(){this.g=this.c=0,this.a=l.Int32Array?new Int32Array(this.h):X(this.h)};var uc=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function cc(){tc.call(this,8,hc)}w(cc,tc);var hc=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function lc(t,e,n,i,r,o){this.v=t,this.i=e,this.l=n,this.m=i||null,this.u=r||null,this.s=o,this.h=e+":"+n,this.C=new Qu,this.g=new zu(this.h),this.f=null,this.b=[],this.a=this.c=null}function fc(t){return new T("invalid-cordova-configuration",t)}function dc(t){var e=new cc;sc(e,t),t=[];var n=8*e.g;e.c<56?sc(e,oc,56-e.c):sc(e,oc,e.b-(e.c-56));for(var i=63;56<=i;i--)e.f[i]=255&n,n/=256;for(ac(e),i=n=0;i<e.i;i++)for(var r=24;0<=r;r-=8)t[n++]=e.a[i]>>r&255;return q(t,function(t){return 1<(t=t.toString(16)).length?t:"0"+t}).join("")}function pc(t,e){for(var n=0;n<t.b.length;n++)try{t.b[n](e)}catch(t){}}function vc(s){return s.f||(s.f=s.ma().then(function(){return new fe(function(n){function e(i){t=!0,a&&a.cancel(),mc(r).then(function(t){var e,n=o;t&&i&&i.url&&(e=null,n=(e=-1!=(n=Jr(i.url)).indexOf("/__/auth/callback")?(e="object"==typeof(e=Si(_n(e=On(n),"firebaseError")||null))?E(e):null)?new Co(t.c,t.b,null,null,e,null,t.T()):new Co(t.c,t.b,n,t.f,null,null,t.T()):e)||o),pc(r,n)})}var r,o,t,a,i;s.Ea(function t(e){return n(e),s.Sa(t),!1}),r=s,o=new Co("unknown",null,null,null,new T("no-auth-event")),t=!1,a=mn(500).then(function(){return mc(r).then(function(){t||pc(r,o)})}),i=l.handleOpenURL,l.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(bi("BuildInfo.packageName",l).toLowerCase()+"://")&&e({url:t}),"function"==typeof i)try{i(t)}catch(t){console.error(t)}},Lo=Lo||new Do,function(t){var n=Lo;n.a.push(t),n.b||(n.b=function(t){for(var e=0;e<n.a.length;e++)n.a[e](t)},"function"==typeof(t=bi("universalLinks.subscribe",l))&&t(null,n.b))}(e)})})),s.f}function mc(e){var t,n=null;return(t=e.g).b.get(Zu,t.a).then(Ro).then(function(t){return n=t,Ju((t=e.g).b,Zu,t.a)}).then(function(){return n})}function gc(t){this.a=t,this.b=Bu()}(t=lc.prototype).ma=function(){return this.Ia||(this.Ia=(si(void 0)?ai().then(function(){return new fe(function(t,e){var n=l.document,i=setTimeout(function(){e(Error("Cordova framework is not ready."))},1e3);n.addEventListener("deviceready",function(){clearTimeout(i),t()},!1)})}):we(Error("Cordova must run in an Android or iOS file scheme."))).then(function(){if("function"!=typeof bi("universalLinks.subscribe",l))throw fc("cordova-universal-links-plugin-fix is not installed");if(void 0===bi("BuildInfo.packageName",l))throw fc("cordova-plugin-buildinfo is not installed");if("function"!=typeof bi("cordova.plugins.browsertab.openUrl",l))throw fc("cordova-plugin-browsertab is not installed");if("function"!=typeof bi("cordova.InAppBrowser.open",l))throw fc("cordova-plugin-inappbrowser is not installed")},function(){throw new T("cordova-not-ready")}))},t.Ob=function(t,e){return e(new T("operation-not-supported-in-this-environment")),ye()},t.Mb=function(){return we(new T("operation-not-supported-in-this-environment"))},t.$b=function(){return!1},t.Xb=function(){return!0},t.Tb=function(){return!0},t.Nb=function(t,e,n,i){if(this.c)return we(new T("redirect-operation-pending"));var r=this,o=l.document,a=null,s=null,u=null,c=null;return this.c=ye().then(function(){return Oo(e),vc(r)}).then(function(){return function(n,t,e,i,r){var o=function(){for(var t=20,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return e.join("")}(),a=new Co(t,i,null,o,new T("no-auth-event"),null,r),s=bi("BuildInfo.packageName",l);if("string"!=typeof s)throw new T("invalid-cordova-configuration");var u=bi("BuildInfo.displayName",l),c={};if(gi().toLowerCase().match(/iphone|ipad|ipod/))c.ibi=s;else{if(!gi().toLowerCase().match(/android/))return we(new T("operation-not-supported-in-this-environment"));c.apn=s}u&&(c.appDisplayName=u),o=dc(o),c.sessionId=o;var h=uu(n.v,n.i,n.l,t,e,null,i,n.m,c,n.u,r,n.s);return n.ma().then(function(){var t=n.h;return n.C.a.set(Zu,a.w(),t)}).then(function(){var t=bi("cordova.plugins.browsertab.isAvailable",l);if("function"!=typeof t)throw new T("invalid-cordova-configuration");var e=null;t(function(t){if(t){if("function"!=typeof(e=bi("cordova.plugins.browsertab.openUrl",l)))throw new T("invalid-cordova-configuration");e(h)}else{if("function"!=typeof(e=bi("cordova.InAppBrowser.open",l)))throw new T("invalid-cordova-configuration");t=gi(),n.a=e(h,t.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}})})}(r,t,e,n,i)}).then(function(){return new fe(function(e,t){s=function(){var t=bi("cordova.plugins.browsertab.close",l);return e(),"function"==typeof t&&t(),r.a&&"function"==typeof r.a.close&&(r.a.close(),r.a=null),!1},r.Ea(s),u=function(){a=a||mn(2e3).then(function(){t(new T("redirect-cancelled-by-user"))})},c=function(){Ri()&&u()},o.addEventListener("resume",u,!1),gi().toLowerCase().match(/android/)||o.addEventListener("visibilitychange",c,!1)}).o(function(t){return mc(r).then(function(){throw t})})}).oa(function(){u&&o.removeEventListener("resume",u,!1),c&&o.removeEventListener("visibilitychange",c,!1),a&&a.cancel(),s&&r.Sa(s),r.c=null})},t.Ea=function(e){this.b.push(e),vc(this).o(function(t){"auth/invalid-cordova-configuration"===t.code&&(t=new Co("unknown",null,null,null,new T("no-auth-event")),e(t))})},t.Sa=function(e){B(this.b,function(t){return t==e})};var bc={name:"pendingRedirect",F:"session"};function yc(t){return Ju(t.b,bc,t.a)}function wc(t,e,n,i){this.i={},this.u=0,this.D=t,this.v=e,this.m=n,this.J=i,this.h=[],this.f=!1,this.l=b(this.s,this),this.b=new xc,this.C=new Fc,this.g=new gc(Pc(this.v,this.m)),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.C,this.c.linkViaPopup=this.C,this.c.reauthViaPopup=this.C,this.a=Ic(this.D,this.v,this.m,A,this.J)}function Ic(t,e,n,i,r){var o=zl.default.SDK_VERSION||null;return new(si()?lc:ru)(t,e,n,o,i,r)}function Tc(e){e.f||(e.f=!0,e.a.Ea(e.l));var n=e.a;return e.a.ma().o(function(t){throw e.a==n&&e.reset(),t})}function Ec(n){n.a.Xb()&&Tc(n).o(function(t){var e=new Co("unknown",null,null,null,new T("operation-not-supported-in-this-environment"));Oc(t)&&n.s(e)}),n.a.Tb()||Mc(n.b)}function Ac(n,t){K(n.h,t)||n.h.push(t),n.f||(t=n.g).b.get(bc,t.a).then(function(t){return"pending"==t}).then(function(t){t?yc(n.g).then(function(){Tc(n).o(function(t){var e=new Co("unknown",null,null,null,new T("operation-not-supported-in-this-environment"));Oc(t)&&n.s(e)})}):Ec(n)}).o(function(){Ec(n)})}function kc(t,e){B(t.h,function(t){return t==e})}wc.prototype.reset=function(){this.f=!1,this.a.Sa(this.l),this.a=Ic(this.D,this.v,this.m,null,this.J),this.i={}},wc.prototype.s=function(t){if(!t)throw new T("invalid-auth-event");if(6e5<=Date.now()-this.u&&(this.i={},this.u=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1;for(var e=!1,n=0;n<this.h.length;n++){var i=this.h[n];if(i.Fb(t.c,t.b)){(e=this.c[t.c])&&(e.h(t,i),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.u=Date.now())),e=!0;break}}return Mc(this.b),e};var Sc=new Ci(2e3,1e4),Nc=new Ci(3e4,6e4);function _c(t,e,n,i,r,o,a){return t.a.Mb(e,n,i,function(){t.f||(t.f=!0,t.a.Ea(t.l))},function(){t.reset()},r,o,a)}function Oc(t){return!(!t||"auth/cordova-not-ready"!=t.code)}function Cc(e,t,n,i,r){var o,a;return(a=e.g).b.set(bc,"pending",a.a).then(function(){return e.a.Nb(t,n,i,r).o(function(t){if(Oc(t))throw new T("operation-not-supported-in-this-environment");return o=t,yc(e.g).then(function(){throw o})}).then(function(){return e.a.$b()?new fe(function(){}):yc(e.g).then(function(){return e.qa()}).then(function(){}).o(function(){})})})}function Rc(t,e,n,i,r){return t.a.Ob(i,function(t){e.na(n,null,t,r)},Sc.get())}wc.prototype.qa=function(){return this.b.qa()};var Dc={};function Pc(t,e,n){return t=t+":"+e,t=n?t+":"+n.url:t}function Lc(t,e,n,i){var r=Pc(e,n,i);return Dc[r]||(Dc[r]=new wc(t,e,n,i)),Dc[r]}function xc(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function Mc(t){t.g||(t.g=!0,Vc(t,!1,null,null))}function jc(t){t.g&&!t.i&&Vc(t,!1,null,null)}function Uc(t,e){if(t.b=function(){return ye(e)},t.f.length)for(var n=0;n<t.f.length;n++)t.f[n](e)}function Vc(t,e,n,i){e?i?function(t,e){if(t.b=function(){return we(e)},t.c.length)for(var n=0;n<t.c.length;n++)t.c[n](e)}(t,i):Uc(t,n):Uc(t,{user:null}),t.f=[],t.c=[]}function Fc(){}function qc(){this.ib=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.ib},set:function(t){this.ib=t},enumerable:!1})}function Hc(t,e){this.a=e,Vi(this,"verificationId",t)}function Kc(t,e,n,i){return new So(t).fb(e,n).then(function(t){return new Hc(t,i)})}function Gc(t){var e=Lr(t);if(!(e&&e.exp&&e.auth_time&&e.iat))throw new T("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");Fi(this,{token:t,expirationTime:Pi(1e3*e.exp),authTime:Pi(1e3*e.auth_time),issuedAtTime:Pi(1e3*e.iat),signInProvider:e.firebase&&e.firebase.sign_in_provider?e.firebase.sign_in_provider:null,signInSecondFactor:e.firebase&&e.firebase.sign_in_second_factor?e.firebase.sign_in_second_factor:null,claims:e})}function Bc(t,e,n){var i=e&&e[Xc];if(!i)throw new T("argument-error","Internal assert: Invalid MultiFactorResolver");this.a=t,this.f=ct(e),this.g=n,this.c=new Yr(null,i),this.b=[];var r=this;V(e[Wc]||[],function(t){(t=Gi(t))&&r.b.push(t)}),Vi(this,"auth",this.a),Vi(this,"session",this.c),Vi(this,"hints",this.b)}xc.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},xc.prototype.h=function(t,e){var n,i,r,o;t?(this.reset(),this.g=!0,n=t.c,i=t.b,r=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code,this.i=!(!r&&!o),"unknown"!=n||r||o?t.a?(Vc(this,!0,null,t.a),ye()):e.Fa(n,i)?function(e,t,n){n=n.Fa(t.c,t.b);var i=t.g,r=t.f,o=t.i,a=t.T(),s=!!t.c.match(/Redirect$/);n(i,r,a,o).then(function(t){Vc(e,s,t,null)}).o(function(t){Vc(e,s,null,t)})}(this,t,e):we(new T("invalid-auth-event")):(Vc(this,!1,null,null),ye())):we(new T("invalid-auth-event"))},xc.prototype.qa=function(){var r=this;return new fe(function(t,e){var n,i;r.b?r.b().then(t,e):(r.f.push(t),r.c.push(e),n=r,i=new T("timeout"),n.a&&n.a.cancel(),n.a=mn(Nc.get()).then(function(){n.b||(n.g=!0,Vc(n,!0,null,i))}))})},Fc.prototype.h=function(t,e){var n,i,r,o,a;t?(n=t.c,i=t.b,t.a?(e.na(t.c,null,t.a,t.b),ye()):e.Fa(n,i)?(r=e,o=(t=t).b,a=t.c,r.Fa(a,o)(t.g,t.f,t.T(),t.i).then(function(t){r.na(a,t,null,o)}).o(function(t){r.na(a,null,t,o)})):we(new T("invalid-auth-event"))):we(new T("invalid-auth-event"))},Hc.prototype.confirm=function(t){return t=No(this.verificationId,t),this.a(t)};var Wc="mfaInfo",Xc="mfaPendingCredential";function Jc(t,e,n,i){T.call(this,"multi-factor-auth-required",i,e),this.b=new Bc(t,e,n),Vi(this,"resolver",this.b)}function Yc(t,e,n){if(t&&m(t.serverResponse)&&"auth/multi-factor-auth-required"===t.code)try{return new Jc(e,t.serverResponse,n,t.message)}catch(t){}return null}function zc(){}function $c(t){Vi(this,"factorId",t.fa),this.a=t}function Zc(t){if($c.call(this,t),this.a.fa!=So.PROVIDER_ID)throw new T("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")}function Qc(t,e){for(var n in Fe.call(this,t),e)this[n]=e[n]}function th(t,e){this.a=t,this.b=[],this.c=b(this.yc,this),Ze(this.a,"userReloaded",this.c);var i=[];e&&e.multiFactor&&e.multiFactor.enrolledFactors&&V(e.multiFactor.enrolledFactors,function(t){var e=null,n={};if(t){t.uid&&(n[Xi]=t.uid),t.displayName&&(n[Bi]=t.displayName),t.enrollmentTime&&(n[Wi]=new Date(t.enrollmentTime).toISOString()),t.phoneNumber&&(n[Ji]=t.phoneNumber);try{e=new Yi(n)}catch(t){}t=e}else t=null;t&&i.push(t)}),eh(this,i)}function eh(t,e){t.b=e,Vi(t,"enrolledFactors",e)}function nh(t,e,n){if(this.h=t,this.i=e,this.g=n,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function ih(t,e){return e?(t.a=t.c,t.g()):(e=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),e)}function rh(t){this.f=t,this.b=this.a=null,this.c=Date.now()}function oh(t,e){void 0===e&&(e=t.b?(e=t.b).a-e.g:0),t.c=Date.now()+1e3*e}function ah(t,e){t.b=Pr(e[Ha]||""),t.a=e.refreshToken,oh(t,void 0!==(e=e.expiresIn)?Number(e):void 0)}function sh(e,t){return i=e.f,r=t,new fe(function(e,n){"refresh_token"==r.grant_type&&r.refresh_token||"authorization_code"==r.grant_type&&r.code?$a(i,i.l+"?key="+encodeURIComponent(i.c),function(t){t?t.error?n(Ys(t)):t.access_token&&t.refresh_token?e(t):n(new T("internal-error")):n(new T("network-request-failed"))},"POST",qn(r).toString(),i.g,i.m.get()):n(new T("internal-error"))}).then(function(t){return e.b=Pr(t.access_token),e.a=t.refresh_token,oh(e,t.expires_in),{accessToken:e.b.toString(),refreshToken:e.a}}).o(function(t){throw"auth/user-token-expired"==t.code&&(e.a=null),t});var i,r}function uh(t,e){this.a=t||null,this.b=e||null,Fi(this,{lastSignInTime:Pi(e||null),creationTime:Pi(t||null)})}function ch(t,e,n,i,r,o){Fi(this,{uid:t,displayName:i||null,photoURL:r||null,email:n||null,phoneNumber:o||null,providerId:e})}function hh(t,e,n){this.J=[],this.l=t.apiKey,this.m=t.appName,this.s=t.authDomain||null;var i,r=zl.default.SDK_VERSION?mi(zl.default.SDK_VERSION):null;this.a=new Fa(this.l,_(A),r),t.emulatorConfig&&Ja(this.a,t.emulatorConfig),this.b=new rh(this.a),bh(this,e[Ha]),ah(this.b,e),Vi(this,"refreshToken",this.b.a),Ih(this,n||{}),ln.call(this),this.R=!1,this.s&&wi()&&(this.i=Lc(this.s,this.l,this.m)),this.S=[],this.h=null,this.u=(i=this,new nh(function(){return i.I(!0)},function(t){return!(!t||"auth/network-request-failed"!=t.code)},function(){var t=i.b.c-Date.now()-3e5;return 0<t?t:0})),this.aa=b(this.hb,this);var o=this;this.ya=null,this.Oa=function(t){o.wa(t.h)},this.ja=null,this.Aa=function(t){Ja(o.a,t.c)},this.X=null,this.$=[],this.Ba=function(t){dh(o,t.f)},this.ba=null,this.O=new th(this,n),Vi(this,"multiFactor",this.O)}function lh(t,e){t.ja&&en(t.ja,"languageCodeChanged",t.Oa),(t.ja=e)&&Ze(e,"languageCodeChanged",t.Oa)}function fh(t,e){t.X&&en(t.X,"emulatorConfigChanged",t.Aa),(t.X=e)&&Ze(e,"emulatorConfigChanged",t.Aa)}function dh(t,e){t.$=e,za(t.a,zl.default.SDK_VERSION?mi(zl.default.SDK_VERSION,t.$):null)}function ph(t,e){t.ba&&en(t.ba,"frameworkChanged",t.Ba),(t.ba=e)&&Ze(e,"frameworkChanged",t.Ba)}function vh(e){try{return zl.default.app(e.m).auth()}catch(t){throw new T("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+e.m+"'!")}}function mh(t){t.D||t.u.b||(t.u.start(),en(t,"tokenChanged",t.aa),Ze(t,"tokenChanged",t.aa))}function gh(t){en(t,"tokenChanged",t.aa),t.u.stop()}function bh(t,e){t.za=e,Vi(t,"_lat",e)}function yh(t){for(var e=[],n=0;n<t.S.length;n++)e.push(t.S[n](t));return Te(e).then(function(){return t})}function wh(t){t.i&&!t.R&&(t.R=!0,Ac(t.i,t))}function Ih(t,e){Fi(t,{uid:e.uid,displayName:e.displayName||null,photoURL:e.photoURL||null,email:e.email||null,emailVerified:e.emailVerified||!1,phoneNumber:e.phoneNumber||null,isAnonymous:e.isAnonymous||!1,tenantId:e.tenantId||null,metadata:new uh(e.createdAt,e.lastLoginAt),providerData:[]}),t.a.b=t.tenantId}function Th(){}function Eh(t){return ye().then(function(){if(t.D)throw new T("app-deleted")})}function Ah(t){return q(t.providerData,function(t){return t.providerId})}function kh(t,e){e&&(Sh(t,e.providerId),t.providerData.push(e))}function Sh(t,e){B(t.providerData,function(t){return t.providerId==e})}function Nh(t,e,n){("uid"!=e||n)&&t.hasOwnProperty(e)&&Vi(t,e,n)}function _h(e,t){var n,i;e!=t&&(Fi(e,{uid:t.uid,displayName:t.displayName,photoURL:t.photoURL,email:t.email,emailVerified:t.emailVerified,phoneNumber:t.phoneNumber,isAnonymous:t.isAnonymous,tenantId:t.tenantId,providerData:[]}),t.metadata?Vi(e,"metadata",new uh((i=t.metadata).a,i.b)):Vi(e,"metadata",new uh),V(t.providerData,function(t){kh(e,t)}),n=e.b,i=t.b,n.b=i.b,n.a=i.a,n.c=i.c,Vi(e,"refreshToken",e.b.a),eh(e.O,t.O.b))}function Oh(r){return r.I().then(function(t){var e,n,i=r.isAnonymous;return n=t,Xs((e=r).a,As,{idToken:n}).then(b(e.Kc,e)).then(function(){return i||Nh(r,"isAnonymous",!1),t})})}function Ch(t,e){e[Ha]&&t.za!=e[Ha]&&(ah(t.b,e),t.dispatchEvent(new Qc("tokenChanged")),bh(t,e[Ha]),Nh(t,"refreshToken",t.b.a))}function Rh(t,e){return Oh(t).then(function(){if(K(Ah(t),e))return yh(t).then(function(){throw new T("provider-already-linked")})})}function Dh(t,e,n){return qi({user:t,credential:_o(e),additionalUserInfo:e=Vr(e),operationType:n})}function Ph(t,e){return Ch(t,e),t.reload().then(function(){return t})}function Lh(n,i,t,e,r){if(!wi())return we(new T("operation-not-supported-in-this-environment"));if(n.h&&!r)return we(n.h);var o=Ur(t.providerId),a=Ni(n.uid+":::"),s=null,u=ii(s=(!Ei()||ui())&&n.s&&t.isOAuthProvider?uu(n.s,n.l,n.m,i,t,null,a,zl.default.SDK_VERSION||null,null,null,n.tenantId):s,o&&o.ua,o&&o.ta);return e=e().then(function(){if(Mh(n),!r)return n.I().then(function(){})}).then(function(){return _c(n.i,u,i,t,a,!!s,n.tenantId)}).then(function(){return new fe(function(t,e){n.na(i,null,new T("cancelled-popup-request"),n.g||null),n.f=t,n.C=e,n.g=a,n.c=Rc(n.i,n,i,u,a)})}).then(function(t){return u&&ni(u),t?qi(t):null}).o(function(t){throw u&&ni(u),t}),jh(n,e,r)}function xh(e,t,n,i,r){if(!wi())return we(new T("operation-not-supported-in-this-environment"));if(e.h&&!r)return we(e.h);var o=null,a=Ni(e.uid+":::");return i=i().then(function(){if(Mh(e),!r)return e.I().then(function(){})}).then(function(){return e.ga=a,yh(e)}).then(function(t){return t=e.ha?(t=e.ha).b.set(Fh,e.w(),t.a):t}).then(function(){return Cc(e.i,t,n,a,e.tenantId)}).o(function(t){if(o=t,e.ha)return qh(e.ha);throw o}).then(function(){if(o)throw o}),jh(e,i,r)}function Mh(t){if(!t.i||!t.R){if(t.i&&!t.R)throw new T("internal-error");throw new T("auth-domain-config-required")}}function jh(n,t,e){var i,r=(t=t,e=e,(i=n).h&&!e?(t.cancel(),we(i.h)):t.o(function(t){throw!t||"auth/user-disabled"!=t.code&&"auth/user-token-expired"!=t.code||(i.h||i.dispatchEvent(new Qc("userInvalidated")),i.h=t),t}));return n.J.push(r),r.oa(function(){G(n.J,r)}),r.o(function(t){var e=null;throw(e=t&&"auth/multi-factor-auth-required"===t.code?Yc(t.w(),vh(n),b(n.jc,n)):e)||t})}function Uh(t){if(!t.apiKey)return null;var e={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName,emulatorConfig:t.emulatorConfig},n={};if(!t.stsTokenManager||!t.stsTokenManager.accessToken)return null;n[Ha]=t.stsTokenManager.accessToken,n.refreshToken=t.stsTokenManager.refreshToken||null;var i=t.stsTokenManager.expirationTime;i&&(n.expiresIn=(i-Date.now())/1e3);var r=new hh(e,n,t);return t.providerData&&V(t.providerData,function(t){t&&kh(r,qi(t))}),t.redirectEventId&&(r.ga=t.redirectEventId),r}function Vh(t){this.a=t,this.b=Bu()}Bc.prototype.Rc=function(t){var n=this;return t.sb(this.a.a,this.c).then(function(t){var e=ct(n.f);return delete e[Wc],delete e[Xc],lt(e,t),n.g(e)})},w(Jc,T),zc.prototype.sb=function(t,e,n){return e.type==zr?(o=this,a=t,s=n,e.Ha().then(function(t){return t={idToken:t},void 0!==s&&(t.displayName=s),lt(t,{phoneVerificationInfo:ko(o.a)}),Xs(a,Ts,t)})):(i=this,r=t,e.Ha().then(function(t){return lt(t={mfaPendingCredential:t},{phoneVerificationInfo:ko(i.a)}),Xs(r,Es,t)}));var i,r,o,a,s},w($c,zc),w(Zc,$c),w(Qc,Fe),(t=th.prototype).yc=function(t){var e;eh(this,(t=t.hd,e=[],V(t.mfaInfo||[],function(t){(t=Gi(t))&&e.push(t)}),e))},t.Rb=function(){return this.a.I().then(function(t){return new Yr(t,null)})},t.fc=function(e,n){var i=this,r=this.a.a;return this.Rb().then(function(t){return e.sb(r,t,n)}).then(function(t){return Ch(i.a,t),i.a.reload()})},t.bd=function(t){var n=this,i="string"==typeof t?t:t.uid,e=this.a.a;return this.a.I().then(function(t){return Xs(e,Ws,{idToken:t,mfaEnrollmentId:i})}).then(function(t){var e=F(n.b,function(t){return t.uid!=i});return eh(n,e),Ch(n.a,t),n.a.reload().o(function(t){if("auth/user-token-expired"!=t.code)throw t})})},t.w=function(){return{multiFactor:{enrolledFactors:q(this.b,function(t){return t.w()})}}},nh.prototype.start=function(){this.a=this.c,function e(n,t){n.stop();n.b=mn(ih(n,t)).then(Di).then(function(){return n.h()}).then(function(){e(n,!0)}).o(function(t){n.i(t)&&e(n,!1)})}(this,!0)},nh.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},rh.prototype.w=function(){return{apiKey:this.f.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:this.c}},rh.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?we(new T("user-token-expired")):t||!this.b||Date.now()>this.c-3e4?this.a?sh(this,{grant_type:"refresh_token",refresh_token:this.a}):ye(null):ye({accessToken:this.b.toString(),refreshToken:this.a})},uh.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}},w(hh,ln),hh.prototype.wa=function(t){this.ya=t,Xa(this.a,t)},hh.prototype.la=function(){return this.ya},hh.prototype.Ga=function(){return X(this.$)},hh.prototype.hb=function(){this.u.b&&(this.u.stop(),this.u.start())},Vi(hh.prototype,"providerId","firebase"),(t=hh.prototype).reload=function(){var t=this;return jh(this,Eh(this).then(function(){return Oh(t).then(function(){return yh(t)}).then(Th)}))},t.oc=function(t){return this.I(t).then(function(t){return new Gc(t)})},t.I=function(t){var e=this;return jh(this,Eh(this).then(function(){return e.b.getToken(t)}).then(function(t){if(!t)throw new T("internal-error");return t.accessToken!=e.za&&(bh(e,t.accessToken),e.dispatchEvent(new Qc("tokenChanged"))),Nh(e,"refreshToken",t.refreshToken),t.accessToken}))},t.Kc=function(t){if(!(t=t.users)||!t.length)throw new T("internal-error");Ih(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt,tenantId:t.tenantId});for(var e,n=(e=(e=t).providerUserInfo)&&e.length?q(e,function(t){return new ch(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)}):[],i=0;i<n.length;i++)kh(this,n[i]);Nh(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length)),this.dispatchEvent(new Qc("userReloaded",{hd:t}))},t.Lc=function(t){return ji("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.tb(t)},t.tb=function(t){var e=this,n=null;return jh(this,t.c(this.a,this.uid).then(function(t){return Ch(e,t),n=Dh(e,t,"reauthenticate"),e.h=null,e.reload()}).then(function(){return n}),!0)},t.Cc=function(t){return ji("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.qb(t)},t.qb=function(e){var n=this,i=null;return jh(this,Rh(this,e.providerId).then(function(){return n.I()}).then(function(t){return e.b(n.a,t)}).then(function(t){return i=Dh(n,t,"link"),Ph(n,t)}).then(function(){return i}))},t.Dc=function(t,e){var n=this;return jh(this,Rh(this,"phone").then(function(){return Kc(vh(n),t,e,b(n.qb,n))}))},t.Mc=function(t,e){var n=this;return jh(this,ye().then(function(){return Kc(vh(n),t,e,b(n.tb,n))}),!0)},t.Bb=function(e){var n=this;return jh(this,this.I().then(function(t){return n.a.Bb(t,e)}).then(function(t){return Ch(n,t),n.reload()}))},t.ed=function(e){var n=this;return jh(this,this.I().then(function(t){return e.b(n.a,t)}).then(function(t){return Ch(n,t),n.reload()}))},t.Cb=function(e){var n=this;return jh(this,this.I().then(function(t){return n.a.Cb(t,e)}).then(function(t){return Ch(n,t),n.reload()}))},t.Db=function(e){if(void 0===e.displayName&&void 0===e.photoURL)return Eh(this);var n=this;return jh(this,this.I().then(function(t){return n.a.Db(t,{displayName:e.displayName,photoUrl:e.photoURL})}).then(function(t){return Ch(n,t),Nh(n,"displayName",t.displayName||null),Nh(n,"photoURL",t.photoUrl||null),V(n.providerData,function(t){"password"===t.providerId&&(Vi(t,"displayName",n.displayName),Vi(t,"photoURL",n.photoURL))}),yh(n)}).then(Th))},t.cd=function(e){var n=this;return jh(this,Oh(this).then(function(t){return K(Ah(n),e)?Xs(n.a,ys,{idToken:t,deleteProvider:[e]}).then(function(t){var e={};return V(t.providerUserInfo||[],function(t){e[t.providerId]=!0}),V(Ah(n),function(t){e[t]||Sh(n,t)}),e[So.PROVIDER_ID]||Vi(n,"phoneNumber",null),yh(n)}):yh(n).then(function(){throw new T("no-such-provider")})}))},t.delete=function(){var e=this;return jh(this,this.I().then(function(t){return Xs(e.a,bs,{idToken:t})}).then(function(){e.dispatchEvent(new Qc("userDeleted"))})).then(function(){for(var t=0;t<e.J.length;t++)e.J[t].cancel("app-deleted");lh(e,null),fh(e,null),ph(e,null),e.J=[],e.D=!0,gh(e),Vi(e,"refreshToken",null),e.i&&kc(e.i,e)})},t.Fb=function(t,e){return!!("linkViaPopup"==t&&(this.g||null)==e&&this.f||"reauthViaPopup"==t&&(this.g||null)==e&&this.f||"linkViaRedirect"==t&&(this.ga||null)==e||"reauthViaRedirect"==t&&(this.ga||null)==e)},t.na=function(t,e,n,i){"linkViaPopup"!=t&&"reauthViaPopup"!=t||i!=(this.g||null)||(n&&this.C?this.C(n):e&&!n&&this.f&&this.f(e),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C)},t.Fa=function(t,e){return"linkViaPopup"==t&&e==(this.g||null)?b(this.Kb,this):"reauthViaPopup"==t&&e==(this.g||null)?b(this.Lb,this):"linkViaRedirect"==t&&(this.ga||null)==e?b(this.Kb,this):"reauthViaRedirect"==t&&(this.ga||null)==e?b(this.Lb,this):null},t.Ec=function(t){var e=this;return Lh(this,"linkViaPopup",t,function(){return Rh(e,t.providerId).then(function(){return yh(e)})},!1)},t.Nc=function(t){return Lh(this,"reauthViaPopup",t,function(){return ye()},!0)},t.Fc=function(t){var e=this;return xh(this,"linkViaRedirect",t,function(){return Rh(e,t.providerId)},!1)},t.Oc=function(t){return xh(this,"reauthViaRedirect",t,function(){return ye()},!0)},t.Kb=function(e,n,t,i){var r=this;this.c&&(this.c.cancel(),this.c=null);var o=null;return t=this.I().then(function(t){return ls(r.a,{requestUri:e,postBody:i,sessionId:n,idToken:t})}).then(function(t){return o=Dh(r,t,"link"),Ph(r,t)}).then(function(){return o}),jh(this,t)},t.Lb=function(t,e,n,i){var r=this;this.c&&(this.c.cancel(),this.c=null);var o=null;return jh(this,ye().then(function(){return Qr(fs(r.a,{requestUri:t,sessionId:e,postBody:i,tenantId:n}),r.uid)}).then(function(t){return o=Dh(r,t,"reauthenticate"),Ch(r,t),r.h=null,r.reload()}).then(function(){return o}),!0)},t.ub=function(e){var n=this,i=null;return jh(this,this.I().then(function(t){return i=t,void 0===e||ut(e)?{}:Or(new yr(e))}).then(function(t){return n.a.ub(i,t)}).then(function(t){if(n.email!=t)return n.reload()}).then(function(){}))},t.Eb=function(e,n){var i=this,r=null;return jh(this,this.I().then(function(t){return r=t,void 0===n||ut(n)?{}:Or(new yr(n))}).then(function(t){return i.a.Eb(r,e,t)}).then(function(t){if(i.email!=t)return i.reload()}).then(function(){}))},t.jc=function(t){var e=null,n=this;return jh(this,t=Qr(ye(t),n.uid).then(function(t){return e=Dh(n,t,"reauthenticate"),Ch(n,t),n.h=null,n.reload()}).then(function(){return e}),!0)},t.toJSON=function(){return this.w()},t.w=function(){var e={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.s,stsTokenManager:this.b.w(),redirectEventId:this.ga||null};return this.metadata&&lt(e,this.metadata.w()),V(this.providerData,function(t){e.providerData.push(function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}(t))}),lt(e,this.O.w()),e};var Fh={name:"redirectUser",F:"session"};function qh(t){return Ju(t.b,Fh,t.a)}function Hh(t){var e,n,i,r;this.a=t,this.b=Bu(),this.c=null,this.f=(n=Bh("local"),i=Bh("session"),r=Bh("none"),function(n,i,r){var o=Xu(i,r),a=Wu(n,i.F);return n.get(i,r).then(function(t){var e=null;try{e=Si(l.localStorage.getItem(o))}catch(t){}if(e&&!t)return l.localStorage.removeItem(o),n.set(i,e,r);e&&t&&"localStorage"!=a.type&&l.localStorage.removeItem(o)})}((e=this).b,n,e.a).then(function(){return e.b.get(i,e.a)}).then(function(t){return t?i:e.b.get(r,e.a).then(function(t){return t?r:e.b.get(n,e.a).then(function(t){return t?n:e.b.get(Gh,e.a).then(function(t){return t?Bh(t):n})})})}).then(function(t){return e.c=t,Kh(e,t.F)}).o(function(){e.c||(e.c=n)})),this.b.addListener(Bh("local"),this.a,b(this.g,this))}function Kh(t,e){var n,s,i=[];for(n in Ku)Ku[n]!==e&&i.push(Ju(t.b,Bh(Ku[n]),t.a));return i.push(Ju(t.b,Gh,t.a)),s=i,new fe(function(n,e){var i=s.length,r=[];if(i)for(var t=function(t,e){i--,r[t]=e,0==i&&n(r)},o=function(t){e(t)},a=0;a<s.length;a++)Ie(s[a],y(t,a),o);else n(r)})}Hh.prototype.g=function(){var e=this,n=Bh("local");Yh(this,function(){return ye().then(function(){return e.c&&"local"!=e.c.F?e.b.get(n,e.a):null}).then(function(t){if(t)return Kh(e,"local").then(function(){e.c=n})})})};var Gh={name:"persistence",F:"session"};function Bh(t){return{name:"authUser",F:t}}function Wh(t,e){return Yh(t,function(){return t.b.set(t.c,e.w(),t.a)})}function Xh(t){return Yh(t,function(){return Ju(t.b,t.c,t.a)})}function Jh(t,e,n){return Yh(t,function(){return t.b.get(t.c,t.a).then(function(t){return t&&e&&(t.authDomain=e),t&&n&&(t.emulatorConfig=n),Uh(t||{})})})}function Yh(t,e){return t.f=t.f.then(e,e),t.f}function zh(t){if(this.l=!1,Vi(this,"settings",new qc),Vi(this,"app",t),!this.app.options||!this.app.options.apiKey)throw new T("invalid-api-key");var n,e,i,r,o,a;t=zl.default.SDK_VERSION?mi(zl.default.SDK_VERSION):null,this.a=new Fa(this.app.options&&this.app.options.apiKey,_(A),t),this.R=[],this.s=[],this.O=[],this.hb=zl.default.INTERNAL.createSubscribe(b(this.zc,this)),this.X=void 0,this.bc=zl.default.INTERNAL.createSubscribe(b(this.Ac,this)),il(this,null),this.i=new Hh(this.app.options.apiKey+":"+this.app.name),this.D=new Vh(this.app.options.apiKey+":"+this.app.name),this.$=ul(this,(e=(n=this).app.options.authDomain,t=function(e){var t=function(t,e){return t.b.get(Fh,t.a).then(function(t){return t&&e&&(t.authDomain=e),Uh(t||{})})}(e.D,e.app.options.authDomain).then(function(t){return(e.m=t)&&(t.ha=e.D),qh(e.D)});return ul(e,t)}(n).then(function(){return Jh(n.i,e,n.P)}).then(function(e){return e?(e.ha=n.D,n.m&&(n.m.ga||null)==(e.ga||null)?e:e.reload().then(function(){return Wh(n.i,e).then(function(){return e})}).o(function(t){return"auth/network-request-failed"==t.code?e:Xh(n.i)})):null}).then(function(t){il(n,t||null)}),ul(n,t))),this.h=ul(this,(i=this).$.then(function(){return el(i)}).o(function(){}).then(function(){if(!i.l)return i.ja()}).o(function(){}).then(function(){var t;i.l||(i.ba=!0,(t=i.i).b.addListener(Bh("local"),t.a,i.ja))})),this.ba=!1,this.ja=b(this.Zc,this),this.Ba=b(this.da,this),this.ya=b(this.mc,this),this.za=b(this.wc,this),this.Aa=b(this.xc,this),this.b=null,o=(r=this).app.options.authDomain,a=r.app.options.apiKey,o&&wi()&&(r.Oa=r.$.then(function(){var t;if(!r.l)return r.b=Lc(o,a,r.app.name,r.P),Ac(r.b,r),ol(r)&&wh(ol(r)),r.m&&(wh(r.m),(t=r.m).wa(r.la()),lh(t,r),dh(t=r.m,r.J),ph(t,r),Ja((t=r.m).a,r.P),fh(t,r),r.m=null),r.b})),this.INTERNAL={},this.INTERNAL.delete=b(this.delete,this),this.INTERNAL.logFramework=b(this.Gc,this),this.u=0,ln.call(this),t=this,Object.defineProperty(t,"lc",{get:function(){return this.la()},set:function(t){this.wa(t)},enumerable:!1}),t.aa=null,Object.defineProperty(t,"ti",{get:function(){return this.T()},set:function(t){this.yb(t)},enumerable:!1}),t.S=null,Object.defineProperty(t,"emulatorConfig",{get:function(){var t;return t=this.P?qi({protocol:(t=On(this.P.url)).c,host:t.a,port:t.g,options:qi({disableWarnings:this.P.ec})}):null},enumerable:!1}),this.J=[],this.P=null}function $h(t){Fe.call(this,"languageCodeChanged"),this.h=t}function Zh(t){Fe.call(this,"emulatorConfigChanged"),this.c=t}function Qh(t){Fe.call(this,"frameworkChanged"),this.f=t}function tl(t){return t.Oa||we(new T("auth-domain-config-required"))}function el(t){if(!wi())return we(new T("operation-not-supported-in-this-environment"));var e=tl(t).then(function(){return t.b.qa()}).then(function(t){return t?qi(t):null});return ul(t,e)}function nl(o,a){var s={};return s.apiKey=o.app.options.apiKey,s.authDomain=o.app.options.authDomain,s.appName=o.app.name,o.P&&(s.emulatorConfig=o.P),o.$.then(function(){return t=s,e=a,n=o.D,i=o.Ga(),r=new hh(t,e),n&&(r.ha=n),i&&dh(r,i),r.reload().then(function(){return r});var t,e,n,i,r}).then(function(t){return ol(o)&&t.uid==ol(o).uid?_h(ol(o),t):(il(o,t),wh(t)),o.da(t)}).then(function(){sl(o)})}function il(t,e){var n,i;ol(t)&&(n=ol(t),i=t.Ba,B(n.S,function(t){return t==i}),en(ol(t),"tokenChanged",t.ya),en(ol(t),"userDeleted",t.za),en(ol(t),"userInvalidated",t.Aa),gh(ol(t))),e&&(e.S.push(t.Ba),Ze(e,"tokenChanged",t.ya),Ze(e,"userDeleted",t.za),Ze(e,"userInvalidated",t.Aa),0<t.u&&mh(e)),Vi(t,"currentUser",e),e&&(e.wa(t.la()),lh(e,t),dh(e,t.J),ph(e,t),Ja(e.a,t.P),fh(e,t))}function rl(n,t){var e=null,i=null;return ul(n,t.then(function(t){return e=_o(t),i=Vr(t),nl(n,t)},function(t){var e=null;throw(e=t&&"auth/multi-factor-auth-required"===t.code?Yc(t.w(),n,b(n.kc,n)):e)||t}).then(function(){return qi({user:ol(n),credential:e,additionalUserInfo:i,operationType:"signIn"})}))}function ol(t){return t.currentUser}function al(t){return ol(t)&&ol(t)._lat||null}function sl(t){if(t.ba){for(var e=0;e<t.s.length;e++)t.s[e]&&t.s[e](al(t));if(t.X!==t.getUid()&&t.O.length)for(t.X=t.getUid(),e=0;e<t.O.length;e++)t.O[e]&&t.O[e](al(t))}}function ul(t,e){return t.R.push(e),e.oa(function(){G(t.R,e)}),e}function cl(){}function hl(){this.a={},this.b=1e12}Hh.prototype.xb=function(e){var n=null,i=this;return function(t){var e=new T("invalid-persistence-type"),n=new T("unsupported-persistence-type");t:{for(i in Ku)if(Ku[i]==t){var i=!0;break t}i=!1}if(!i||"string"!=typeof t)throw e;switch(hi()){case"ReactNative":if("session"===t)throw n;break;case"Node":if("none"!==t)throw n;break;case"Worker":if("session"===t||!Tu()&&"none"!==t)throw n;break;default:if(!yi()&&"none"!==t)throw n}}(e),Yh(this,function(){return e!=i.c.F?i.b.get(i.c,i.a).then(function(t){return n=t,Kh(i,e)}).then(function(){if(i.c=Bh(e),n)return i.b.set(i.c,n,i.a)}):ye()})},w(zh,ln),w($h,Fe),w(Zh,Fe),w(Qh,Fe),(t=zh.prototype).xb=function(t){return t=this.i.xb(t),ul(this,t)},t.wa=function(t){this.aa===t||this.l||(this.aa=t,Xa(this.a,this.aa),this.dispatchEvent(new $h(this.la())))},t.la=function(){return this.aa},t.fd=function(){var t=l.navigator;this.wa(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.gd=function(t,e){if(!this.P){if(!/^https?:\/\//.test(t))throw new T("argument-error","Emulator URL must start with a valid scheme (http:// or https://).");e=!!e&&!!e.disableWarnings,n=e,"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),l.document&&!n&&ai().then(function(){var t=l.document.createElement("div");t.innerText="Running in emulator mode. Do not use with production credentials.",t.style.position="fixed",t.style.width="100%",t.style.backgroundColor="#ffffff",t.style.border=".1em solid #000000",t.style.color="#ff0000",t.style.bottom="0px",t.style.left="0px",t.style.margin="0px",t.style.zIndex=1e4,t.style.textAlign="center",t.classList.add("firebase-emulator-warning"),l.document.body.appendChild(t)}),this.P={url:t,ec:e},this.settings.ib=!0,Ja(this.a,this.P),this.dispatchEvent(new Zh(this.P))}var n},t.Gc=function(t){this.J.push(t),za(this.a,zl.default.SDK_VERSION?mi(zl.default.SDK_VERSION,this.J):null),this.dispatchEvent(new Qh(this.J))},t.Ga=function(){return X(this.J)},t.yb=function(t){this.S===t||this.l||(this.S=t,this.a.b=this.S)},t.T=function(){return this.S},t.toJSON=function(){return{apiKey:this.app.options.apiKey,authDomain:this.app.options.authDomain,appName:this.app.name,currentUser:ol(this)&&ol(this).w()}},t.Fb=function(t,e){switch(t){case"unknown":case"signInViaRedirect":return!0;case"signInViaPopup":return this.g==e&&!!this.f;default:return!1}},t.na=function(t,e,n,i){"signInViaPopup"==t&&this.g==i&&(n&&this.C?this.C(n):e&&!n&&this.f&&this.f(e),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C)},t.Fa=function(t,e){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.g==e&&this.f?b(this.ic,this):null},t.ic=function(t,e,n,i){var r=this,o={requestUri:t,postBody:i,sessionId:e,tenantId:n};return this.c&&(this.c.cancel(),this.c=null),r.$.then(function(){return rl(r,hs(r.a,o))})},t.Xc=function(e){if(!wi())return we(new T("operation-not-supported-in-this-environment"));var n=this,t=Ur(e.providerId),i=Ni(),r=null,o=ii(r=(!Ei()||ui())&&this.app.options.authDomain&&e.isOAuthProvider?uu(this.app.options.authDomain,this.app.options.apiKey,this.app.name,"signInViaPopup",e,null,i,zl.default.SDK_VERSION||null,null,null,this.T(),this.P):r,t&&t.ua,t&&t.ta);return ul(this,t=tl(this).then(function(t){return _c(t,o,"signInViaPopup",e,i,!!r,n.T())}).then(function(){return new fe(function(t,e){n.na("signInViaPopup",null,new T("cancelled-popup-request"),n.g),n.f=t,n.C=e,n.g=i,n.c=Rc(n.b,n,"signInViaPopup",o,i)})}).then(function(t){return o&&ni(o),t?qi(t):null}).o(function(t){throw o&&ni(o),t}))},t.Yc=function(t){if(!wi())return we(new T("operation-not-supported-in-this-environment"));var e=this;return ul(this,tl(this).then(function(){return Yh(t=e.i,function(){return t.b.set(Gh,t.c.F,t.a)});var t}).then(function(){return Cc(e.b,"signInViaRedirect",t,void 0,e.T())}))},t.qa=function(){var e=this;return el(this).then(function(t){return e.b&&jc(e.b.b),t}).o(function(t){throw e.b&&jc(e.b.b),t})},t.dd=function(t){if(!t)return we(new T("null-user"));if(this.S!=t.tenantId)return we(new T("tenant-id-mismatch"));var e=this,n={};n.apiKey=this.app.options.apiKey,n.authDomain=this.app.options.authDomain,n.appName=this.app.name;var i,r,o,a,s,u=(i=t,r=n,o=e.D,a=e.Ga(),s=i.b,(n={})[Ha]=s.b&&s.b.toString(),n.refreshToken=s.a,r=new hh(r||{apiKey:i.l,authDomain:i.s,appName:i.m},n),o&&(r.ha=o),a&&dh(r,a),_h(r,i),r);return ul(this,this.h.then(function(){if(e.app.options.apiKey!=t.l)return u.reload()}).then(function(){return ol(e)&&t.uid==ol(e).uid?(_h(ol(e),t),e.da(t)):(il(e,u),wh(u),e.da(u))}).then(function(){sl(e)}))},t.Ab=function(){var t=this,e=this.h.then(function(){return t.b&&jc(t.b.b),ol(t)?(il(t,null),Xh(t.i).then(function(){sl(t)})):ye()});return ul(this,e)},t.Zc=function(){var i=this;return Jh(this.i,this.app.options.authDomain).then(function(t){if(!i.l){var e,n;if((e=ol(i)&&t)&&(e=ol(i).uid,n=t.uid,e=null!=e&&""!==e&&null!=n&&""!==n&&e==n),e)return _h(ol(i),t),ol(i).I();(ol(i)||t)&&(il(i,t),t&&(wh(t),t.ha=i.D),i.b&&Ac(i.b,i),sl(i))}})},t.da=function(t){return Wh(this.i,t)},t.mc=function(){sl(this),this.da(ol(this))},t.wc=function(){this.Ab()},t.xc=function(){this.Ab()},t.kc=function(t){var e=this;return this.h.then(function(){return rl(e,ye(t))})},t.zc=function(t){var e=this;this.addAuthTokenListener(function(){t.next(ol(e))})},t.Ac=function(t){var e,n,i=this;n=function(){t.next(ol(i))},(e=this).O.push(n),ul(e,e.h.then(function(){!e.l&&K(e.O,n)&&e.X!==e.getUid()&&(e.X=e.getUid(),n(al(e)))}))},t.Ic=function(t,e,n){var i=this;return this.ba&&Promise.resolve().then(function(){"function"==typeof t?t(ol(i)):"function"==typeof t.next&&t.next(ol(i))}),this.hb(t,e,n)},t.Hc=function(t,e,n){var i=this;return this.ba&&Promise.resolve().then(function(){i.X=i.getUid(),"function"==typeof t?t(ol(i)):"function"==typeof t.next&&t.next(ol(i))}),this.bc(t,e,n)},t.nc=function(t){var e=this,n=this.h.then(function(){return ol(e)?ol(e).I(t).then(function(t){return{accessToken:t}}):null});return ul(this,n)},t.Tc=function(t){var n=this;return this.h.then(function(){return rl(n,Xs(n.a,qs,{token:t}))}).then(function(t){var e=t.user;return Nh(e,"isAnonymous",!1),n.da(e),t})},t.Uc=function(t,e){var n=this;return this.h.then(function(){return rl(n,Xs(n.a,Hs,{email:t,password:e}))})},t.dc=function(t,e){var n=this;return this.h.then(function(){return rl(n,Xs(n.a,ms,{email:t,password:e}))})},t.$a=function(t){var e=this;return this.h.then(function(){return rl(e,t.ka(e.a))})},t.Sc=function(t){return ji("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.$a(t)},t.zb=function(){var n=this;return this.h.then(function(){var t=ol(n);if(t&&t.isAnonymous){var e=qi({providerId:null,isNewUser:!1});return qi({user:t,credential:null,additionalUserInfo:e,operationType:"signIn"})}return rl(n,n.a.zb()).then(function(t){var e=t.user;return Nh(e,"isAnonymous",!0),n.da(e),t})})},t.getUid=function(){return ol(this)&&ol(this).uid||null},t.cc=function(t){this.addAuthTokenListener(t),this.u++,0<this.u&&ol(this)&&mh(ol(this))},t.Pc=function(e){var n=this;V(this.s,function(t){t==e&&n.u--}),this.u<0&&(this.u=0),0==this.u&&ol(this)&&gh(ol(this)),this.removeAuthTokenListener(e)},t.addAuthTokenListener=function(t){var e=this;this.s.push(t),ul(this,this.h.then(function(){e.l||K(e.s,t)&&t(al(e))}))},t.removeAuthTokenListener=function(e){B(this.s,function(t){return t==e})},t.delete=function(){this.l=!0;for(var t=0;t<this.R.length;t++)this.R[t].cancel("app-deleted");return this.R=[],this.i&&(t=this.i).b.removeListener(Bh("local"),t.a,this.ja),this.b&&(kc(this.b,this),jc(this.b.b)),Promise.resolve()},t.hc=function(t){return ul(this,Xs(this.a,gs,{identifier:t,continueUri:Ii()?Qn():"http://localhost"}).then(function(t){return t.signinMethods||[]}))},t.Bc=function(t){return!!To(t)},t.wb=function(e,n){var i=this;return ul(this,ye().then(function(){var t=new yr(n);if(!t.c)throw new T("argument-error",Tr+" must be true when sending sign in link to email");return Or(t)}).then(function(t){return i.a.wb(e,t)}).then(function(){}))},t.jd=function(t){return this.Ra(t).then(function(t){return t.data.email})},t.nb=function(t,e){return ul(this,this.a.nb(t,e).then(function(){}))},t.Ra=function(t){return ul(this,this.a.Ra(t).then(function(t){return new zi(t)}))},t.jb=function(t){return ul(this,this.a.jb(t).then(function(){}))},t.vb=function(e,t){var n=this;return ul(this,ye().then(function(){return void 0===t||ut(t)?{}:Or(new yr(t))}).then(function(t){return n.a.vb(e,t)}).then(function(){}))},t.Wc=function(t,e){return ul(this,Kc(this,t,e,b(this.$a,this)))},t.Vc=function(n,i){var r=this;return ul(this,ye().then(function(){var t=i||Qn(),e=Io(n,t);if(!(t=To(t)))throw new T("argument-error","Invalid email link!");if(t.tenantId!==r.T())throw new T("tenant-id-mismatch");return r.$a(e)}))},cl.prototype.render=function(){},cl.prototype.reset=function(){},cl.prototype.getResponse=function(){},cl.prototype.execute=function(){};var ll=null;function fl(t,e){return(e=dl(e))&&t.a[e]||null}function dl(t){return(t=void 0===t?1e12:t)?t.toString():null}function pl(t,e){this.g=!1,this.c=e,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=te(t);var n=this;this.i=function(){n.execute()},this.h?this.execute():Ze(this.f,"click",this.i)}function vl(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function ml(){}function gl(){}hl.prototype.render=function(t,e){return this.a[this.b.toString()]=new pl(t,e),this.b++},hl.prototype.reset=function(t){var e=fl(this,t);t=dl(t),e&&t&&(e.delete(),delete this.a[t])},hl.prototype.getResponse=function(t){return(t=fl(this,t))?t.getResponse():null},hl.prototype.execute=function(t){(t=fl(this,t))&&t.execute()},pl.prototype.getResponse=function(){return vl(this),this.b},pl.prototype.execute=function(){vl(this);var n=this;this.a||(this.a=setTimeout(function(){n.b=function(){for(var t=50,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return e.join("")}();var t=n.c.callback,e=n.c["expired-callback"];if(t)try{t(n.b)}catch(t){}n.a=setTimeout(function(){if(n.a=null,n.b=null,e)try{e()}catch(t){}n.h&&n.execute()},6e4)},500))},pl.prototype.delete=function(){vl(this),this.g=!0,clearTimeout(this.a),this.a=null,en(this.f,"click",this.i)},Vi(ml,"FACTOR_ID","phone"),gl.prototype.g=function(){return ye(ll=ll||new hl)},gl.prototype.c=function(){};var bl=null;function yl(){this.b=l.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var wl=new dt(gt,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Il=new Ci(3e4,6e4);yl.prototype.g=function(r){var o=this;return new fe(function(t,e){var i=setTimeout(function(){e(new T("network-request-failed"))},Il.get());!l.grecaptcha||r!==o.f&&!o.b?(l[o.a]=function(){var n;l.grecaptcha?(o.f=r,n=l.grecaptcha.render,l.grecaptcha.render=function(t,e){return t=n(t,e),o.b++,t},clearTimeout(i),t(l.grecaptcha)):(clearTimeout(i),e(new T("internal-error"))),delete l[o.a]},ye(Pa(It(wl,{onload:o.a,hl:r||""}))).o(function(){clearTimeout(i),e(new T("internal-error","Unable to load external reCAPTCHA dependencies!"))})):(clearTimeout(i),t(l.grecaptcha))})},yl.prototype.c=function(){this.b--};var Tl=null;function El(t,e,n,i,r,o,a){if(Vi(this,"type","recaptcha"),this.c=this.f=null,this.D=!1,this.v=e,this.g=null,a=a?bl=bl||new gl:Tl=Tl||new yl,this.m=a,this.a=n||{theme:"light",type:"image"},this.h=[],this.a[Sl])throw new T("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");if(this.i="invisible"===this.a[Nl],!l.document)throw new T("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");if(!te(e)||!this.i&&te(e).hasChildNodes())throw new T("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.s=new Fa(t,o||null,r||null),this.u=i||function(){return null};var s=this;this.l=[];var u=this.a[Al];this.a[Al]=function(t){var e;_l(s,t),"function"==typeof u?u(t):"string"!=typeof u||"function"==typeof(e=bi(u,l))&&e(t)};var c=this.a[kl];this.a[kl]=function(){var t;_l(s,null),"function"==typeof c?c():"string"!=typeof c||"function"==typeof(t=bi(c,l))&&t()}}var Al="callback",kl="expired-callback",Sl="sitekey",Nl="size";function _l(t,e){for(var n=0;n<t.l.length;n++)try{t.l[n](e)}catch(t){}}function Ol(t,e){return t.h.push(e),e.oa(function(){G(t.h,e)}),e}function Cl(t){if(t.D)throw new T("internal-error","RecaptchaVerifier instance has been destroyed.")}function Rl(t,e,n){var i=!1;try{this.b=n||zl.default.app()}catch(t){throw new T("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new T("invalid-api-key");n=this.b.options.apiKey;var r=this,o=null;try{o=this.b.auth().Ga()}catch(t){}try{i=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}o=zl.default.SDK_VERSION?mi(zl.default.SDK_VERSION,o):null,El.call(this,n,t,e,function(){try{var e=r.b.auth().la()}catch(t){e=null}return e},o,_(A),i)}function Dl(t,e,n,i){t:{n=Array.prototype.slice.call(n);for(var r=0,o=!1,a=0;a<e.length;a++)if(e[a].optional)o=!0;else{if(o)throw new T("internal-error","Argument validator encountered a required argument after an optional argument.");r++}if(o=e.length,n.length<r||o<n.length)i="Expected "+(r==o?1==r?"1 argument":r+" arguments":r+"-"+o+" arguments")+" but got "+n.length+".";else{for(r=0;r<n.length;r++)if(o=e[r].optional&&void 0===n[r],!e[r].M(n[r])&&!o){if(e=e[r],r<0||r>=Pl.length)throw new T("internal-error","Argument validator received an unsupported number of arguments.");n=Pl[r],i=(i?"":n+" argument ")+(e.name?'"'+e.name+'" ':"")+"must be "+e.K+".";break t}i=null}}if(i)throw new T("argument-error",t+" failed: "+i)}(t=El.prototype).Ia=function(){var e=this;return this.f||(this.f=Ol(this,ye().then(function(){if(Ii()&&!ci())return ai();throw new T("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")}).then(function(){return e.m.g(e.u())}).then(function(t){return e.g=t,Xs(e.s,Cs,{})}).then(function(t){e.a[Sl]=t.recaptchaSiteKey}).o(function(t){throw e.f=null,t})))},t.render=function(){Cl(this);var n=this;return Ol(this,this.Ia().then(function(){var t,e;return null===n.c&&(e=n.v,n.i||(t=te(e),e=oe("DIV"),t.appendChild(e)),n.c=n.g.render(e,n.a)),n.c}))},t.verify=function(){Cl(this);var r=this;return Ol(this,this.render().then(function(e){return new fe(function(n){var i,t=r.g.getResponse(e);t?n(t):(i=function(t){var e;t&&(e=i,B(r.l,function(t){return t==e}),n(t))},r.l.push(i),r.i&&r.g.execute(r.c))})}))},t.reset=function(){Cl(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){Cl(this),this.D=!0,this.m.c();for(var t,e=0;e<this.h.length;e++)this.h[e].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){e=te(this.v);for(;t=e.firstChild;)e.removeChild(t)}},w(Rl,El);var Pl="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function Ll(t,e){return{name:t||"",K:"a valid string",optional:!!e,M:function(t){return"string"==typeof t}}}function xl(t,e){return{name:t||"",K:"a boolean",optional:!!e,M:function(t){return"boolean"==typeof t}}}function Ml(t,e){return{name:t||"",K:"a valid object",optional:!!e,M:m}}function jl(t,e){return{name:t||"",K:"a function",optional:!!e,M:function(t){return"function"==typeof t}}}function Ul(t,e){return{name:t||"",K:"null",optional:!!e,M:function(t){return null===t}}}function Vl(n){return{name:n?n+"Credential":"credential",K:n?"a valid "+n+" credential":"a valid credential",optional:!1,M:function(t){if(!t)return!1;var e=!n||t.providerId===n;return!(!t.ka||!e)}}}function Fl(){return{name:"multiFactorAssertion",K:"a valid multiFactorAssertion",optional:!1,M:function(t){return!!t&&!!t.sb}}}function ql(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}}function Hl(t,e){return m(t)&&"string"==typeof t.type&&t.type===e&&"function"==typeof t.Ha}function Kl(t){return m(t)&&"string"==typeof t.uid}function Gl(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}}function Bl(e,n,t,i){return{name:t||"",K:e.K+" or "+n.K,optional:!!i,M:function(t){return e.M(t)||n.M(t)}}}function Wl(t,e){for(var n in e){var i=e[n].name;t[i]=Yl(i,t[n],e[n].j)}}function Xl(t,e){for(var n in e){var i=e[n].name;i!==n&&Object.defineProperty(t,i,{get:y(function(t){return this[t]},n),set:y(function(t,e,n,i){Dl(t,[n],[i],!0),this[e]=i},i,n,e[n].kb),enumerable:!0})}}function Jl(t,e,n,i){t[e]=Yl(e,n,i)}function Yl(t,e,n){function i(){var t=Array.prototype.slice.call(arguments);return Dl(o,n,t),e.apply(this,t)}if(!n)return e;var r,o=(t=(t=t).split("."))[t.length-1];for(r in e)i[r]=e[r];for(r in e.prototype)i.prototype[r]=e.prototype[r];return i}Wl(zh.prototype,{jb:{name:"applyActionCode",j:[Ll("code")]},Ra:{name:"checkActionCode",j:[Ll("code")]},nb:{name:"confirmPasswordReset",j:[Ll("code"),Ll("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[Ll("email"),Ll("password")]},hc:{name:"fetchSignInMethodsForEmail",j:[Ll("email")]},qa:{name:"getRedirectResult",j:[]},Bc:{name:"isSignInWithEmailLink",j:[Ll("emailLink")]},Hc:{name:"onAuthStateChanged",j:[Bl(Ml(),jl(),"nextOrObserver"),jl("opt_error",!0),jl("opt_completed",!0)]},Ic:{name:"onIdTokenChanged",j:[Bl(Ml(),jl(),"nextOrObserver"),jl("opt_error",!0),jl("opt_completed",!0)]},vb:{name:"sendPasswordResetEmail",j:[Ll("email"),Bl(Ml("opt_actionCodeSettings",!0),Ul(null,!0),"opt_actionCodeSettings",!0)]},wb:{name:"sendSignInLinkToEmail",j:[Ll("email"),Ml("actionCodeSettings")]},xb:{name:"setPersistence",j:[Ll("persistence")]},Sc:{name:"signInAndRetrieveDataWithCredential",j:[Vl()]},zb:{name:"signInAnonymously",j:[]},$a:{name:"signInWithCredential",j:[Vl()]},Tc:{name:"signInWithCustomToken",j:[Ll("token")]},Uc:{name:"signInWithEmailAndPassword",j:[Ll("email"),Ll("password")]},Vc:{name:"signInWithEmailLink",j:[Ll("email"),Ll("emailLink",!0)]},Wc:{name:"signInWithPhoneNumber",j:[Ll("phoneNumber"),Gl()]},Xc:{name:"signInWithPopup",j:[ql()]},Yc:{name:"signInWithRedirect",j:[ql()]},dd:{name:"updateCurrentUser",j:[Bl({name:"user",K:"an instance of Firebase User",optional:!1,M:function(t){return!!(t&&t instanceof hh)}},Ul(),"user")]},Ab:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[Ll(null,!0)]},fd:{name:"useDeviceLanguage",j:[]},gd:{name:"useEmulator",j:[Ll("url"),Ml("options",!0)]},jd:{name:"verifyPasswordResetCode",j:[Ll("code")]}}),Xl(zh.prototype,{lc:{name:"languageCode",kb:Bl(Ll(),Ul(),"languageCode")},ti:{name:"tenantId",kb:Bl(Ll(),Ul(),"tenantId")}}),(zh.Persistence=Ku).LOCAL="local",zh.Persistence.SESSION="session",zh.Persistence.NONE="none",Wl(hh.prototype,{delete:{name:"delete",j:[]},oc:{name:"getIdTokenResult",j:[xl("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[xl("opt_forceRefresh",!0)]},Cc:{name:"linkAndRetrieveDataWithCredential",j:[Vl()]},qb:{name:"linkWithCredential",j:[Vl()]},Dc:{name:"linkWithPhoneNumber",j:[Ll("phoneNumber"),Gl()]},Ec:{name:"linkWithPopup",j:[ql()]},Fc:{name:"linkWithRedirect",j:[ql()]},Lc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Vl()]},tb:{name:"reauthenticateWithCredential",j:[Vl()]},Mc:{name:"reauthenticateWithPhoneNumber",j:[Ll("phoneNumber"),Gl()]},Nc:{name:"reauthenticateWithPopup",j:[ql()]},Oc:{name:"reauthenticateWithRedirect",j:[ql()]},reload:{name:"reload",j:[]},ub:{name:"sendEmailVerification",j:[Bl(Ml("opt_actionCodeSettings",!0),Ul(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[Ll(null,!0)]},cd:{name:"unlink",j:[Ll("provider")]},Bb:{name:"updateEmail",j:[Ll("email")]},Cb:{name:"updatePassword",j:[Ll("password")]},ed:{name:"updatePhoneNumber",j:[Vl("phone")]},Db:{name:"updateProfile",j:[Ml("profile")]},Eb:{name:"verifyBeforeUpdateEmail",j:[Ll("email"),Bl(Ml("opt_actionCodeSettings",!0),Ul(null,!0),"opt_actionCodeSettings",!0)]}}),Wl(hl.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Wl(cl.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Wl(fe.prototype,{oa:{name:"finally"},o:{name:"catch"},then:{name:"then"}}),Xl(qc.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",kb:xl("appVerificationDisabledForTesting")}}),Wl(Hc.prototype,{confirm:{name:"confirm",j:[Ll("verificationCode")]}}),Jl(Zr,"fromJSON",function(t){t="string"==typeof t?JSON.parse(t):t;for(var e,n=[oo,yo,Ao,no],i=0;i<n.length;i++)if(e=n[i](t))return e;return null},[Bl(Ll(),Ml(),"json")]),Jl(wo,"credential",function(t,e){return new bo(t,e)},[Ll("email"),Ll("password")]),Wl(bo.prototype,{w:{name:"toJSON",j:[Ll(null,!0)]}}),Wl(co.prototype,{Ca:{name:"addScope",j:[Ll("scope")]},Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Jl(co,"credential",ho,[Bl(Ll(),Ml(),"token")]),Jl(wo,"credentialWithLink",Io,[Ll("email"),Ll("emailLink")]),Wl(lo.prototype,{Ca:{name:"addScope",j:[Ll("scope")]},Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Jl(lo,"credential",fo,[Bl(Ll(),Ml(),"token")]),Wl(po.prototype,{Ca:{name:"addScope",j:[Ll("scope")]},Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Jl(po,"credential",vo,[Bl(Ll(),Bl(Ml(),Ul()),"idToken"),Bl(Ll(),Ul(),"accessToken",!0)]),Wl(mo.prototype,{Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Jl(mo,"credential",go,[Bl(Ll(),Ml(),"token"),Ll("secret",!0)]),Wl(uo.prototype,{Ca:{name:"addScope",j:[Ll("scope")]},credential:{name:"credential",j:[Bl(Ll(),Bl(Ml(),Ul()),"optionsOrIdToken"),Bl(Ll(),Ul(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Wl(io.prototype,{w:{name:"toJSON",j:[Ll(null,!0)]}}),Wl(to.prototype,{w:{name:"toJSON",j:[Ll(null,!0)]}}),Jl(So,"credential",No,[Ll("verificationId"),Ll("verificationCode")]),Wl(So.prototype,{fb:{name:"verifyPhoneNumber",j:[Bl(Ll(),{name:"phoneInfoOptions",K:"valid phone info options",optional:!1,M:function(t){return!!t&&(t.session&&t.phoneNumber?Hl(t.session,zr)&&"string"==typeof t.phoneNumber:t.session&&t.multiFactorHint?Hl(t.session,$r)&&Kl(t.multiFactorHint):t.session&&t.multiFactorUid?Hl(t.session,$r)&&"string"==typeof t.multiFactorUid:!!t.phoneNumber&&"string"==typeof t.phoneNumber)}},"phoneInfoOptions"),Gl()]}}),Wl(Eo.prototype,{w:{name:"toJSON",j:[Ll(null,!0)]}}),Wl(T.prototype,{toJSON:{name:"toJSON",j:[Ll(null,!0)]}}),Wl(Mo.prototype,{toJSON:{name:"toJSON",j:[Ll(null,!0)]}}),Wl(xo.prototype,{toJSON:{name:"toJSON",j:[Ll(null,!0)]}}),Wl(Jc.prototype,{toJSON:{name:"toJSON",j:[Ll(null,!0)]}}),Wl(Bc.prototype,{Rc:{name:"resolveSignIn",j:[Fl()]}}),Wl(th.prototype,{Rb:{name:"getSession",j:[]},fc:{name:"enroll",j:[Fl(),Ll("displayName",!0)]},bd:{name:"unenroll",j:[Bl({name:"multiFactorInfo",K:"a valid multiFactorInfo",optional:!1,M:Kl},Ll(),"multiFactorInfoIdentifier")]}}),Wl(Rl.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),Jl(hr,"parseLink",br,[Ll("link")]),Jl(ml,"assertion",function(t){return new Zc(t)},[Vl("phone")]),function(){if(void 0===zl.default||!zl.default.INTERNAL||!zl.default.INTERNAL.registerComponent)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");var t={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Zi,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:$i,VERIFY_AND_CHANGE_EMAIL:Qi,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:zh,AuthCredential:Zr,Error:T};Jl(t,"EmailAuthProvider",wo,[]),Jl(t,"FacebookAuthProvider",co,[]),Jl(t,"GithubAuthProvider",lo,[]),Jl(t,"GoogleAuthProvider",po,[]),Jl(t,"TwitterAuthProvider",mo,[]),Jl(t,"OAuthProvider",uo,[Ll("providerId")]),Jl(t,"SAMLAuthProvider",so,[Ll("providerId")]),Jl(t,"PhoneAuthProvider",So,[{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(t){return!!(t&&t instanceof zh)}}]),Jl(t,"RecaptchaVerifier",Rl,[Bl(Ll(),{name:"",K:"an HTML element",optional:!1,M:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),Ml("recaptchaParameters",!0),{name:"app",K:"an instance of Firebase App",optional:!0,M:function(t){return!!(t&&t instanceof zl.default.app.App)}}]),Jl(t,"ActionCodeURL",hr,[]),Jl(t,"PhoneMultiFactorGenerator",ml,[]),zl.default.INTERNAL.registerComponent({name:"auth",instanceFactory:function(t){return new zh(t=t.getProvider("app").getImmediate())},multipleInstances:!1,serviceProps:t,instantiationMode:"LAZY",type:"PUBLIC"}),zl.default.INTERNAL.registerComponent({name:"auth-internal",instanceFactory:function(t){return{getUid:b((t=t.getProvider("auth").getImmediate()).getUid,t),getToken:b(t.nc,t),addAuthTokenListener:b(t.cc,t),removeAuthTokenListener:b(t.Pc,t)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"}),zl.default.registerVersion("@firebase/auth","0.16.5"),zl.default.INTERNAL.extendNamespace({User:hh})}()}.apply("undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}.apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-auth.js.map


/***/ }),

/***/ "./node_modules/firebase/firebase-firestore.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/firebase-firestore.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

!function(t,e){ true?e(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js")):0}(this,function(om){"use strict";try{!function(){function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=t(om),r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function y(t,s,a,u){return new(a=a||Promise)(function(n,e){function r(t){try{o(u.next(t))}catch(t){e(t)}}function i(t){try{o(u.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?n(t.value):((e=t.value)instanceof a?e:new a(function(t){t(e)})).then(r,i)}o((u=u.apply(t,s||[])).next())})}function g(n,r){var i,o,s,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,(e=s?[2&e[0],s.value]:e)[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=r.call(n,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function s(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}var i,o="FirebaseError",a=(n(u,i=Error),u);function u(t,e,n){e=i.call(this,e)||this;return e.code=t,e.customData=n,e.name=o,Object.setPrototypeOf(e,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(e,c.prototype.create),e}var c=(l.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r,i=e[0]||{},o=this.service+"/"+t,t=this.errors[t],t=t?(r=i,t.replace(d,function(t,e){var n=r[e];return null!=n?String(n):"<"+e+"?>"})):"Error",t=this.serviceName+": "+t+" ("+o+").";return new a(o,t,i)},l);function l(t,e,n){this.service=t,this.serviceName=e,this.errors=n}var f,d=/\{\$([^}]+)}/g;function m(t){return t&&t._delegate?t._delegate:t}(Ee=f=f||{})[Ee.DEBUG=0]="DEBUG",Ee[Ee.VERBOSE=1]="VERBOSE",Ee[Ee.INFO=2]="INFO",Ee[Ee.WARN=3]="WARN",Ee[Ee.ERROR=4]="ERROR",Ee[Ee.SILENT=5]="SILENT";function p(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),o=w[e];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[o].apply(console,s(["["+i+"]  "+t.name+":"],n))}}var v={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},b=f.INFO,w=((Te={})[f.DEBUG]="log",Te[f.VERBOSE]="log",Te[f.INFO]="info",Te[f.WARN]="warn",Te[f.ERROR]="error",Te),I=(Object.defineProperty(E.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in f))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),E.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?v[t]:t},Object.defineProperty(E.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),E.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,f.DEBUG],t)),this._logHandler.apply(this,s([this,f.DEBUG],t))},E.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,f.VERBOSE],t)),this._logHandler.apply(this,s([this,f.VERBOSE],t))},E.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,f.INFO],t)),this._logHandler.apply(this,s([this,f.INFO],t))},E.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,f.WARN],t)),this._logHandler.apply(this,s([this,f.WARN],t))},E.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,f.ERROR],t)),this._logHandler.apply(this,s([this,f.ERROR],t))},E);function E(t){this.name=t,this._logLevel=b,this._logHandler=p,this._userLogHandler=null}var T=function(t,e){return(T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function _(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return{value:(t=t&&r>=t.length?void 0:t)&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var S,N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},D={},A=N||self;function k(){}function C(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function R(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var x="closure_uid_"+(1e9*Math.random()>>>0),O=0;function L(t,e,n){return t.call.apply(t.bind,arguments)}function P(e,n,t){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,r),e.apply(n,t)}}return function(){return e.apply(n,arguments)}}function M(t,e,n){return(M=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?L:P).apply(null,arguments)}function F(e){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function V(){return Date.now()}function U(t,o){function e(){}e.prototype=o.prototype,t.X=o.prototype,t.prototype=new e,(t.prototype.constructor=t).Kb=function(t,e,n){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return o.prototype[e].apply(t,r)}}function q(){this.j=this.j,this.i=this.i}q.prototype.j=!1,q.prototype.ja=function(){var t;!this.j&&(this.j=!0,this.G(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,x)&&t[x]||(t[x]=++O))},q.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var B=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},j=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function K(){return Array.prototype.concat.apply([],arguments)}function G(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function Q(t){return/^[\s\xa0]*$/.test(t)}var z,H=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function W(t,e){return-1!=t.indexOf(e)}function Y(t,e){return t<e?-1:e<t?1:0}t:{var X=A.navigator;if(X){X=X.userAgent;if(X){z=X;break t}}z=""}function J(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function $(t){var e,n={};for(e in t)n[e]=t[e];return n}var Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tt(t){for(var e,n,r=1;r<arguments.length;r++){for(e in n=arguments[r])t[e]=n[e];for(var i=0;i<Z.length;i++)e=Z[i],Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}}function et(t){return et[" "](t),t}et[" "]=k;var nt,rt=W(z,"Opera"),it=W(z,"Trident")||W(z,"MSIE"),ot=W(z,"Edge"),st=ot||it,at=W(z,"Gecko")&&!(W(z.toLowerCase(),"webkit")&&!W(z,"Edge"))&&!(W(z,"Trident")||W(z,"MSIE"))&&!W(z,"Edge"),ut=W(z.toLowerCase(),"webkit")&&!W(z,"Edge");function ct(){var t=A.document;return t?t.documentMode:void 0}t:{var ht="",lt=(lt=z,at?/rv:([^\);]+)(\)|;)/.exec(lt):ot?/Edge\/([\d\.]+)/.exec(lt):it?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(lt):ut?/WebKit\/(\S+)/.exec(lt):rt?/(?:Version)[ \/]?(\S+)/.exec(lt):void 0);if(lt&&(ht=lt?lt[1]:""),it){lt=ct();if(null!=lt&&lt>parseFloat(ht)){nt=String(lt);break t}}nt=ht}var ft={};function dt(a){return t=a,e=function(){for(var t=0,e=H(String(nt)).split("."),n=H(String(a)).split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++)for(var o=e[i]||"",s=n[i]||"";o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],(0!=o[0].length||0!=s[0].length)&&(t=Y(0==o[1].length?0:parseInt(o[1],10),0==s[1].length?0:parseInt(s[1],10))||Y(0==o[2].length,0==s[2].length)||Y(o[2],s[2]),o=o[3],s=s[3],0==t););return 0<=t},n=ft,Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t);var t,e,n}var pt=A.document&&it&&(ct()||parseInt(nt,10))||void 0,yt=!it||9<=Number(pt),gt=it&&!dt("9"),mt=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{A.addEventListener("test",k,e),A.removeEventListener("test",k,e)}catch(t){}return t}();function vt(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function bt(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(at){t:{try{et(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:wt[t.pointerType]||"",(this.c=t).defaultPrevented&&this.b()}}vt.prototype.b=function(){this.defaultPrevented=!0},U(bt,vt);var wt={2:"touch",3:"pen",4:"mouse"};bt.prototype.b=function(){bt.X.b.call(this);var t=this.c;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,gt)try{(t.ctrlKey||112<=t.keyCode&&t.keyCode<=123)&&(t.keyCode=-1)}catch(t){}};var It="closure_listenable_"+(1e6*Math.random()|0),Et=0;function Tt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ca=i,this.key=++Et,this.Y=this.Z=!1}function _t(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.ca=null}function St(t){this.src=t,this.a={},this.b=0}function Nt(t,e){var n,r,i,o=e.type;o in t.a&&(n=t.a[o],(i=0<=(r=B(n,e)))&&Array.prototype.splice.call(n,r,1),i&&(_t(e),0==t.a[o].length&&(delete t.a[o],t.b--)))}function Dt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.Y&&o.listener==e&&o.capture==!!n&&o.ca==r)return i}return-1}St.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++);var s=Dt(t,e,r,i);return-1<s?(e=t[s],n||(e.Z=!1)):((e=new Tt(e,this.src,o,!!r,i)).Z=n,t.push(e)),e};var At="closure_lm_"+(1e6*Math.random()|0),kt={};function Ct(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(Array.isArray(n)){for(var s=0;s<n.length;s++)t(e,n[s],r,i,o);return null}r=Vt(r);return e&&e[It]?e.wa(n,r,R(i)?!!i.capture:!!i,o):Rt(e,n,r,!0,i,o)}(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)Ct(t,e[o],n,r,i);return null}return n=Vt(n),t&&t[It]?t.va(e,n,R(r)?!!r.capture:!!r,i):Rt(t,e,n,!1,r,i)}function Rt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=R(i)?!!i.capture:!!i;if(s&&!yt)return null;var a,u,c=Mt(t);if(c||(t[At]=c=new St(t)),(n=c.add(e,n,r,s,o)).proxy)return n;if(a=Pt,r=u=yt?function(t){return a.call(u.src,u.listener,t)}:function(t){if(!(t=a.call(u.src,u.listener,t)))return t},(n.proxy=r).src=t,r.listener=n,t.addEventListener)void 0===(i=!mt?s:i)&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ot(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function xt(t){var e,n,r;"number"!=typeof t&&t&&!t.Y&&((e=t.src)&&e[It]?Nt(e.c,t):(n=t.type,r=t.proxy,e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ot(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Mt(e))?(Nt(n,t),0==n.b&&(n.src=null,e[At]=null)):_t(t)))}function Ot(t){return t in kt?kt[t]:kt[t]="on"+t}function Lt(t,e){var n=t.listener,r=t.ca||t.src;return t.Z&&xt(t),n.call(r,e)}function Pt(t,e){if(t.Y)return!0;if(yt)return Lt(t,new bt(e,this));if(!e)t:{e=["window","event"];for(var n=A,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null;break t}e=n}return Lt(t,e=new bt(e,this))}function Mt(t){return(t=t[At])instanceof St?t:null}var Ft="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vt(e){return"function"==typeof e?e:(e[Ft]||(e[Ft]=function(t){return e.handleEvent(t)}),e[Ft])}function Ut(){q.call(this),this.c=new St(this),(this.J=this).C=null}function qt(t,e){var n,r=t.C;if(r)for(n=[];r;r=r.C)n.push(r);if(t=t.J,r=e.type||e,"string"==typeof e?e=new vt(e,t):e instanceof vt?e.target=e.target||t:(s=e,tt(e=new vt(r,t),s)),s=!0,n)for(var i=n.length-1;0<=i;i--)var o=e.a=n[i],s=Bt(o,r,!0,e)&&s;if(s=Bt(o=e.a=t,r,!0,e)&&s,s=Bt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)s=Bt(o=e.a=n[i],r,!1,e)&&s}function Bt(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s,a,u=e[o];u&&!u.Y&&u.capture==n&&(s=u.listener,a=u.ca||u.src,u.Z&&Nt(t.c,u),i=!1!==s.call(a,r)&&i)}return i&&!r.defaultPrevented}U(Ut,q),Ut.prototype[It]=!0,(S=Ut.prototype).addEventListener=function(t,e,n,r){Ct(this,t,e,n,r)},S.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(Array.isArray(n))for(var s=0;s<n.length;s++)t(e,n[s],r,i,o);else i=R(i)?!!i.capture:!!i,r=Vt(r),e&&e[It]?(e=e.c,(n=String(n).toString())in e.a&&-1<(r=Dt(s=e.a[n],r,i,o))&&(_t(s[r]),Array.prototype.splice.call(s,r,1),0==s.length&&(delete e.a[n],e.b--))):(e=e&&Mt(e))&&(n=e.a[n.toString()],(r=(e=-1)<(e=n?Dt(n,r,i,o):e)?n[e]:null)&&xt(r))}(this,t,e,n,r)},S.G=function(){if(Ut.X.G.call(this),this.c){var t,e=this.c;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)_t(n[r]);delete e.a[t],e.b--}}this.C=null},S.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},S.wa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)};var jt=A.JSON.stringify;function Kt(){this.b=this.a=null}var Gt,Qt=(zt.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},new zt(function(){return new Ht},function(t){t.reset()}));function zt(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function Ht(){this.next=this.b=this.a=null}function Wt(t,e){var n;Gt||(n=A.Promise.resolve(void 0),Gt=function(){n.then(Jt)}),Yt||(Gt(),Yt=!0),Xt.add(t,e)}Kt.prototype.add=function(t,e){var n=Qt.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Ht.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null};var Yt=!(Ht.prototype.reset=function(){this.next=this.b=this.a=null}),Xt=new Kt;function Jt(){for(var t,e;n=e=void 0,n=null,(e=Xt).a&&(n=e.a,e.a=e.a.next,e.a||(e.b=null),n.next=null),t=n;){try{t.a.call(t.b)}catch(t){!function(t){A.setTimeout(function(){throw t},0)}(t)}var n=Qt;n.f(t),n.b<100&&(n.b++,t.next=n.a,n.a=t)}Yt=!1}function $t(t,e){Ut.call(this),this.b=t||1,this.a=e||A,this.f=M(this.Za,this),this.g=V()}function Zt(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function te(t,e,n){if("function"==typeof t)n&&(t=M(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=M(t.handleEvent,t)}return 2147483647<Number(e)?-1:A.setTimeout(t,e||0)}U($t,Ut),(S=$t.prototype).aa=!1,S.M=null,S.Za=function(){var t;this.aa&&(0<(t=V()-this.g)&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),qt(this,"tick"),this.aa&&(Zt(this),this.start())))},S.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=V())},S.G=function(){$t.X.G.call(this),Zt(this),delete this.a};var ee,ne,re,ie=(T(ne=se,re=ee=q),ne.prototype=null===re?Object.create(re):(oe.prototype=re.prototype,new oe),se.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:function t(e){e.a=te(function(){e.a=null,e.c&&(e.c=!1,t(e))},e.h);var n=e.b;e.b=null,e.g.apply(null,n)}(this)},se.prototype.G=function(){ee.prototype.G.call(this),this.a&&(A.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},se);function oe(){this.constructor=ne}function se(t,e){var n=ee.call(this)||this;return n.g=t,n.h=e,n.b=null,n.c=!1,n.a=null,n}function ae(t){q.call(this),this.b=t,this.a={}}U(ae,q);var ue=[];function ce(t,e,n,r){Array.isArray(n)||(n&&(ue[0]=n.toString()),n=ue);for(var i=0;i<n.length;i++){var o=Ct(e,n[i],r||t.handleEvent,!1,t.b||t);if(!o)break;t.a[o.key]=o}}function he(t){J(t.a,function(t,e){this.a.hasOwnProperty(e)&&xt(t)},t),t.a={}}function le(){this.a=!0}function fe(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.a)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(r.length<2)){var i=r[1];if(Array.isArray(i)&&!(i.length<1)){r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return jt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")})}ae.prototype.G=function(){ae.X.G.call(this),he(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},le.prototype.info=function(){};var de={},pe=null;function ye(){return pe=pe||new Ut}function ge(t){vt.call(this,de.Fa,t)}function me(t){var e=ye();qt(e,new ge(e))}function ve(t,e){vt.call(this,de.STAT_EVENT,t),this.stat=e}function be(t){var e=ye();qt(e,new ve(e,t))}function we(t){vt.call(this,de.Ga,t)}function Ie(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){t()},e)}de.Fa="serverreachability",U(ge,vt),de.STAT_EVENT="statevent",U(ve,vt),de.Ga="timingevent",U(we,vt);var Ee={NO_ERROR:0,$a:1,nb:2,mb:3,hb:4,lb:5,ob:6,Da:7,TIMEOUT:8,rb:9},Te={fb:"complete",Bb:"success",Ea:"error",Da:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",ib:"downloadprogress",Jb:"uploadprogress"};function _e(){}function Se(t){var e;return e=!(e=t.a)?t.a={}:e}function Ne(){}_e.prototype.a=null;N={OPEN:"a",eb:"b",Ea:"c",qb:"d"};function De(){vt.call(this,"d")}function Ae(){vt.call(this,"c")}function ke(){}function Ce(t,e,n,r){this.g=t,this.c=e,this.f=n,this.S=r||1,this.J=new ae(this),this.P=xe,t=st?125:void 0,this.R=new $t(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.T=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.V=this.C=this.U=this.I=!1}U(De,vt),U(Ae,vt),U(ke,_e);var Re=new ke,xe=45e3,Oe={},Le={};function Pe(t,e,n){t.H=1,t.i=nn(Xe(e)),t.j=n,t.I=!0,Me(t,null)}function Me(t,e){t.u=V(),Ve(t),t.l=Xe(t.i);var s,a,u,c,h,l,n=t.l,r=t.S;Array.isArray(r)||(r=[String(r)]),gn(n.b,"t",r),t.D=0,t.a=cr(t.g,t.g.C?e:null),0<t.O&&(t.F=new ie(M(t.Ca,t,t.a),t.O)),ce(t.J,t.a,"readystatechange",t.Xa),e=t.B?$(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),me(1),s=t.c,a=t.m,u=t.l,c=t.f,h=t.S,l=t.j,s.info(function(){if(s.a)if(l)for(var t="",e=l.split("&"),n=0;n<e.length;n++){var r,i,o=e[n].split("=");1<o.length&&(r=o[0],o=o[1],t=2<=(i=r.split("_")).length&&"type"==i[1]?t+(r+"=")+o+"&":t+(r+"=redacted&"))}else t=null;else t=l;return"XMLHTTP REQ ("+c+") [attempt "+h+"]: "+a+"\n"+u+"\n"+t})}function Fe(t,e,n){for(var r,i,o,s=!0;!t.A&&t.D<n.length;){var a=(a=n,o=i=void 0,i=(r=t).D,-1==(o=a.indexOf("\n",i))?Le:(i=Number(a.substring(i,o)),isNaN(i)?Oe:(o+=1)+i>a.length?Le:(a=a.substr(o,i),r.D=o+i,a)));if(a==Le){4==e&&(t.h=4,be(14),s=!1),fe(t.c,t.f,null,"[Incomplete Response]");break}if(a==Oe){t.h=4,be(15),fe(t.c,t.f,n,"[Invalid Chunk]"),s=!1;break}fe(t.c,t.f,a,null),Ke(t,a)}4==e&&0==n.length&&(t.h=1,be(16),s=!1),t.b=t.b&&s,s?0<n.length&&!t.V&&(t.V=!0,(e=t.g).a==t&&e.U&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.F=!0,be(11))):(fe(t.c,t.f,n,"[Invalid Chunked Response]"),je(t),Be(t))}function Ve(t){t.T=V()+t.P,Ue(t,t.P)}function Ue(t,e){if(null!=t.o)throw Error("WatchDog timer not null");t.o=Ie(M(t.Va,t),e)}function qe(t){t.o&&(A.clearTimeout(t.o),t.o=null)}function Be(t){0==t.g.v||t.A||ir(t.g,t)}function je(t){qe(t);var e=t.F;e&&"function"==typeof e.ja&&e.ja(),t.F=null,Zt(t.R),he(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ja())}function Ke(t,e){try{var n,r,i,o,s,a=t.g;if(0!=a.v&&(a.a==t||Tn(a.b,t)))if(a.I=t.N,!t.C&&Tn(a.b,t)&&3==a.v){try{var u=a.ka.a.parse(e)}catch(t){u=null}if(Array.isArray(u)&&3==u.length){var c=u;if(0==c[0]){t:if(!a.j){if(a.a){if(!(a.a.u+3e3<t.u))break t;rr(a),zn(a)}tr(a),be(18)}}else a.oa=c[1],0<a.oa-a.P&&c[2]<37500&&a.H&&0==a.o&&!a.m&&(a.m=Ie(M(a.Sa,a),6e3));if(En(a.b)<=1&&a.ea){try{a.ea()}catch(t){}a.ea=void 0}}else sr(a,11)}else if(!t.C&&a.a!=t||rr(a),!Q(e))for(e=u=a.ka.a.parse(e),u=0;u<e.length;u++)c=e[u],a.P=c[0],c=c[1],2==a.v?"c"==c[0]?(a.J=c[1],a.ga=c[2],null!=(r=c[3])&&(a.ha=r,a.c.info("VER="+a.ha)),null!=(o=c[4])&&(a.pa=o,a.c.info("SVER="+a.pa)),null!=(r=c[5])&&"number"==typeof r&&0<r&&(n=1.5*r,a.D=n,a.c.info("backChannelRequestTimeoutMs_="+n)),n=a,(o=t.a)&&(!(r=o.a?o.a.getResponseHeader("X-Client-Wire-Protocol"):null)||!(i=n.b).a&&(W(r,"spdy")||W(r,"quic")||W(r,"h2"))&&(i.f=i.g,i.a=new Set,i.b&&(_n(i,i.b),i.b=null)),!n.A||(s=o.a?o.a.getResponseHeader("X-HTTP-Session-Id"):null)&&(n.na=s,en(n.B,n.A,s))),a.v=3,a.f&&a.f.ta(),a.U&&(a.N=V()-t.u,a.c.info("Handshake RTT: "+a.N+"ms")),i=t,(n=a).la=ur(n,n.C?n.ga:null,n.fa),i.C?(Sn(n.b,i),o=i,(s=n.D)&&o.setTimeout(s),o.o&&(qe(o),Ve(o)),n.a=i):Zn(n),0<a.g.length&&Yn(a)):"stop"!=c[0]&&"close"!=c[0]||sr(a,7):3==a.v&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?sr(a,7):Qn(a):"noop"!=c[0]&&a.f&&a.f.sa(c),a.o=0);me(4)}catch(t){}}function Ge(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(C(t)||"string"==typeof t)j(t,e,void 0);else{if(t.L&&"function"==typeof t.L)var n=t.L();else if(t.K&&"function"==typeof t.K)n=void 0;else if(C(t)||"string"==typeof t)for(var n=[],r=t.length,i=0;i<r;i++)n.push(i);else for(i in n=[],r=0,t)n[r++]=i;for(var i=(r=function(t){if(t.K&&"function"==typeof t.K)return t.K();if("string"==typeof t)return t.split("");if(C(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Qe(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Qe)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function ze(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];He(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){for(var i={},n=e=0;e<t.a.length;)He(i,r=t.a[e])||(i[t.a[n++]=r]=1),e++;t.a.length=n}}function He(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(S=Ce.prototype).setTimeout=function(t){this.P=t},S.Xa=function(t){t=t.target;var e=this.F;e&&3==Bn(t)?e.f():this.Ca(t)},S.Ca=function(t){try{if(t==this.a)t:{var e=Bn(this.a),n=this.a.ua(),r=this.a.W();if(!(e<3||3==e&&!st&&!this.a.$())){this.A||4!=e||7==n||me(8==n||r<=0?3:2),qe(this);var i=this.a.W();this.N=i;var o=this.a.$();if(this.b=200==i,r=this.c,u=this.m,c=this.l,h=this.f,l=this.S,f=e,d=i,r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+l+"]: "+u+"\n"+c+"\n"+f+" "+d}),this.b){if(this.U&&!this.C){e:{if(this.a){var s=this.a;if((s=s.a?s.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(s)){var a=s;break e}}a=null}if(!a){this.b=!1,this.h=3,be(12),je(this),Be(this);break t}fe(this.c,this.f,a,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,Ke(this,a)}this.I?(Fe(this,e,o),st&&this.b&&3==e&&(ce(this.J,this.R,"tick",this.Wa),this.R.start())):(fe(this.c,this.f,o,null),Ke(this,o)),4==e&&je(this),this.b&&!this.A&&(4==e?ir(this.g,this):(this.b=!1,Ve(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.h=3,be(12)):(this.h=0,be(13)),je(this),Be(this)}}}catch(t){}var u,c,h,l,f,d},S.Wa=function(){var t,e;this.a&&(t=Bn(this.a),e=this.a.$(),this.D<e.length&&(qe(this),Fe(this,t,e),this.b&&4!=t&&Ve(this)))},S.cancel=function(){this.A=!0,je(this)},S.Va=function(){this.o=null;var t,e,n=V();0<=n-this.T?(t=this.c,e=this.l,t.info(function(){return"TIMEOUT: "+e}),2!=this.H&&(me(3),be(17)),je(this),this.h=2,Be(this)):Ue(this,this.T-n)},(S=Qe.prototype).K=function(){ze(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},S.L=function(){return ze(this),this.a.concat()},S.get=function(t,e){return He(this.b,t)?this.b[t]:e},S.set=function(t,e){He(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},S.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ye(t,e){var n;this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof Ye?(this.a=void 0!==e?e:t.a,Je(this,t.f),this.j=t.j,$e(this,t.c),Ze(this,t.h),this.g=t.g,e=t.b,(n=new fn).c=e.c,e.a&&(n.a=new Qe(e.a),n.b=e.b),tn(this,n),this.i=t.i):t&&(n=String(t).match(We))?(this.a=!!e,Je(this,n[1]||"",!0),this.j=rn(n[2]||""),$e(this,n[3]||"",!0),Ze(this,n[4]),this.g=rn(n[5]||"",!0),tn(this,n[6]||"",!0),this.i=rn(n[7]||"")):(this.a=!!e,this.b=new fn(null,this.a))}function Xe(t){return new Ye(t)}function Je(t,e,n){t.f=n?rn(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function $e(t,e,n){t.c=n?rn(e,!0):e}function Ze(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.h=e}else t.h=null}function tn(t,e,n){var r,i;e instanceof fn?(t.b=e,r=t.b,(i=t.a)&&!r.f&&(dn(r),r.c=null,r.a.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(pn(this,e),gn(this,n,t))},r)),r.f=i):(n||(e=on(e,hn)),t.b=new fn(e,t.a))}function en(t,e,n){t.b.set(e,n)}function nn(t){return en(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^V()).toString(36)),t}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,sn),t=n?t.replace(/%25([0-9a-fA-F]{2})/g,"%$1"):t):null}function sn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ye.prototype.toString=function(){var t=[],e=this.f;e&&t.push(on(e,an,!0),":");var n=this.c;return!n&&"file"!=e||(t.push("//"),(e=this.j)&&t.push(on(e,an,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?cn:un,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",on(n,ln)),t.join("")};var an=/[#\/\?@]/g,un=/[#\?:]/g,cn=/[#\?]/g,hn=/[#\?@]/g,ln=/#/g;function fn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function dn(n){n.a||(n.a=new Qe,n.b=0,n.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r,i=t[n].indexOf("="),o=null;0<=i?(r=t[n].substring(0,i),o=t[n].substring(i+1)):r=t[n],e(r,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}(n.c,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}function pn(t,e){dn(t),e=mn(t,e),He(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,He((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&ze(t)))}function yn(t,e){return dn(t),e=mn(t,e),He(t.a.b,e)}function gn(t,e,n){pn(t,e),0<n.length&&(t.c=null,t.a.set(mn(t,e),G(n)),t.b+=n.length)}function mn(t,e){return e=String(e),e=t.f?e.toLowerCase():e}(S=fn.prototype).add=function(t,e){dn(this),this.c=null,t=mn(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},S.forEach=function(n,r){dn(this),this.a.forEach(function(t,e){j(t,function(t){n.call(r,t,e,this)},this)},this)},S.L=function(){dn(this);for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},S.K=function(t){dn(this);var e=[];if("string"==typeof t)yn(this,t)&&(e=K(e,this.a.get(mn(this,t))));else{t=this.a.K();for(var n=0;n<t.length;n++)e=K(e,t[n])}return e},S.set=function(t,e){return dn(this),this.c=null,yn(this,t=mn(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},S.get=function(t,e){return t&&0<(t=this.K(t)).length?String(t[0]):e},S.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.L(),n=0;n<e.length;n++)for(var r=e[n],i=encodeURIComponent(String(r)),r=this.K(r),o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}return this.c=t.join("&")};var vn=function(t,e){this.b=t,this.a=e};function bn(t){this.g=t||wn,t=A.PerformanceNavigationTiming?0<(t=A.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(A.ia&&A.ia.ya&&A.ia.ya()&&A.ia.ya().Lb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}var wn=10;function In(t){return t.b||t.a&&t.a.size>=t.f}function En(t){return t.b?1:t.a?t.a.size:0}function Tn(t,e){return t.b?t.b==e:t.a&&t.a.has(e)}function _n(t,e){t.a?t.a.add(e):t.b=e}function Sn(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function Nn(t){var e,n;if(null!=t.b)return t.c.concat(t.b.s);if(null==t.a||0===t.a.size)return G(t.c);var r=t.c;try{for(var i=_(t.a.values()),o=i.next();!o.done;o=i.next())var s=o.value,r=r.concat(s.s)}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}function Dn(){}function An(){this.a=new Dn}function kn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}bn.prototype.cancel=function(){var e,t;if(this.c=Nn(this),this.b)this.b.cancel(),this.b=null;else if(this.a&&0!==this.a.size){try{for(var n=_(this.a.values()),r=n.next();!r.done;r=n.next())r.value.cancel()}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.a.clear()}},Dn.prototype.stringify=function(t){return A.JSON.stringify(t,void 0)},Dn.prototype.parse=function(t){return A.JSON.parse(t,void 0)};var Cn=A.JSON.parse;function Rn(t){Ut.call(this),this.headers=new Qe,this.H=t||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=xn,this.D=this.F=!1}U(Rn,Ut);var xn="",On=/^https?$/i,Ln=["POST","PUT"];function Pn(t){return"content-type"==t.toLowerCase()}function Mn(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,Fn(t),Un(t)}function Fn(t){t.u||(t.u=!0,qt(t,"complete"),qt(t,"error"))}function Vn(t){if(t.b&&void 0!==D&&(!t.s[1]||4!=Bn(t)||2!=t.W()))if(t.l&&4==Bn(t))te(t.za,0,t);else if(qt(t,"readystatechange"),4==Bn(t)){t.b=!1;try{var e,n,r,i,o=t.W();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break t;default:s=!1}(e=s)||((n=0===o)&&(!(i=String(t.B).match(We)[1]||null)&&A.self&&A.self.location&&(i=(r=A.self.location.protocol).substr(0,r.length-1)),n=!On.test(i?i.toLowerCase():"")),e=n);if(e)qt(t,"complete"),qt(t,"success");else{t.h=6;try{var a=2<Bn(t)?t.a.statusText:""}catch(o){a=""}t.f=a+" ["+t.W()+"]",Fn(t)}}finally{Un(t)}}}function Un(t,e){if(t.a){qn(t);var n=t.a,r=t.s[0]?k:null;t.a=null,t.s=null,e||qt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function qn(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(A.clearTimeout(t.m),t.m=null)}function Bn(t){return t.a?t.a.readyState:0}function jn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}var i;r||(i="",J(n,function(t,e){i+=e,i+=":",i+=t,i+="\r\n"}),n=i,"string"==typeof t?null!=n&&encodeURIComponent(String(n)):en(t,e,n))}function Kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gn(t){this.pa=0,this.g=[],this.c=new le,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.V=this.i=this.O=this.l=null,this.Oa=this.R=0,this.La=Kn("failFast",!1,t),this.H=this.m=this.j=this.h=this.f=null,this.S=!0,this.I=this.oa=this.P=-1,this.T=this.o=this.u=0,this.Ha=Kn("baseRetryDelayMs",5e3,t),this.Ra=Kn("retryDelaySeedMs",1e4,t),this.Ma=Kn("forwardChannelMaxRetries",2,t),this.ma=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.Na=t&&t.g||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new bn(t&&t.concurrentRequestLimit),this.ka=new An,this.da=t&&t.fastHandshake||!1,this.Ia=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.S=!1),this.U=!this.da&&this.S&&t&&t.detectBufferingProxy||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null,(this.Ka=t&&t.c||!1)&&this.c.info("Opt-in to enable Chrome Origin Trials.")}function Qn(t){var e,n;Hn(t),3==t.v&&(e=t.R++,en(n=Xe(t.B),"SID",t.J),en(n,"RID",e),en(n,"TYPE","terminate"),Jn(t,n),(e=new Ce(t,t.c,e,void 0)).H=2,e.i=nn(Xe(n)),n=!1,!(n=A.navigator&&A.navigator.sendBeacon?A.navigator.sendBeacon(e.i.toString(),""):n)&&A.Image&&((new Image).src=e.i,n=!0),n||(e.a=cr(e.g,null),e.a.ba(e.i)),e.u=V(),Ve(e)),ar(t)}function zn(t){t.a&&(er(t),t.a.cancel(),t.a=null)}function Hn(t){zn(t),t.j&&(A.clearTimeout(t.j),t.j=null),rr(t),t.b.cancel(),t.h&&("number"==typeof t.h&&A.clearTimeout(t.h),t.h=null)}function Wn(t,e){t.g.push(new vn(t.Oa++,e)),3==t.v&&Yn(t)}function Yn(t){In(t.b)||t.h||(t.h=!0,Wt(t.Ba,t),t.u=0)}function Xn(t,e){var n=e?e.f:t.R++,r=Xe(t.B);en(r,"SID",t.J),en(r,"RID",n),en(r,"AID",t.P),Jn(t,r),t.i&&t.l&&jn(r,t.i,t.l),n=new Ce(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=$n(t,n,1e3),n.setTimeout(Math.round(.5*t.ma)+Math.round(.5*t.ma*Math.random())),_n(t.b,n),Pe(n,r,e)}function Jn(t,n){t.f&&Ge({},function(t,e){en(n,e,t)})}function $n(t,e,n){n=Math.min(t.g.length,n);var r=t.f?M(t.f.Ja,t.f,t):null;t:for(var i=t.g,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].b,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,u=0;u<n;u++){var c=i[u].b,h=i[u].a;if((c-=o)<0)o=Math.max(0,i[u].b-100),a=!1;else try{!function(t,r,e){var i=e||"";try{Ge(t,function(t,e){var n=t;R(t)&&(n=jt(t)),r.push(i+e+"="+encodeURIComponent(n))})}catch(t){throw r.push(i+"type="+encodeURIComponent("_badmap")),t}}(h,s,"req"+c+"_")}catch(t){r&&r(h)}}if(a){r=s.join("&");break t}}return t=t.g.splice(0,n),e.s=t,r}function Zn(t){t.a||t.j||(t.T=1,Wt(t.Aa,t),t.o=0)}function tr(t){return!(t.a||t.j||3<=t.o)&&(t.T++,t.j=Ie(M(t.Aa,t),or(t,t.o)),t.o++,1)}function er(t){null!=t.s&&(A.clearTimeout(t.s),t.s=null)}function nr(t){t.a=new Ce(t,t.c,"rpc",t.T),null===t.i&&(t.a.B=t.l),t.a.O=0;var e=Xe(t.la);en(e,"RID","rpc"),en(e,"SID",t.J),en(e,"CI",t.H?"0":"1"),en(e,"AID",t.P),Jn(t,e),en(e,"TYPE","xmlhttp"),t.i&&t.l&&jn(e,t.i,t.l),t.D&&t.a.setTimeout(t.D);var n=t.a;t=t.ga,n.H=1,n.i=nn(Xe(e)),n.j=null,n.I=!0,Me(n,t)}function rr(t){null!=t.m&&(A.clearTimeout(t.m),t.m=null)}function ir(t,e){var n,r,i,o=null;if(t.a==e){rr(t),er(t),t.a=null;var s=2}else{if(!Tn(t.b,e))return;o=e.s,Sn(t.b,e),s=1}if(t.I=e.N,0!=t.v)if(e.b)1==s?(o=e.j?e.j.length:0,e=V()-e.u,n=t.u,qt(s=ye(),new we(s)),Yn(t)):Zn(t);else if(3==(n=e.h)||0==n&&0<t.I||(1!=s||(i=e,En((r=t).b)>=r.b.f-(r.h?1:0)||(r.h?(r.g=i.s.concat(r.g),0):1==r.v||2==r.v||r.u>=(r.La?0:r.Ma)||(r.h=Ie(M(r.Ba,r,i),or(r,r.u)),r.u++,0))))&&(2!=s||!tr(t)))switch(o&&0<o.length&&(e=t.b,e.c=e.c.concat(o)),n){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}function or(t,e){var n=t.Ha+Math.floor(Math.random()*t.Ra);return t.f||(n*=2),n*e}function sr(t,e){var n,r,i,o;t.c.info("Error code "+e),2==e?(r=null,t.f&&(r=null),o=M(t.Ya,t),r||(r=new Ye("//www.google.com/images/cleardot.gif"),A.location&&"http"==A.location.protocol||Je(r,"https"),nn(r)),n=r.toString(),r=o,o=new le,A.Image?((i=new Image).onload=F(kn,o,i,"TestLoadImage: loaded",!0,r),i.onerror=F(kn,o,i,"TestLoadImage: error",!1,r),i.onabort=F(kn,o,i,"TestLoadImage: abort",!1,r),i.ontimeout=F(kn,o,i,"TestLoadImage: timeout",!1,r),A.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n):r(!1)):be(2),t.v=0,t.f&&t.f.ra(e),ar(t),Hn(t)}function ar(t){t.v=0,t.I=-1,t.f&&(0==Nn(t.b).length&&0==t.g.length||(t.b.c.length=0,G(t.g),t.g.length=0),t.f.qa())}function ur(t,e,n){var r,i,o,s,a,u=(s=n)instanceof Ye?Xe(s):new Ye(s,void 0);return""!=u.c?(e&&$e(u,e+"."+u.c),Ze(u,u.h)):(a=A.location,r=a.protocol,i=e?e+"."+a.hostname:a.hostname,o=+a.port,s=n,a=new Ye(null,void 0),r&&Je(a,r),i&&$e(a,i),o&&Ze(a,o),s&&(a.g=s),u=a),t.V&&J(t.V,function(t,e){en(u,e,t)}),e=t.A,n=t.na,e&&n&&en(u,e,n),en(u,"VER",t.ha),Jn(t,u),u}function cr(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new Rn(t.Na)).F=t.C,e}function hr(){}function lr(){if(it&&!(10<=Number(pt)))throw Error("Environmental error: no available transport.")}function fr(t,e){Ut.call(this),this.a=new Gn(e),this.o=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!Q(t)&&(this.a.i=t),this.m=e&&e.supportsCrossDomainXhr||!1,this.l=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Q(e)&&(this.a.A=e,null!==(t=this.b)&&e in t&&(e in(t=this.b)&&delete t[e])),this.f=new yr(this)}function dr(t){De.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function pr(){Ae.call(this),this.status=1}function yr(t){this.a=t}(S=Rn.prototype).ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+t);e=e?e.toUpperCase():"GET",this.B=t,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?Se(this.H):Se(Re),this.a.onreadystatechange=M(this.za,this);try{this.A=!0,this.a.open(e,String(t),!0),this.A=!1}catch(t){return void Mn(this,t)}t=n||"";var i,o=new Qe(this.headers);r&&Ge(r,function(t,e){o.set(e,t)}),r=function(t){t:{for(var e=Pn,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return e<0?null:"string"==typeof t?t.charAt(e):t[e]}(o.L()),n=A.FormData&&t instanceof A.FormData,0<=B(Ln,e)&&!r&&!n&&o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach(function(t,e){this.a.setRequestHeader(e,t)},this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{qn(this),0<this.o&&((this.D=(i=this.a,it&&dt(9)&&"number"==typeof i.timeout&&void 0!==i.ontimeout))?(this.a.timeout=this.o,this.a.ontimeout=M(this.xa,this)):this.m=te(this.xa,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(t){Mn(this,t)}},S.xa=function(){void 0!==D&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,qt(this,"timeout"),this.abort(8))},S.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,qt(this,"complete"),qt(this,"abort"),Un(this))},S.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),Un(this,!0)),Rn.X.G.call(this)},S.za=function(){this.j||(this.A||this.l||this.g?Vn(this):this.Ua())},S.Ua=function(){Vn(this)},S.W=function(){try{return 2<Bn(this)?this.a.status:-1}catch(t){return-1}},S.$=function(){try{return this.a?this.a.responseText:""}catch(t){return""}},S.Pa=function(t){if(this.a){var e=this.a.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Cn(e)}},S.ua=function(){return this.h},S.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(S=Gn.prototype).ha=8,S.v=1,S.Ba=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++;var e,n=new Ce(this,this.c,t,void 0),r=this.l;if(this.O&&(r?tt(r=$(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)t:{for(var i=e=0;i<this.g.length;i++){var o=this.g[i];if("__data__"in o.a&&"string"==typeof(o=o.a.__data__)?o=o.length:o=void 0,void 0===o)break;if(4096<(e+=o)){e=i;break t}if(4096===e||i===this.g.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=$n(this,n,e),en(i=Xe(this.B),"RID",t),en(i,"CVER",22),this.A&&en(i,"X-HTTP-Session-Id",this.A),Jn(this,i),this.i&&r&&jn(i,this.i,r),_n(this.b,n),this.Ia&&en(i,"TYPE","init"),this.da?(en(i,"$req",e),en(i,"SID","null"),n.U=!0,Pe(n,i,null)):Pe(n,i,e),this.v=2}}else 3==this.v&&(t?Xn(this,t):0==this.g.length||In(this.b)||Xn(this))},S.Aa=function(){var t;this.j=null,nr(this),this.U&&!(this.F||null==this.a||this.N<=0)&&(t=2*this.N,this.c.info("BP detection timer enabled: "+t),this.s=Ie(M(this.Ta,this),t))},S.Ta=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,be(10),zn(this),nr(this))},S.Sa=function(){null!=this.m&&(this.m=null,zn(this),tr(this),be(19))},S.Ya=function(t){t?(this.c.info("Successfully pinged google.com"),be(2)):(this.c.info("Failed to ping google.com"),be(1))},(S=hr.prototype).ta=function(){},S.sa=function(){},S.ra=function(){},S.qa=function(){},S.Ja=function(){},lr.prototype.a=function(t,e){return new fr(t,e)},U(fr,Ut),fr.prototype.g=function(){this.a.f=this.f,this.m&&(this.a.C=!0);var t=this.a,e=this.o,n=this.b||void 0;be(0),t.fa=e,t.V=n||{},t.H=t.S,t.B=ur(t,null,t.fa),Yn(t)},fr.prototype.close=function(){Qn(this.a)},fr.prototype.h=function(t){var e;"string"==typeof t?((e={}).__data__=t,Wn(this.a,e)):this.l?((e={}).__data__=jt(t),Wn(this.a,e)):Wn(this.a,t)},fr.prototype.G=function(){this.a.f=null,delete this.f,Qn(this.a),delete this.a,fr.X.G.call(this)},U(dr,De),U(pr,Ae),U(yr,hr),yr.prototype.ta=function(){qt(this.a,"a")},yr.prototype.sa=function(t){qt(this.a,new dr(t))},yr.prototype.ra=function(t){qt(this.a,new pr)},yr.prototype.qa=function(){qt(this.a,"b")},lr.prototype.createWebChannel=lr.prototype.a,fr.prototype.send=fr.prototype.h,fr.prototype.open=fr.prototype.g,Ee.NO_ERROR=0,Ee.TIMEOUT=8,Ee.HTTP_ERROR=6,Te.COMPLETE="complete",(Ne.EventType=N).OPEN="a",N.CLOSE="b",N.ERROR="c",N.MESSAGE="d",Ut.prototype.listen=Ut.prototype.va,Rn.prototype.listenOnce=Rn.prototype.wa,Rn.prototype.getLastError=Rn.prototype.Qa,Rn.prototype.getLastErrorCode=Rn.prototype.ua,Rn.prototype.getStatus=Rn.prototype.W,Rn.prototype.getResponseJson=Rn.prototype.Pa,Rn.prototype.getResponseText=Rn.prototype.$,Rn.prototype.send=Rn.prototype.ba;var gr=ye,mr=Ee,vr=Te,br=de,wr=10,Ir=11,Er=Ne,Tr=Rn,_r=(Sr.prototype.t=function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue},Sr.prototype.next=function(){var t=++this.previousValue;return this.i&&this.i(t),t},Sr);function Sr(t,e){var n=this;this.previousValue=t,e&&(e.sequenceNumberHandler=function(t){return n.t(t)},this.i=function(t){return e.writeSequenceNumber(t)})}_r.o=-1;var Nr,Dr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Ar=(n(Cr,Nr=Error),Cr),kr=new I("@firebase/firestore");function Cr(t,e){var n=this;return(n=Nr.call(this,e)||this).code=t,n.message=e,n.name="FirebaseError",n.toString=function(){return n.name+": [code="+n.code+"]: "+n.message},n}function Rr(){return kr.logLevel}function xr(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];kr.logLevel<=f.DEBUG&&(e=n.map(Pr),kr.debug.apply(kr,s(["Firestore (8.4.2): "+t],e)))}function Or(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];kr.logLevel<=f.ERROR&&(e=n.map(Pr),kr.error.apply(kr,s(["Firestore (8.4.2): "+t],e)))}function Lr(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];kr.logLevel<=f.WARN&&(e=n.map(Pr),kr.warn.apply(kr,s(["Firestore (8.4.2): "+t],e)))}function Pr(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}function Mr(t){t="FIRESTORE (8.4.2) INTERNAL ASSERTION FAILED: "+(t=void 0===t?"Unexpected state":t);throw Or(t),new Error(t)}function Fr(t){t||Mr()}var Vr=(Ur.u=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";n.length<20;)for(var r=function(t){var e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(var r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}(40),i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length));return n},Ur);function Ur(){}function qr(t,e){return t<e?-1:e<t?1:0}function Br(t,n,r){return t.length===n.length&&t.every(function(t,e){return r(t,n[e])})}function jr(t){return t+"\0"}var Kr=(zr.now=function(){return zr.fromMillis(Date.now())},zr.fromDate=function(t){return zr.fromMillis(t.getTime())},zr.fromMillis=function(t){var e=Math.floor(t/1e3);return new zr(e,Math.floor(1e6*(t-1e3*e)))},zr.prototype.toDate=function(){return new Date(this.toMillis())},zr.prototype.toMillis=function(){return 1e3*this.seconds+this.nanoseconds/1e6},zr.prototype._compareTo=function(t){return this.seconds===t.seconds?qr(this.nanoseconds,t.nanoseconds):qr(this.seconds,t.seconds)},zr.prototype.isEqual=function(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds},zr.prototype.toString=function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"},zr.prototype.toJSON=function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}},zr.prototype.valueOf=function(){var t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")},zr),Gr=(Qr.fromTimestamp=function(t){return new Qr(t)},Qr.min=function(){return new Qr(new Kr(0,0))},Qr.prototype.compareTo=function(t){return this.timestamp._compareTo(t.timestamp)},Qr.prototype.isEqual=function(t){return this.timestamp.isEqual(t.timestamp)},Qr.prototype.toMicroseconds=function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3},Qr.prototype.toString=function(){return"SnapshotVersion("+this.timestamp.toString()+")"},Qr.prototype.toTimestamp=function(){return this.timestamp},Qr);function Qr(t){this.timestamp=t}function zr(t,e){if(this.seconds=t,(this.nanoseconds=e)<0)throw new Ar(Dr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(1e9<=e)throw new Ar(Dr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ar(Dr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(253402300800<=t)throw new Ar(Dr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}function Hr(t){var e,n=0;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n++;return n}function Wr(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yr(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}var Xr,Jr,Te=(Object.defineProperty(ai.prototype,"length",{get:function(){return this.len},enumerable:!1,configurable:!0}),ai.prototype.isEqual=function(t){return 0===ai.comparator(this,t)},ai.prototype.child=function(t){var e=this.segments.slice(this.offset,this.limit());return t instanceof ai?t.forEach(function(t){e.push(t)}):e.push(t),this.construct(e)},ai.prototype.limit=function(){return this.offset+this.length},ai.prototype.popFirst=function(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)},ai.prototype.popLast=function(){return this.construct(this.segments,this.offset,this.length-1)},ai.prototype.firstSegment=function(){return this.segments[this.offset]},ai.prototype.lastSegment=function(){return this.get(this.length-1)},ai.prototype.get=function(t){return this.segments[this.offset+t]},ai.prototype.isEmpty=function(){return 0===this.length},ai.prototype.isPrefixOf=function(t){if(t.length<this.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0},ai.prototype.isImmediateParentOf=function(t){if(this.length+1!==t.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0},ai.prototype.forEach=function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])},ai.prototype.toArray=function(){return this.segments.slice(this.offset,this.limit())},ai.comparator=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),o=e.get(r);if(i<o)return-1;if(o<i)return 1}return t.length<e.length?-1:t.length>e.length?1:0},ai),$r=(n(si,Jr=Te),si.prototype.construct=function(t,e,n){return new si(t,e,n)},si.prototype.canonicalString=function(){return this.toArray().join("/")},si.prototype.toString=function(){return this.canonicalString()},si.fromString=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=[],r=0,i=t;r<i.length;r++){var o=i[r];if(0<=o.indexOf("//"))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid segment ("+o+"). Paths must not contain // in them.");n.push.apply(n,o.split("/").filter(function(t){return 0<t.length}))}return new si(n)},si.emptyPath=function(){return new si([])},si),Zr=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ti=(n(oi,Xr=Te),oi.prototype.construct=function(t,e,n){return new oi(t,e,n)},oi.isValidIdentifier=function(t){return Zr.test(t)},oi.prototype.canonicalString=function(){return this.toArray().map(function(t){return t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),t=!oi.isValidIdentifier(t)?"`"+t+"`":t}).join(".")},oi.prototype.toString=function(){return this.canonicalString()},oi.prototype.isKeyField=function(){return 1===this.length&&"__name__"===this.get(0)},oi.keyField=function(){return new oi(["__name__"])},oi.fromServerFormat=function(t){for(var e=[],n="",r=0,i=function(){if(0===n.length)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'");e.push(n),n=""},o=!1;r<t.length;){var s=t[r];if("\\"===s){if(r+1===t.length)throw new Ar(Dr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);var a=t[r+1];if("\\"!==a&&"."!==a&&"`"!==a)throw new Ar(Dr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=a,r+=2}else"`"===s?o=!o:"."!==s||o?n+=s:i(),r++}if(i(),o)throw new Ar(Dr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oi(e)},oi.emptyPath=function(){return new oi([])},oi),ei=(ii.prototype.covers=function(t){for(var e=0,n=this.fields;e<n.length;e++)if(n[e].isPrefixOf(t))return!0;return!1},ii.prototype.isEqual=function(t){return Br(this.fields,t.fields,function(t,e){return t.isEqual(e)})},ii),ni=(ri.fromBase64String=function(t){return new ri(atob(t))},ri.fromUint8Array=function(t){return new ri(function(t){for(var e="",n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t))},ri.prototype.toBase64=function(){return t=this.binaryString,btoa(t);var t},ri.prototype.toUint8Array=function(){return function(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)},ri.prototype.approximateByteSize=function(){return 2*this.binaryString.length},ri.prototype.compareTo=function(t){return qr(this.binaryString,t.binaryString)},ri.prototype.isEqual=function(t){return this.binaryString===t.binaryString},ri);function ri(t){this.binaryString=t}function ii(t){(this.fields=t).sort(ti.comparator)}function oi(){return null!==Xr&&Xr.apply(this,arguments)||this}function si(){return null!==Jr&&Jr.apply(this,arguments)||this}function ai(t,e,n){void 0===e?e=0:e>t.length&&Mr(),void 0===n?n=t.length-e:n>t.length-e&&Mr(),this.segments=t,this.offset=e,this.len=n}ni.EMPTY_BYTE_STRING=new ni("");var ui=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(t){if(Fr(!!t),"string"!=typeof t)return{seconds:hi(t.seconds),nanos:hi(t.nanos)};var e=0,n=ui.exec(t);Fr(!!n),n[1]&&(n=((n=n[1])+"000000000").substr(0,9),e=Number(n));t=new Date(t);return{seconds:Math.floor(t.getTime()/1e3),nanos:e}}function hi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function li(t){return"string"==typeof t?ni.fromBase64String(t):ni.fromUint8Array(t)}function fi(t){return"server_timestamp"===(null===(t=((null===(t=null==t?void 0:t.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===t?void 0:t.stringValue)}function di(t){t=ci(t.mapValue.fields.__local_write_time__.timestampValue);return new Kr(t.seconds,t.nanos)}function pi(t){return null==t}function yi(t){return 0===t&&1/t==-1/0}function gi(t){return"number"==typeof t&&Number.isInteger(t)&&!yi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}var mi=(vi.fromPath=function(t){return new vi($r.fromString(t))},vi.fromName=function(t){return new vi($r.fromString(t).popFirst(5))},vi.prototype.hasCollectionId=function(t){return 2<=this.path.length&&this.path.get(this.path.length-2)===t},vi.prototype.isEqual=function(t){return null!==t&&0===$r.comparator(this.path,t.path)},vi.prototype.toString=function(){return this.path.toString()},vi.comparator=function(t,e){return $r.comparator(t.path,e.path)},vi.isDocumentKey=function(t){return t.length%2==0},vi.fromSegments=function(t){return new vi(new $r(t.slice()))},vi);function vi(t){this.path=t}function bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fi(t)?4:10:Mr()}function wi(r,i){var t,e,n=bi(r);if(n!==bi(i))return!1;switch(n){case 0:return!0;case 1:return r.booleanValue===i.booleanValue;case 4:return di(r).isEqual(di(i));case 3:return function(t){if("string"==typeof r.timestampValue&&"string"==typeof t.timestampValue&&r.timestampValue.length===t.timestampValue.length)return r.timestampValue===t.timestampValue;var e=ci(r.timestampValue),t=ci(t.timestampValue);return e.seconds===t.seconds&&e.nanos===t.nanos}(i);case 5:return r.stringValue===i.stringValue;case 6:return e=i,li(r.bytesValue).isEqual(li(e.bytesValue));case 7:return r.referenceValue===i.referenceValue;case 8:return t=i,hi((e=r).geoPointValue.latitude)===hi(t.geoPointValue.latitude)&&hi(e.geoPointValue.longitude)===hi(t.geoPointValue.longitude);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return hi(t.integerValue)===hi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){t=hi(t.doubleValue),e=hi(e.doubleValue);return t===e?yi(t)===yi(e):isNaN(t)&&isNaN(e)}return!1}(r,i);case 9:return Br(r.arrayValue.values||[],i.arrayValue.values||[],wi);case 10:return function(){var t,e=r.mapValue.fields||{},n=i.mapValue.fields||{};if(Hr(e)!==Hr(n))return!1;for(t in e)if(e.hasOwnProperty(t)&&(void 0===n[t]||!wi(e[t],n[t])))return!1;return!0}();default:return Mr()}}function Ii(t,e){return void 0!==(t.values||[]).find(function(t){return wi(t,e)})}function Ei(t,e){var n,r,i,o=bi(t),s=bi(e);if(o!==s)return qr(o,s);switch(o){case 0:return 0;case 1:return qr(t.booleanValue,e.booleanValue);case 2:return r=e,i=hi(t.integerValue||t.doubleValue),r=hi(r.integerValue||r.doubleValue),i<r?-1:r<i?1:i===r?0:isNaN(i)?isNaN(r)?0:-1:1;case 3:return Ti(t.timestampValue,e.timestampValue);case 4:return Ti(di(t),di(e));case 5:return qr(t.stringValue,e.stringValue);case 6:return function(t,e){t=li(t),e=li(e);return t.compareTo(e)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){for(var n=t.split("/"),r=e.split("/"),i=0;i<n.length&&i<r.length;i++){var o=qr(n[i],r[i]);if(0!==o)return o}return qr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return n=t.geoPointValue,i=e.geoPointValue,0!==(r=qr(hi(n.latitude),hi(i.latitude)))?r:qr(hi(n.longitude),hi(i.longitude));case 9:return function(t,e){for(var n=t.values||[],r=e.values||[],i=0;i<n.length&&i<r.length;++i){var o=Ei(n[i],r[i]);if(o)return o}return qr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(var s=0;s<r.length&&s<o.length;++s){var a=qr(r[s],o[s]);if(0!==a)return a;a=Ei(n[r[s]],i[o[s]]);if(0!==a)return a}return qr(r.length,o.length)}(t.mapValue,e.mapValue);default:throw Mr()}}function Ti(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return qr(t,e);var n=ci(t),t=ci(e),e=qr(n.seconds,t.seconds);return 0!==e?e:qr(n.nanos,t.nanos)}function _i(t){return function s(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){var t=ci(t);return"time("+t.seconds+","+t.nanos+")"}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?li(t.bytesValue).toBase64():"referenceValue"in t?(e=t.referenceValue,mi.fromName(e).toString()):"geoPointValue"in t?"geo("+(e=t.geoPointValue).latitude+","+e.longitude+")":"arrayValue"in t?function(t){for(var e="[",n=!0,r=0,i=t.values||[];r<i.length;r++)n?n=!1:e+=",",e+=s(i[r]);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){for(var e="{",n=!0,r=0,i=Object.keys(t.fields||{}).sort();r<i.length;r++){var o=i[r];n?n=!1:e+=",",e+=o+":"+s(t.fields[o])}return e+"}"}(t.mapValue):Mr();var e}(t)}function Si(t,e){return{referenceValue:"projects/"+t.projectId+"/databases/"+t.database+"/documents/"+e.path.canonicalString()}}function Ni(t){return t&&"integerValue"in t}function Di(t){return!!t&&"arrayValue"in t}function Ai(t){return t&&"nullValue"in t}function ki(t){return t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ci(t){return t&&"mapValue"in t}var Ri=(xi.empty=function(){return new xi({mapValue:{}})},xi.prototype.field=function(t){return xi.extractNestedValue(this.buildProto(),t)},xi.prototype.toProto=function(){return this.field(ti.emptyPath())},xi.prototype.set=function(t,e){this.setOverlay(t,e)},xi.prototype.setAll=function(t){var n=this;t.forEach(function(t,e){t?n.set(e,t):n.delete(e)})},xi.prototype.delete=function(t){this.setOverlay(t,null)},xi.prototype.isEqual=function(t){return wi(this.buildProto(),t.buildProto())},xi.prototype.setOverlay=function(t,e){for(var n=this.overlayMap,r=0;r<t.length-1;++r)var i=t.get(r),o=n.get(i),n=(o instanceof Map||(o=o&&10===bi(o)?new Map(Object.entries(o.mapValue.fields||{})):new Map,n.set(i,o)),o);n.set(t.lastSegment(),e)},xi.prototype.applyOverlay=function(r,t){var i=this,o=!1,e=xi.extractNestedValue(this.partialValue,r),s=Ci(e)?Object.assign({},e.mapValue.fields):{};return t.forEach(function(t,e){var n;t instanceof Map?null!=(n=i.applyOverlay(r.child(e),t))&&(s[e]=n,o=!0):null!==t?(s[e]=t,o=!0):s.hasOwnProperty(e)&&(delete s[e],o=!0)}),o?{mapValue:{fields:s}}:null},xi.prototype.buildProto=function(){var t=this.applyOverlay(ti.emptyPath(),this.overlayMap);return null!=t&&(this.partialValue=t,this.overlayMap.clear()),this.partialValue},xi.extractNestedValue=function(t,e){if(e.isEmpty())return t;for(var n=t,r=0;r<e.length-1;++r){if(!n.mapValue.fields)return null;if(!Ci(n=n.mapValue.fields[e.get(r)]))return null}return(n=(n.mapValue.fields||{})[e.lastSegment()])||null},xi.prototype.clone=function(){return new xi(this.buildProto())},xi);function xi(t){this.overlayMap=new Map,this.partialValue=t}var Oi=(Pi.newInvalidDocument=function(t){return new Pi(t,0,Gr.min(),Ri.empty(),0)},Pi.newFoundDocument=function(t,e,n){return new Pi(t,1,e,n,0)},Pi.newNoDocument=function(t,e){return new Pi(t,2,e,Ri.empty(),0)},Pi.newUnknownDocument=function(t,e){return new Pi(t,3,e,Ri.empty(),2)},Pi.prototype.convertToFoundDocument=function(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this},Pi.prototype.convertToNoDocument=function(t){return this.version=t,this.documentType=2,this.data=Ri.empty(),this.documentState=0,this},Pi.prototype.convertToUnknownDocument=function(t){return this.version=t,this.documentType=3,this.data=Ri.empty(),this.documentState=2,this},Pi.prototype.setHasCommittedMutations=function(){return this.documentState=2,this},Pi.prototype.setHasLocalMutations=function(){return this.documentState=1,this},Object.defineProperty(Pi.prototype,"hasLocalMutations",{get:function(){return 1===this.documentState},enumerable:!1,configurable:!0}),Object.defineProperty(Pi.prototype,"hasCommittedMutations",{get:function(){return 2===this.documentState},enumerable:!1,configurable:!0}),Object.defineProperty(Pi.prototype,"hasPendingWrites",{get:function(){return this.hasLocalMutations||this.hasCommittedMutations},enumerable:!1,configurable:!0}),Pi.prototype.isValidDocument=function(){return 0!==this.documentType},Pi.prototype.isFoundDocument=function(){return 1===this.documentType},Pi.prototype.isNoDocument=function(){return 2===this.documentType},Pi.prototype.isUnknownDocument=function(){return 3===this.documentType},Pi.prototype.isEqual=function(t){return t instanceof Pi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)},Pi.prototype.clone=function(){return new Pi(this.key,this.documentType,this.version,this.data.clone(),this.documentState)},Pi.prototype.toString=function(){return"Document("+this.key+", "+this.version+", "+JSON.stringify(this.data.toProto())+", {documentType: "+this.documentType+"}), {documentState: "+this.documentState+"})"},Pi),Li=function(t,e,n,r,i,o,s){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===s&&(s=null),this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.h=null};function Pi(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}function Mi(t,e,n,r,i,o,s){return new Li(t,e=void 0===e?null:e,n=void 0===n?[]:n,r=void 0===r?[]:r,i=void 0===i?null:i,o=void 0===o?null:o,s=void 0===s?null:s)}function Fi(t){var e=t;return null===e.h&&(t=e.path.canonicalString(),null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(function(t){return(t=t).field.canonicalString()+t.op.toString()+_i(t.value)}).join(","),t+="|ob:",t+=e.orderBy.map(function(t){return(t=t).field.canonicalString()+t.dir}).join(","),pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=fo(e.startAt)),e.endAt&&(t+="|ub:",t+=fo(e.endAt)),e.h=t),e.h}function Vi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(var n,r,i=0;i<t.orderBy.length;i++)if(n=t.orderBy[i],r=e.orderBy[i],n.dir!==r.dir||!n.field.isEqual(r.field))return!1;if(t.filters.length!==e.filters.length)return!1;for(var o,s,a=0;a<t.filters.length;a++)if(o=t.filters[a],s=e.filters[a],o.op!==s.op||!o.field.isEqual(s.field)||!wi(o.value,s.value))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!go(t.startAt,e.startAt)&&go(t.endAt,e.endAt)}function Ui(t){return mi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}var qi,Bi=(n(ji,qi=function(){}),ji.create=function(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.l(t,e,n):new zi(t,e,n):"array-contains"===e?new ro(t,n):"in"===e?new io(t,n):"not-in"===e?new oo(t,n):"array-contains-any"===e?new so(t,n):new ji(t,e,n)},ji.l=function(t,e,n){return new("in"===e?Hi:Wi)(t,n)},ji.prototype.matches=function(t){t=t.data.field(this.field);return"!="===this.op?null!==t&&this.m(Ei(t,this.value)):null!==t&&bi(this.value)===bi(t)&&this.m(Ei(t,this.value))},ji.prototype.m=function(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return 0<t;case">=":return 0<=t;default:return Mr()}},ji.prototype.g=function(){return 0<=["<","<=",">",">=","!=","not-in"].indexOf(this.op)},ji);function ji(t,e,n){var r=this;return(r=qi.call(this)||this).field=t,r.op=e,r.value=n,r}var Ki,Gi,Qi,zi=(n(Ji,Qi=Bi),Ji.prototype.matches=function(t){t=mi.comparator(t.key,this.key);return this.m(t)},Ji),Hi=(n(Xi,Gi=Bi),Xi.prototype.matches=function(e){return this.keys.some(function(t){return t.isEqual(e.key)})},Xi),Wi=(n(Yi,Ki=Bi),Yi.prototype.matches=function(e){return!this.keys.some(function(t){return t.isEqual(e.key)})},Yi);function Yi(t,e){var n=this;return(n=Ki.call(this,t,"not-in",e)||this).keys=$i(0,e),n}function Xi(t,e){var n=this;return(n=Gi.call(this,t,"in",e)||this).keys=$i(0,e),n}function Ji(t,e,n){var r=this;return(r=Qi.call(this,t,e,n)||this).key=mi.fromName(n.referenceValue),r}function $i(t,e){return((null===(e=e.arrayValue)||void 0===e?void 0:e.values)||[]).map(function(t){return mi.fromName(t.referenceValue)})}var Zi,to,eo,no,ro=(n(lo,no=Bi),lo.prototype.matches=function(t){t=t.data.field(this.field);return Di(t)&&Ii(t.arrayValue,this.value)},lo),io=(n(ho,eo=Bi),ho.prototype.matches=function(t){t=t.data.field(this.field);return null!==t&&Ii(this.value.arrayValue,t)},ho),oo=(n(co,to=Bi),co.prototype.matches=function(t){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;t=t.data.field(this.field);return null!==t&&!Ii(this.value.arrayValue,t)},co),so=(n(uo,Zi=Bi),uo.prototype.matches=function(t){var e=this,t=t.data.field(this.field);return!(!Di(t)||!t.arrayValue.values)&&t.arrayValue.values.some(function(t){return Ii(e.value.arrayValue,t)})},uo),ao=function(t,e){this.position=t,this.before=e};function uo(t,e){return Zi.call(this,t,"array-contains-any",e)||this}function co(t,e){return to.call(this,t,"not-in",e)||this}function ho(t,e){return eo.call(this,t,"in",e)||this}function lo(t,e){return no.call(this,t,"array-contains",e)||this}function fo(t){return(t.before?"b":"a")+":"+t.position.map(_i).join(",")}var po=function(t,e){void 0===e&&(e="asc"),this.field=t,this.dir=e};function yo(t,e,n){for(var r=0,i=0;i<t.position.length;i++){var o=e[i],s=t.position[i],r=o.field.isKeyField()?mi.comparator(mi.fromName(s.referenceValue),n.key):Ei(s,n.data.field(o.field));if("desc"===o.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function go(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(var n=0;n<t.position.length;n++)if(!wi(t.position[n],e.position[n]))return!1;return!0}var mo=function(t,e,n,r,i,o,s,a){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o="F"),void 0===s&&(s=null),void 0===a&&(a=null),this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt};function vo(t,e,n,r,i,o,s,a){return new mo(t,e,n,r,i,o,s,a)}function bo(t){return new mo(t)}function wo(t){return!pi(t.limit)&&"F"===t.limitType}function Io(t){return!pi(t.limit)&&"L"===t.limitType}function Eo(t){return 0<t.explicitOrderBy.length?t.explicitOrderBy[0].field:null}function To(t){for(var e=0,n=t.filters;e<n.length;e++){var r=n[e];if(r.g())return r.field}return null}function _o(t){return null!==t.collectionGroup}function So(t){var e=t;if(null===e.p){e.p=[];var n=To(e),t=Eo(e);if(null!==n&&null===t)n.isKeyField()||e.p.push(new po(n)),e.p.push(new po(ti.keyField(),"asc"));else{for(var r=!1,i=0,o=e.explicitOrderBy;i<o.length;i++){var s=o[i];e.p.push(s),s.field.isKeyField()&&(r=!0)}r||(n=0<e.explicitOrderBy.length?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",e.p.push(new po(ti.keyField(),n)))}}return e.p}function No(t){var e=t;if(!e.T)if("F"===e.limitType)e.T=Mi(e.path,e.collectionGroup,So(e),e.filters,e.limit,e.startAt,e.endAt);else{for(var n=[],r=0,i=So(e);r<i.length;r++){var o=i[r],s="desc"===o.dir?"asc":"desc";n.push(new po(o.field,s))}var a=e.endAt?new ao(e.endAt.position,!e.endAt.before):null,t=e.startAt?new ao(e.startAt.position,!e.startAt.before):null;e.T=Mi(e.path,e.collectionGroup,n,e.filters,e.limit,a,t)}return e.T}function Do(t,e,n){return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ao(t,e){return Vi(No(t),No(e))&&t.limitType===e.limitType}function ko(t){return Fi(No(t))+"|lt:"+t.limitType}function Co(t){return"Query(target="+(e=No(t),n=e.path.canonicalString(),null!==e.collectionGroup&&(n+=" collectionGroup="+e.collectionGroup),0<e.filters.length&&(n+=", filters: ["+e.filters.map(function(t){return(t=t).field.canonicalString()+" "+t.op+" "+_i(t.value)}).join(", ")+"]"),pi(e.limit)||(n+=", limit: "+e.limit),0<e.orderBy.length&&(n+=", orderBy: ["+e.orderBy.map(function(t){return(t=t).field.canonicalString()+" ("+t.dir+")"}).join(", ")+"]"),e.startAt&&(n+=", startAt: "+fo(e.startAt)),e.endAt&&(n+=", endAt: "+fo(e.endAt)),"Target("+n+")")+"; limitType="+t.limitType+")";var e,n}function Ro(i,t){return t.isFoundDocument()&&(e=i,n=t.key.path,null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):mi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n))&&function(t){for(var e=0,n=i.explicitOrderBy;e<n.length;e++){var r=n[e];if(!r.field.isKeyField()&&null===t.data.field(r.field))return}return 1}(t)&&function(t){for(var e=0,n=i.filters;e<n.length;e++)if(!n[e].matches(t))return;return 1}(t)&&(n=t,(!(t=i).startAt||yo(t.startAt,So(t),n))&&(!t.endAt||!yo(t.endAt,So(t),n)));var e,n}function xo(a){return function(t,e){for(var n=!1,r=0,i=So(a);r<i.length;r++){var o=i[r],s=function(t,r,e){var n=t.field.isKeyField()?mi.comparator(r.key,e.key):function(t,e){var n=r.data.field(t),t=e.data.field(t);return null!==n&&null!==t?Ei(n,t):Mr()}(t.field,e);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return Mr()}}(o,t,e);if(0!==s)return s;n=n||o.field.isKeyField()}return 0}}function Oo(t,e){if(t.I){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yi(e)?"-0":e}}function Lo(t){return{integerValue:""+t}}function Po(t,e){return gi(e)?Lo(e):Oo(t,e)}I=function(){this._=void 0};function Mo(t,e){return t instanceof Yo?Ni(t=e)||t&&"doubleValue"in t?e:{integerValue:0}:null}var Fo,Vo,Uo=(n(jo,Vo=I),jo),qo=(n(Bo,Fo=I),Bo);function Bo(t){var e=this;return(e=Fo.call(this)||this).elements=t,e}function jo(){return null!==Vo&&Vo.apply(this,arguments)||this}function Ko(t,e){for(var n=$o(e),r=0,i=t.elements;r<i.length;r++)!function(e){n.some(function(t){return wi(t,e)})||n.push(e)}(i[r]);return{arrayValue:{values:n}}}var Go,Qo=(n(zo,Go=I),zo);function zo(t){var e=this;return(e=Go.call(this)||this).elements=t,e}function Ho(t,e){for(var n=$o(e),r=0,i=t.elements;r<i.length;r++)!function(e){n=n.filter(function(t){return!wi(t,e)})}(i[r]);return{arrayValue:{values:n}}}var Wo,Yo=(n(Xo,Wo=I),Xo);function Xo(t,e){var n=this;return(n=Wo.call(this)||this).R=t,n.A=e,n}function Jo(t){return hi(t.integerValue||t.doubleValue)}function $o(t){return Di(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Zo(t,e){this.version=t,this.transformResults=e}var ts=function(t,e){this.field=t,this.transform=e},es=(ns.none=function(){return new ns},ns.exists=function(t){return new ns(void 0,t)},ns.updateTime=function(t){return new ns(t)},Object.defineProperty(ns.prototype,"isNone",{get:function(){return void 0===this.updateTime&&void 0===this.exists},enumerable:!1,configurable:!0}),ns.prototype.isEqual=function(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)},ns);function ns(t,e){this.updateTime=t,this.exists=e}function rs(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}Te=function(){};function is(t,e,n){var r,i,o,s;t instanceof cs?(i=e,o=n,rs((r=t).precondition,i)&&(s=r.value.clone(),o=ys(r.fieldTransforms,o,i),s.setAll(o),i.convertToFoundDocument(ss(i),s).setHasLocalMutations())):t instanceof hs?(o=e,i=n,rs((s=t).precondition,o)&&(n=ys(s.fieldTransforms,i,o),(i=o.data).setAll(ds(s)),i.setAll(n),o.convertToFoundDocument(ss(o),i).setHasLocalMutations())):(e=e,rs(t.precondition,e)&&e.convertToNoDocument(Gr.min()))}function os(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Br(n,r,function(t,e){return e=e,(t=t).field.isEqual(e.field)&&(t=t.transform,e=e.transform,t instanceof qo&&e instanceof qo||t instanceof Qo&&e instanceof Qo?Br(t.elements,e.elements,wi):t instanceof Yo&&e instanceof Yo?wi(t.A,e.A):t instanceof Uo&&e instanceof Uo)})))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}function ss(t){return t.isFoundDocument()?t.version:Gr.min()}var as,us,cs=(n(fs,us=Te),fs),hs=(n(ls,as=Te),ls);function ls(t,e,n,r,i){void 0===i&&(i=[]);var o=this;return(o=as.call(this)||this).key=t,o.data=e,o.fieldMask=n,o.precondition=r,o.fieldTransforms=i,o.type=1,o}function fs(t,e,n,r){void 0===r&&(r=[]);var i=this;return(i=us.call(this)||this).key=t,i.value=e,i.precondition=n,i.fieldTransforms=r,i.type=0,i}function ds(n){var r=new Map;return n.fieldMask.fields.forEach(function(t){var e;t.isEmpty()||(e=n.data.field(t),r.set(t,e))}),r}function ps(t,e,n){var r=new Map;Fr(t.length===n.length);for(var i=0;i<n.length;i++){var o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,(o=s,s=a,a=n[i],o instanceof qo?Ko(o,s):o instanceof Qo?Ho(o,s):a))}return r}function ys(t,e,n){for(var r,i=new Map,o=0,s=t;o<s.length;o++){var a=s[o],u=a.transform,c=n.data.field(a.field);i.set(a.field,(r=c,a=e,c=void 0,(u=u)instanceof Uo?(c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}},r&&(c.fields.__previous_value__=r),{mapValue:c}):u instanceof qo?Ko(u,r):u instanceof Qo?Ho(u,r):(u=Mo(c=u,r),r=Jo(u)+Jo(c.A),Ni(u)&&Ni(c.A)?Lo(r):Oo(c.R,r))))}return i}function gs(t){this.count=t}var ms,vs,bs,ws=(n(Ts,bs=Te),Ts),Is=(n(Es,vs=Te),Es);function Es(t,e){var n=this;return(n=vs.call(this)||this).key=t,n.precondition=e,n.type=3,n.fieldTransforms=[],n}function Ts(t,e){var n=this;return(n=bs.call(this)||this).key=t,n.precondition=e,n.type=2,n.fieldTransforms=[],n}function _s(t){switch(t){case Dr.OK:return Mr(),0;case Dr.CANCELLED:case Dr.UNKNOWN:case Dr.DEADLINE_EXCEEDED:case Dr.RESOURCE_EXHAUSTED:case Dr.INTERNAL:case Dr.UNAVAILABLE:case Dr.UNAUTHENTICATED:return;case Dr.INVALID_ARGUMENT:case Dr.NOT_FOUND:case Dr.ALREADY_EXISTS:case Dr.PERMISSION_DENIED:case Dr.FAILED_PRECONDITION:case Dr.ABORTED:case Dr.OUT_OF_RANGE:case Dr.UNIMPLEMENTED:case Dr.DATA_LOSS:return 1;default:return Mr(),0}}function Ss(t){if(void 0===t)return Or("GRPC error has no .code"),Dr.UNKNOWN;switch(t){case ms.OK:return Dr.OK;case ms.CANCELLED:return Dr.CANCELLED;case ms.UNKNOWN:return Dr.UNKNOWN;case ms.DEADLINE_EXCEEDED:return Dr.DEADLINE_EXCEEDED;case ms.RESOURCE_EXHAUSTED:return Dr.RESOURCE_EXHAUSTED;case ms.INTERNAL:return Dr.INTERNAL;case ms.UNAVAILABLE:return Dr.UNAVAILABLE;case ms.UNAUTHENTICATED:return Dr.UNAUTHENTICATED;case ms.INVALID_ARGUMENT:return Dr.INVALID_ARGUMENT;case ms.NOT_FOUND:return Dr.NOT_FOUND;case ms.ALREADY_EXISTS:return Dr.ALREADY_EXISTS;case ms.PERMISSION_DENIED:return Dr.PERMISSION_DENIED;case ms.FAILED_PRECONDITION:return Dr.FAILED_PRECONDITION;case ms.ABORTED:return Dr.ABORTED;case ms.OUT_OF_RANGE:return Dr.OUT_OF_RANGE;case ms.UNIMPLEMENTED:return Dr.UNIMPLEMENTED;case ms.DATA_LOSS:return Dr.DATA_LOSS;default:return Mr()}}(I=ms=ms||{})[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";var Ns=(Rs.prototype.insert=function(t,e){return new Rs(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,As.BLACK,null,null))},Rs.prototype.remove=function(t){return new Rs(this.comparator,this.root.remove(t,this.comparator).copy(null,null,As.BLACK,null,null))},Rs.prototype.get=function(t){for(var e=this.root;!e.isEmpty();){var n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:0<n&&(e=e.right)}return null},Rs.prototype.indexOf=function(t){for(var e=0,n=this.root;!n.isEmpty();){var r=this.comparator(t,n.key);if(0===r)return e+n.left.size;n=r<0?n.left:(e+=n.left.size+1,n.right)}return-1},Rs.prototype.isEmpty=function(){return this.root.isEmpty()},Object.defineProperty(Rs.prototype,"size",{get:function(){return this.root.size},enumerable:!1,configurable:!0}),Rs.prototype.minKey=function(){return this.root.minKey()},Rs.prototype.maxKey=function(){return this.root.maxKey()},Rs.prototype.inorderTraversal=function(t){return this.root.inorderTraversal(t)},Rs.prototype.forEach=function(n){this.inorderTraversal(function(t,e){return n(t,e),!1})},Rs.prototype.toString=function(){var n=[];return this.inorderTraversal(function(t,e){return n.push(t+":"+e),!1}),"{"+n.join(", ")+"}"},Rs.prototype.reverseTraversal=function(t){return this.root.reverseTraversal(t)},Rs.prototype.getIterator=function(){return new Ds(this.root,null,this.comparator,!1)},Rs.prototype.getIteratorFrom=function(t){return new Ds(this.root,t,this.comparator,!1)},Rs.prototype.getReverseIterator=function(){return new Ds(this.root,null,this.comparator,!0)},Rs.prototype.getReverseIteratorFrom=function(t){return new Ds(this.root,t,this.comparator,!0)},Rs),Ds=(Cs.prototype.getNext=function(){var t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e},Cs.prototype.hasNext=function(){return 0<this.nodeStack.length},Cs.prototype.peek=function(){if(0===this.nodeStack.length)return null;var t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}},Cs),As=(ks.prototype.copy=function(t,e,n,r,i){return new ks(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)},ks.prototype.isEmpty=function(){return!1},ks.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)},ks.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},ks.prototype.min=function(){return this.left.isEmpty()?this:this.left.min()},ks.prototype.minKey=function(){return this.min().key},ks.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},ks.prototype.insert=function(t,e,n){var r=this,i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()},ks.prototype.removeMin=function(){if(this.left.isEmpty())return ks.EMPTY;var t=this;return(t=(t=!t.left.isRed()&&!t.left.left.isRed()?t.moveRedLeft():t).copy(null,null,null,t.left.removeMin(),null)).fixUp()},ks.prototype.remove=function(t,e){var n,r=this;if(e(t,r.key)<0)r=(r=!(r.left.isEmpty()||r.left.isRed()||r.left.left.isRed())?r.moveRedLeft():r).copy(null,null,null,r.left.remove(t,e),null);else{if(0===e(t,(r=!((r=r.left.isRed()?r.rotateRight():r).right.isEmpty()||r.right.isRed()||r.right.left.isRed())?r.moveRedRight():r).key)){if(r.right.isEmpty())return ks.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()},ks.prototype.isRed=function(){return this.color},ks.prototype.fixUp=function(){var t=this;return t=(t=(t=t.right.isRed()&&!t.left.isRed()?t.rotateLeft():t).left.isRed()&&t.left.left.isRed()?t.rotateRight():t).left.isRed()&&t.right.isRed()?t.colorFlip():t},ks.prototype.moveRedLeft=function(){var t=this.colorFlip();return t=t.right.left.isRed()?(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip():t},ks.prototype.moveRedRight=function(){var t=this.colorFlip();return t=t.left.left.isRed()?(t=t.rotateRight()).colorFlip():t},ks.prototype.rotateLeft=function(){var t=this.copy(null,null,ks.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},ks.prototype.rotateRight=function(){var t=this.copy(null,null,ks.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},ks.prototype.colorFlip=function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)},ks.prototype.checkMaxDepth=function(){var t=this.check();return Math.pow(2,t)<=this.size+1},ks.prototype.check=function(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();var t=this.left.check();if(t!==this.right.check())throw Mr();return t+(this.isRed()?0:1)},ks);function ks(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ks.RED,this.left=null!=r?r:ks.EMPTY,this.right=null!=i?i:ks.EMPTY,this.size=this.left.size+1+this.right.size}function Cs(t,e,n,r){this.isReverse=r,this.nodeStack=[];for(var i=1;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}function Rs(t,e){this.comparator=t,this.root=e||As.EMPTY}function xs(){this.size=0}As.EMPTY=null,As.RED=!0,As.BLACK=!1,As.EMPTY=(Object.defineProperty(xs.prototype,"key",{get:function(){throw Mr()},enumerable:!1,configurable:!0}),Object.defineProperty(xs.prototype,"value",{get:function(){throw Mr()},enumerable:!1,configurable:!0}),Object.defineProperty(xs.prototype,"color",{get:function(){throw Mr()},enumerable:!1,configurable:!0}),Object.defineProperty(xs.prototype,"left",{get:function(){throw Mr()},enumerable:!1,configurable:!0}),Object.defineProperty(xs.prototype,"right",{get:function(){throw Mr()},enumerable:!1,configurable:!0}),xs.prototype.copy=function(t,e,n,r,i){return this},xs.prototype.insert=function(t,e,n){return new As(t,e)},xs.prototype.remove=function(t,e){return this},xs.prototype.isEmpty=function(){return!0},xs.prototype.inorderTraversal=function(t){return!1},xs.prototype.reverseTraversal=function(t){return!1},xs.prototype.minKey=function(){return null},xs.prototype.maxKey=function(){return null},xs.prototype.isRed=function(){return!1},xs.prototype.checkMaxDepth=function(){return!0},xs.prototype.check=function(){return 0},new xs);var Os=(Fs.prototype.has=function(t){return null!==this.data.get(t)},Fs.prototype.first=function(){return this.data.minKey()},Fs.prototype.last=function(){return this.data.maxKey()},Object.defineProperty(Fs.prototype,"size",{get:function(){return this.data.size},enumerable:!1,configurable:!0}),Fs.prototype.indexOf=function(t){return this.data.indexOf(t)},Fs.prototype.forEach=function(n){this.data.inorderTraversal(function(t,e){return n(t),!1})},Fs.prototype.forEachInRange=function(t,e){for(var n=this.data.getIteratorFrom(t[0]);n.hasNext();){var r=n.getNext();if(0<=this.comparator(r.key,t[1]))return;e(r.key)}},Fs.prototype.forEachWhile=function(t,e){for(var n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return},Fs.prototype.firstAfterOrEqual=function(t){t=this.data.getIteratorFrom(t);return t.hasNext()?t.getNext().key:null},Fs.prototype.getIterator=function(){return new Ls(this.data.getIterator())},Fs.prototype.getIteratorFrom=function(t){return new Ls(this.data.getIteratorFrom(t))},Fs.prototype.add=function(t){return this.copy(this.data.remove(t).insert(t,!0))},Fs.prototype.delete=function(t){return this.has(t)?this.copy(this.data.remove(t)):this},Fs.prototype.isEmpty=function(){return this.data.isEmpty()},Fs.prototype.unionWith=function(t){var e=this;return e.size<t.size&&(e=t,t=this),t.forEach(function(t){e=e.add(t)}),e},Fs.prototype.isEqual=function(t){if(!(t instanceof Fs))return!1;if(this.size!==t.size)return!1;for(var e=this.data.getIterator(),n=t.data.getIterator();e.hasNext();){var r=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0},Fs.prototype.toArray=function(){var e=[];return this.forEach(function(t){e.push(t)}),e},Fs.prototype.toString=function(){var e=[];return this.forEach(function(t){return e.push(t)}),"SortedSet("+e.toString()+")"},Fs.prototype.copy=function(t){var e=new Fs(this.comparator);return e.data=t,e},Fs),Ls=(Ms.prototype.getNext=function(){return this.iter.getNext().key},Ms.prototype.hasNext=function(){return this.iter.hasNext()},Ms),Ps=new Ns(mi.comparator);function Ms(t){this.iter=t}function Fs(t){this.comparator=t,this.data=new Ns(this.comparator)}var Vs=new Ns(mi.comparator);var Us=new Ns(mi.comparator);var qs=new Os(mi.comparator);function Bs(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=qs,r=0,i=t;r<i.length;r++)var o=i[r],n=n.add(o);return n}var js=new Os(qr);var Ks=(Zs.createSynthesizedRemoteEventForCurrentChange=function(t,e){var n=new Map;return n.set(t,Gs.createSynthesizedTargetChangeForCurrentChange(t,e)),new Zs(Gr.min(),n,js,Ps,Bs())},Zs),Gs=($s.createSynthesizedTargetChangeForCurrentChange=function(t,e){return new $s(ni.EMPTY_BYTE_STRING,e,Bs(),Bs(),Bs())},$s),Qs=function(t,e,n,r){this.v=t,this.removedTargetIds=e,this.key=n,this.P=r},zs=function(t,e){this.targetId=t,this.V=e},Hs=function(t,e,n,r){void 0===n&&(n=ni.EMPTY_BYTE_STRING),void 0===r&&(r=null),this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r},Ws=(Object.defineProperty(Js.prototype,"current",{get:function(){return this.N},enumerable:!1,configurable:!0}),Object.defineProperty(Js.prototype,"resumeToken",{get:function(){return this.C},enumerable:!1,configurable:!0}),Object.defineProperty(Js.prototype,"k",{get:function(){return 0!==this.S},enumerable:!1,configurable:!0}),Object.defineProperty(Js.prototype,"O",{get:function(){return this.F},enumerable:!1,configurable:!0}),Js.prototype.$=function(t){0<t.approximateByteSize()&&(this.F=!0,this.C=t)},Js.prototype.M=function(){var n=Bs(),r=Bs(),i=Bs();return this.D.forEach(function(t,e){switch(e){case 0:n=n.add(t);break;case 2:r=r.add(t);break;case 1:i=i.add(t);break;default:Mr()}}),new Gs(this.C,this.N,n,r,i)},Js.prototype.L=function(){this.F=!1,this.D=ea()},Js.prototype.B=function(t,e){this.F=!0,this.D=this.D.insert(t,e)},Js.prototype.q=function(t){this.F=!0,this.D=this.D.remove(t)},Js.prototype.U=function(){this.S+=1},Js.prototype.K=function(){--this.S},Js.prototype.j=function(){this.F=!0,this.N=!0},Js),Ys=(Xs.prototype.X=function(t){for(var e=0,n=t.v;e<n.length;e++){var r=n[e];t.P&&t.P.isFoundDocument()?this.Z(r,t.P):this.tt(r,t.key,t.P)}for(var i=0,o=t.removedTargetIds;i<o.length;i++)r=o[i],this.tt(r,t.key,t.P)},Xs.prototype.et=function(n){var r=this;this.forEachTarget(n,function(t){var e=r.nt(t);switch(n.state){case 0:r.st(t)&&e.$(n.resumeToken);break;case 1:e.K(),e.k||e.L(),e.$(n.resumeToken);break;case 2:e.K(),e.k||r.removeTarget(t);break;case 3:r.st(t)&&(e.j(),e.$(n.resumeToken));break;case 4:r.st(t)&&(r.it(t),e.$(n.resumeToken));break;default:Mr()}})},Xs.prototype.forEachTarget=function(t,n){var r=this;0<t.targetIds.length?t.targetIds.forEach(n):this.G.forEach(function(t,e){r.st(e)&&n(e)})},Xs.prototype.rt=function(t){var e=t.targetId,n=t.V.count,t=this.ot(e);t&&(Ui(t=t.target)?0===n?(t=new mi(t.path),this.tt(e,t,Oi.newNoDocument(t,Gr.min()))):Fr(1===n):this.ct(e)!==n&&(this.it(e),this.Y=this.Y.add(e)))},Xs.prototype.ut=function(r){var i=this,o=new Map;this.G.forEach(function(t,e){var n=i.ot(e);n&&(t.current&&Ui(n.target)&&(n=new mi(n.target.path),null!==i.H.get(n)||i.at(e,n)||i.tt(e,n,Oi.newNoDocument(n,r))),t.O&&(o.set(e,t.M()),t.L()))});var s=Bs();this.J.forEach(function(t,e){var n=!0;e.forEachWhile(function(t){t=i.ot(t);return!t||2===t.purpose||(n=!1)}),n&&(s=s.add(t))});var t=new Ks(r,o,this.Y,this.H,s);return this.H=Ps,this.J=ta(),this.Y=new Os(qr),t},Xs.prototype.Z=function(t,e){var n;this.st(t)&&(n=this.at(t,e.key)?2:0,this.nt(t).B(e.key,n),this.H=this.H.insert(e.key,e),this.J=this.J.insert(e.key,this.ht(e.key).add(t)))},Xs.prototype.tt=function(t,e,n){var r;this.st(t)&&(r=this.nt(t),this.at(t,e)?r.B(e,1):r.q(e),this.J=this.J.insert(e,this.ht(e).delete(t)),n&&(this.H=this.H.insert(e,n)))},Xs.prototype.removeTarget=function(t){this.G.delete(t)},Xs.prototype.ct=function(t){var e=this.nt(t).M();return this.W.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size},Xs.prototype.U=function(t){this.nt(t).U()},Xs.prototype.nt=function(t){var e=this.G.get(t);return e||(e=new Ws,this.G.set(t,e)),e},Xs.prototype.ht=function(t){var e=this.J.get(t);return e||(e=new Os(qr),this.J=this.J.insert(t,e)),e},Xs.prototype.st=function(t){var e=null!==this.ot(t);return e||xr("WatchChangeAggregator","Detected inactive target",t),e},Xs.prototype.ot=function(t){var e=this.G.get(t);return e&&e.k?null:this.W.lt(t)},Xs.prototype.it=function(e){var n=this;this.G.set(e,new Ws),this.W.getRemoteKeysForTarget(e).forEach(function(t){n.tt(e,t,null)})},Xs.prototype.at=function(t,e){return this.W.getRemoteKeysForTarget(t).has(e)},Xs);function Xs(t){this.W=t,this.G=new Map,this.H=Ps,this.J=ta(),this.Y=new Os(qr)}function Js(){this.S=0,this.D=ea(),this.C=ni.EMPTY_BYTE_STRING,this.N=!1,this.F=!0}function $s(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}function Zs(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}function ta(){return new Ns(mi.comparator)}function ea(){return new Ns(mi.comparator)}var na={asc:"ASCENDING",desc:"DESCENDING"},ra={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ia=function(t,e){this.databaseId=t,this.I=e};function oa(t,e){return t.I?new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")+"."+("000000000"+e.nanoseconds).slice(-9)+"Z":{seconds:""+e.seconds,nanos:e.nanoseconds}}function sa(t,e){return t.I?e.toBase64():e.toUint8Array()}function aa(t){return Fr(!!t),Gr.fromTimestamp((t=ci(t),new Kr(t.seconds,t.nanos)))}function ua(t,e){return new $r(["projects",t.projectId,"databases",t.database]).child("documents").child(e).canonicalString()}function ca(t){t=$r.fromString(t);return Fr(ka(t)),t}function ha(t,e){return ua(t.databaseId,e.path)}function la(t,e){e=ca(e);if(e.get(1)!==t.databaseId.projectId)throw new Ar(Dr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+t.databaseId.projectId);if(e.get(3)!==t.databaseId.database)throw new Ar(Dr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+t.databaseId.database);return new mi(ya(e))}function fa(t,e){return ua(t.databaseId,e)}function da(t){t=ca(t);return 4===t.length?$r.emptyPath():ya(t)}function pa(t){return new $r(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ya(t){return Fr(4<t.length&&"documents"===t.get(4)),t.popFirst(5)}function ga(t,e,n){return{name:ha(t,e),fields:n.toProto().mapValue.fields}}function ma(t,e,n){var r=la(t,e.name),t=aa(e.updateTime),e=new Ri({mapValue:{fields:e.fields}}),e=Oi.newFoundDocument(r,t,e);return n&&e.setHasCommittedMutations(),n?e.setHasCommittedMutations():e}function va(t,e){var n,r,i;if(e instanceof cs)n={update:ga(t,e.key,e.value)};else if(e instanceof ws)n={delete:ha(t,e.key)};else if(e instanceof hs)n={update:ga(t,e.key,e.data),updateMask:(i=e.fieldMask,r=[],i.fields.forEach(function(t){return r.push(t.canonicalString())}),{fieldPaths:r})};else{if(!(e instanceof Is))return Mr();n={verify:ha(t,e.key)}}return 0<e.fieldTransforms.length&&(n.updateTransforms=e.fieldTransforms.map(function(t){var e=t.transform;if(e instanceof Uo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(e instanceof qo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:e.elements}};if(e instanceof Qo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:e.elements}};if(e instanceof Yo)return{fieldPath:t.field.canonicalString(),increment:e.A};throw Mr()})),e.precondition.isNone||(n.currentDocument=void 0!==(i=e.precondition).updateTime?{updateTime:(e=t,t=i.updateTime,oa(e,t.toTimestamp()))}:void 0!==i.exists?{exists:i.exists}:Mr()),n}function ba(e,t){var n=t.currentDocument?void 0!==(s=t.currentDocument).updateTime?es.updateTime(aa(s.updateTime)):void 0!==s.exists?es.exists(s.exists):es.none():es.none(),r=t.updateTransforms?t.updateTransforms.map(function(t){return function(t,e){var n,r=null;"setToServerValue"in e?(Fr("REQUEST_TIME"===e.setToServerValue),r=new Uo):"appendMissingElements"in e?(n=e.appendMissingElements.values||[],r=new qo(n)):"removeAllFromArray"in e?(n=e.removeAllFromArray.values||[],r=new Qo(n)):"increment"in e?r=new Yo(t,e.increment):Mr();e=ti.fromServerFormat(e.fieldPath);return new ts(e,r)}(e,t)}):[];if(t.update){t.update.name;var i=la(e,t.update.name),o=new Ri({mapValue:{fields:t.update.fields}});if(t.updateMask){var s=(s=t.updateMask.fieldPaths||[],new ei(s.map(function(t){return ti.fromServerFormat(t)})));return new hs(i,o,s,n,r)}return new cs(i,o,n,r)}if(t.delete){r=la(e,t.delete);return new ws(r,n)}if(t.verify){t=la(e,t.verify);return new Is(t,n)}return Mr()}function wa(t,e){return{documents:[fa(t,e.path)]}}function Ia(t,e){var n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=fa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);r=function(t){if(0!==t.length){t=t.map(function(t){if("=="===t.op){if(ki(t.value))return{unaryFilter:{field:Sa(t.field),op:"IS_NAN"}};if(Ai(t.value))return{unaryFilter:{field:Sa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ki(t.value))return{unaryFilter:{field:Sa(t.field),op:"IS_NOT_NAN"}};if(Ai(t.value))return{unaryFilter:{field:Sa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sa(t.field),op:(e=t.op,ra[e]),value:t.value}};var e});return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}}(e.filters);r&&(n.structuredQuery.where=r);r=function(t){if(0!==t.length)return t.map(function(t){return{field:Sa((t=t).field),direction:(t=t.dir,na[t])}})}(e.orderBy);r&&(n.structuredQuery.orderBy=r);r=e.limit,r=t.I||pi(r)?r:{value:r};return null!==r&&(n.structuredQuery.limit=r),e.startAt&&(n.structuredQuery.startAt=Ta(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ta(e.endAt)),n}function Ea(t){var e=da(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,i=null;0<r&&(Fr(1===r),(a=n.from[0]).allDescendants?i=a.collectionId:e=e.child(a.collectionId));var o=[];n.where&&(o=function e(t){return t?void 0!==t.unaryFilter?[Aa(t)]:void 0!==t.fieldFilter?[Da(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(function(t){return e(t)}).reduce(function(t,e){return t.concat(e)}):Mr():[]}(n.where));var s=[],t=null,r=null,a=null;return vo(e,i,s=n.orderBy?n.orderBy.map(function(t){return new po(Na((e=t).field),function(){switch(e.direction){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}());var e}):s,o,t=n.limit?pi(o="object"==typeof(o=n.limit)?o.value:o)?null:o:t,"F",r=n.startAt?_a(n.startAt):r,a=n.endAt?_a(n.endAt):a)}function Ta(t){return{before:t.before,values:t.position}}function _a(t){var e=!!t.before,t=t.values||[];return new ao(t,e)}function Sa(t){return{fieldPath:t.canonicalString()}}function Na(t){return ti.fromServerFormat(t.fieldPath)}function Da(t){return Bi.create(Na(t.fieldFilter.field),function(){switch(t.fieldFilter.op){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Mr()}}(),t.fieldFilter.value)}function Aa(t){switch(t.unaryFilter.op){case"IS_NAN":var e=Na(t.unaryFilter.field);return Bi.create(e,"==",{doubleValue:NaN});case"IS_NULL":e=Na(t.unaryFilter.field);return Bi.create(e,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var n=Na(t.unaryFilter.field);return Bi.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":n=Na(t.unaryFilter.field);return Bi.create(n,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Mr()}}function ka(t){return 4<=t.length&&"projects"===t.get(0)&&"databases"===t.get(2)}function Ca(t){for(var e="",n=0;n<t.length;n++)0<e.length&&(e=Ra(e)),e=function(t,e){for(var n=e,r=t.length,i=0;i<r;i++){var o=t.charAt(i);switch(o){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=o}}return n}(t.get(n),e);return Ra(e)}function Ra(t){return t+"\x01\x01"}function xa(t){var e=t.length;if(Fr(2<=e),2===e)return Fr("\x01"===t.charAt(0)&&"\x01"===t.charAt(1)),$r.emptyPath();for(var n=e-2,r=[],i="",o=0;o<e;){var s=t.indexOf("\x01",o);switch((s<0||n<s)&&Mr(),t.charAt(s+1)){case"\x01":var a=t.substring(o,s),u=void 0;0===i.length?u=a:(u=i+=a,i=""),r.push(u);break;case"\x10":i+=t.substring(o,s),i+="\0";break;case"\x11":i+=t.substring(o,s+1);break;default:Mr()}o=s+2}return new $r(r)}function Oa(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}var La=function(t,e){this.seconds=t,this.nanoseconds=e};Oa.store="owner",Oa.key="owner";function Pa(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}Pa.store="mutationQueues",Pa.keyPath="userId";function Ma(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}Ma.store="mutations",Ma.keyPath="batchId",Ma.userMutationsIndex="userMutationsIndex",Ma.userMutationsKeyPath=["userId","batchId"];var Fa=(Va.prefixForUser=function(t){return[t]},Va.prefixForPath=function(t,e){return[t,Ca(e)]},Va.key=function(t,e,n){return[t,Ca(e),n]},Va);function Va(){}Fa.store="documentMutations",Fa.PLACEHOLDER=new Fa;function Ua(t,e){this.path=t,this.readTime=e}function qa(t,e){this.path=t,this.version=e}var Ba=function(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o};Ba.store="remoteDocuments",Ba.readTimeIndex="readTimeIndex",Ba.readTimeIndexPath="readTime",Ba.collectionReadTimeIndex="collectionReadTimeIndex",Ba.collectionReadTimeIndexPath=["parentPath","readTime"];function ja(t){this.byteSize=t}ja.store="remoteDocumentGlobal",ja.key="remoteDocumentGlobalKey";function Ka(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}Ka.store="targets",Ka.keyPath="targetId",Ka.queryTargetsIndexName="queryTargetsIndex",Ka.queryTargetsKeyPath=["canonicalId","targetId"];var Ga=function(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n};Ga.store="targetDocuments",Ga.keyPath=["targetId","path"],Ga.documentTargetsIndex="documentTargetsIndex",Ga.documentTargetsKeyPath=["path","targetId"];function Qa(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}Qa.key="targetGlobalKey",Qa.store="targetGlobal";function za(t,e){this.collectionId=t,this.parent=e}za.store="collectionParents",za.keyPath=["collectionId","parent"];function Ha(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}Ha.store="clientMetadata",Ha.keyPath="clientId";function Wa(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}Wa.store="bundles",Wa.keyPath="bundleId";function Ya(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}Ya.store="namedQueries",Ya.keyPath="name";var Xa,Ja=s(s([],s(s([],s(s([],s(s([],[Pa.store,Ma.store,Fa.store,Ba.store,Ka.store,Oa.store,Qa.store,Ga.store]),[Ha.store])),[ja.store])),[za.store])),[Wa.store,Ya.store]),$a="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Te=(hu.prototype.addOnCommittedListener=function(t){this.onCommittedListeners.push(t)},hu.prototype.raiseOnCommittedEvent=function(){this.onCommittedListeners.forEach(function(t){return t()})},hu),Za=function(){var n=this;this.promise=new Promise(function(t,e){n.resolve=t,n.reject=e})},tu=(cu.prototype.catch=function(t){return this.next(void 0,t)},cu.prototype.next=function(r,i){var o=this;return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(r,this.result):new cu(function(e,n){o.nextCallback=function(t){o.wrapSuccess(r,t).next(e,n)},o.catchCallback=function(t){o.wrapFailure(i,t).next(e,n)}})},cu.prototype.toPromise=function(){var n=this;return new Promise(function(t,e){n.next(t,e)})},cu.prototype.wrapUserFunction=function(t){try{var e=t();return e instanceof cu?e:cu.resolve(e)}catch(t){return cu.reject(t)}},cu.prototype.wrapSuccess=function(t,e){return t?this.wrapUserFunction(function(){return t(e)}):cu.resolve(e)},cu.prototype.wrapFailure=function(t,e){return t?this.wrapUserFunction(function(){return t(e)}):cu.reject(e)},cu.resolve=function(n){return new cu(function(t,e){t(n)})},cu.reject=function(n){return new cu(function(t,e){e(n)})},cu.waitFor=function(t){return new cu(function(e,n){var r=0,i=0,o=!1;t.forEach(function(t){++r,t.next(function(){++i,o&&i===r&&e()},function(t){return n(t)})}),o=!0,i===r&&e()})},cu.or=function(t){for(var n=cu.resolve(!1),e=0,r=t;e<r.length;e++)!function(e){n=n.next(function(t){return t?cu.resolve(t):e()})}(r[e]);return n},cu.forEach=function(t,n){var r=this,i=[];return t.forEach(function(t,e){i.push(n.call(r,t,e))}),this.waitFor(i)},cu),eu=(uu.open=function(t,e,n,r){try{return new uu(e,t.transaction(r,n))}catch(t){throw new iu(e,t)}},Object.defineProperty(uu.prototype,"dt",{get:function(){return this.ft.promise},enumerable:!1,configurable:!0}),uu.prototype.abort=function(t){t&&this.ft.reject(t),this.aborted||(xr("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())},uu.prototype.store=function(t){t=this.transaction.objectStore(t);return new fu(t)},uu),nu=(au.delete=function(t){return xr("SimpleDb","Removing database:",t),pu(window.indexedDB.deleteDatabase(t)).toPromise()},au.yt=function(){if("undefined"==typeof indexedDB)return!1;if(au.gt())return!0;var t=h(),e=au._t(t),n=0<e&&e<10,e=au.Et(t),e=0<e&&e<4.5;return!(0<t.indexOf("MSIE ")||0<t.indexOf("Trident/")||0<t.indexOf("Edge/")||n||e)},au.gt=function(){var t;return"undefined"!=typeof process&&"YES"===(null===(t=process.env)||void 0===t?void 0:t.Tt)},au.It=function(t,e){return t.store(e)},au._t=function(t){t=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),t=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(t)},au.Et=function(t){t=t.match(/Android ([\d.]+)/i),t=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(t)},au.prototype.At=function(o){return y(this,void 0,void 0,function(){var e,i=this;return g(this,function(t){switch(t.label){case 0:return this.db?[3,2]:(xr("SimpleDb","Opening database:",this.name),e=this,[4,new Promise(function(e,n){var r=indexedDB.open(i.name,i.version);r.onsuccess=function(t){t=t.target.result;e(t)},r.onblocked=function(){n(new iu(o,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=function(t){t=t.target.error;"VersionError"===t.name?n(new Ar(Dr.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):n(new iu(o,t))},r.onupgradeneeded=function(t){xr("SimpleDb",'Database "'+i.name+'" requires upgrade from version:',t.oldVersion);var e=t.target.result;i.wt.Rt(e,r.transaction,t.oldVersion,i.version).next(function(){xr("SimpleDb","Database upgrade to version "+i.version+" complete")})}})]);case 1:e.db=t.sent(),t.label=2;case 2:return[2,(this.bt&&(this.db.onversionchange=function(t){return i.bt(t)}),this.db)]}})})},au.prototype.vt=function(e){this.bt=e,this.db&&(this.db.onversionchange=function(t){return e(t)})},au.prototype.runTransaction=function(a,n,u,c){return y(this,void 0,void 0,function(){var i,o,s,e;return g(this,function(t){switch(t.label){case 0:i="readonly"===n,o=0,e=function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:++o,t.label=1;case 1:return t.trys.push([1,4,,5]),[4,s.At(a)];case 2:return s.db=t.sent(),e=eu.open(s.db,a,i?"readonly":"readwrite",u),n=c(e).catch(function(t){return e.abort(t),tu.reject(t)}).toPromise(),r={},n.catch(function(){}),[4,e.dt];case 3:return[2,(r.value=(t.sent(),n),r)];case 4:return n=t.sent(),r="FirebaseError"!==n.name&&o<3,xr("SimpleDb","Transaction failed with error:",n.message,"Retrying:",r),s.close(),r?[3,5]:[2,{value:Promise.reject(n)}];case 5:return[2]}})},s=this,t.label=1;case 1:return[5,e()];case 2:if("object"==typeof(e=t.sent()))return[2,e.value];t.label=3;case 3:return[3,1];case 4:return[2]}})})},au.prototype.close=function(){this.db&&this.db.close(),this.db=void 0},au),ru=(Object.defineProperty(su.prototype,"isDone",{get:function(){return this.Vt},enumerable:!1,configurable:!0}),Object.defineProperty(su.prototype,"Dt",{get:function(){return this.St},enumerable:!1,configurable:!0}),Object.defineProperty(su.prototype,"cursor",{set:function(t){this.Pt=t},enumerable:!1,configurable:!0}),su.prototype.done=function(){this.Vt=!0},su.prototype.Ct=function(t){this.St=t},su.prototype.delete=function(){return pu(this.Pt.delete())},su),iu=(n(ou,Xa=Ar),ou);function ou(t,e){var n=this;return(n=Xa.call(this,Dr.UNAVAILABLE,"IndexedDB transaction '"+t+"' failed: "+e)||this).name="IndexedDbTransactionError",n}function su(t){this.Pt=t,this.Vt=!1,this.St=null}function au(t,e,n){this.name=t,this.version=e,this.wt=n,12.2===au._t(h())&&Or("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}function uu(e,t){var n=this;this.action=e,this.transaction=t,this.aborted=!1,this.ft=new Za,this.transaction.oncomplete=function(){n.ft.resolve()},this.transaction.onabort=function(){t.error?n.ft.reject(new iu(e,t.error)):n.ft.resolve()},this.transaction.onerror=function(t){t=gu(t.target.error);n.ft.reject(new iu(e,t))}}function cu(t){var e=this;this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(function(t){e.isDone=!0,e.result=t,e.nextCallback&&e.nextCallback(t)},function(t){e.isDone=!0,e.error=t,e.catchCallback&&e.catchCallback(t)})}function hu(){this.onCommittedListeners=[]}function lu(t){return"IndexedDbTransactionError"===t.name}var fu=(du.prototype.put=function(t,e){t=void 0!==e?(xr("SimpleDb","PUT",this.store.name,t,e),this.store.put(e,t)):(xr("SimpleDb","PUT",this.store.name,"<auto-key>",t),this.store.put(t));return pu(t)},du.prototype.add=function(t){return xr("SimpleDb","ADD",this.store.name,t,t),pu(this.store.add(t))},du.prototype.get=function(e){var n=this;return pu(this.store.get(e)).next(function(t){return void 0===t&&(t=null),xr("SimpleDb","GET",n.store.name,e,t),t})},du.prototype.delete=function(t){return xr("SimpleDb","DELETE",this.store.name,t),pu(this.store.delete(t))},du.prototype.count=function(){return xr("SimpleDb","COUNT",this.store.name),pu(this.store.count())},du.prototype.Nt=function(t,e){var e=this.cursor(this.options(t,e)),n=[];return this.xt(e,function(t,e){n.push(e)}).next(function(){return n})},du.prototype.Ft=function(t,e){xr("SimpleDb","DELETE ALL",this.store.name);e=this.options(t,e);e.kt=!1;e=this.cursor(e);return this.xt(e,function(t,e,n){return n.delete()})},du.prototype.Ot=function(t,e){e?n=t:(n={},e=t);var n=this.cursor(n);return this.xt(n,e)},du.prototype.$t=function(r){var t=this.cursor({});return new tu(function(n,e){t.onerror=function(t){t=gu(t.target.error);e(t)},t.onsuccess=function(t){var e=t.target.result;e?r(e.primaryKey,e.value).next(function(t){t?e.continue():n()}):n()}})},du.prototype.xt=function(t,i){var o=[];return new tu(function(r,e){t.onerror=function(t){e(t.target.error)},t.onsuccess=function(t){var e,n=t.target.result;n?(e=new ru(n),(t=i(n.primaryKey,n.value,e))instanceof tu&&(t=t.catch(function(t){return e.done(),tu.reject(t)}),o.push(t)),e.isDone?r():null===e.Dt?n.continue():n.continue(e.Dt)):r()}}).next(function(){return tu.waitFor(o)})},du.prototype.options=function(t,e){var n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}},du.prototype.cursor=function(t){var e="next";if(t.reverse&&(e="prev"),t.index){var n=this.store.index(t.index);return t.kt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)},du);function du(t){this.store=t}function pu(t){return new tu(function(e,n){t.onsuccess=function(t){t=t.target.result;e(t)},t.onerror=function(t){t=gu(t.target.error);n(t)}})}var yu=!1;function gu(t){var e=nu._t(h());if(12.2<=e&&e<13){e="An internal error was encountered in the Indexed Database server";if(0<=t.message.indexOf(e)){var n=new Ar("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '"+e+"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");return yu||(yu=!0,setTimeout(function(){throw n},0)),n}}return t}var mu,vu=(n(bu,mu=Te),bu);function bu(t,e){var n=this;return(n=mu.call(this)||this).Mt=t,n.currentSequenceNumber=e,n}function wu(t,e){return nu.It(t.Mt,e)}var Iu=(Du.prototype.applyToRemoteDocument=function(t,e){for(var n,r,i,o,s,a,u=e.mutationResults,c=0;c<this.mutations.length;c++){var h=this.mutations[c];h.key.isEqual(t.key)&&(n=h,r=t,i=u[c],h=a=s=o=void 0,n instanceof cs?(s=r,a=i,h=(o=n).value.clone(),o=ps(o.fieldTransforms,s,a.transformResults),h.setAll(o),s.convertToFoundDocument(a.version,h).setHasCommittedMutations()):n instanceof hs?(o=r,s=i,rs((a=n).precondition,o)?(h=ps(a.fieldTransforms,o,s.transformResults),(n=o.data).setAll(ds(a)),n.setAll(h),o.convertToFoundDocument(s.version,n).setHasCommittedMutations()):o.convertToUnknownDocument(s.version)):r.convertToNoDocument(i.version).setHasCommittedMutations())}},Du.prototype.applyToLocalView=function(t){for(var e=0,n=this.baseMutations;e<n.length;e++)(r=n[e]).key.isEqual(t.key)&&is(r,t,this.localWriteTime);for(var r,i=0,o=this.mutations;i<o.length;i++)(r=o[i]).key.isEqual(t.key)&&is(r,t,this.localWriteTime)},Du.prototype.applyToLocalDocumentSet=function(n){var r=this;this.mutations.forEach(function(t){var e=n.get(t.key),t=e;r.applyToLocalView(t),e.isValidDocument()||t.convertToNoDocument(Gr.min())})},Du.prototype.keys=function(){return this.mutations.reduce(function(t,e){return t.add(e.key)},Bs())},Du.prototype.isEqual=function(t){return this.batchId===t.batchId&&Br(this.mutations,t.mutations,os)&&Br(this.baseMutations,t.baseMutations,os)},Du),Eu=(Nu.from=function(t,e,n){Fr(t.mutations.length===n.length);for(var r=Us,i=t.mutations,o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Nu(t,e,n,r)},Nu),Tu=(Su.prototype.withSequenceNumber=function(t){return new Su(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)},Su.prototype.withResumeToken=function(t,e){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)},Su.prototype.withLastLimboFreeSnapshotVersion=function(t){return new Su(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)},Su),_u=function(t){this.Lt=t};function Su(t,e,n,r,i,o,s){void 0===i&&(i=Gr.min()),void 0===o&&(o=Gr.min()),void 0===s&&(s=ni.EMPTY_BYTE_STRING),this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}function Nu(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}function Du(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}function Au(t,e){if(e.document)return ma(t.Lt,e.document,!!e.hasCommittedMutations);if(e.noDocument){var n=mi.fromSegments(e.noDocument.path),r=Ou(e.noDocument.readTime),n=Oi.newNoDocument(n,r);return e.hasCommittedMutations?n.setHasCommittedMutations():n}if(e.unknownDocument){n=mi.fromSegments(e.unknownDocument.path),r=Ou(e.unknownDocument.version);return Oi.newUnknownDocument(n,r)}return Mr()}function ku(t,e,n){var r=Cu(n),n=e.key.path.popLast().toArray();if(e.isFoundDocument()){var i={name:ha(o=t.Lt,(s=e).key),fields:s.data.toProto().mapValue.fields,updateTime:oa(o,s.version.toTimestamp())},o=e.hasCommittedMutations;return new Ba(null,null,i,o,r,n)}if(e.isNoDocument()){var s=e.key.path.toArray(),i=xu(e.version),o=e.hasCommittedMutations;return new Ba(null,new Ua(s,i),null,o,r,n)}if(e.isUnknownDocument()){o=e.key.path.toArray(),e=xu(e.version);return new Ba(new qa(o,e),null,null,!0,r,n)}return Mr()}function Cu(t){t=t.toTimestamp();return[t.seconds,t.nanoseconds]}function Ru(t){t=new Kr(t[0],t[1]);return Gr.fromTimestamp(t)}function xu(t){t=t.toTimestamp();return new La(t.seconds,t.nanoseconds)}function Ou(t){t=new Kr(t.seconds,t.nanoseconds);return Gr.fromTimestamp(t)}function Lu(e,t){for(var n=(t.baseMutations||[]).map(function(t){return ba(e.Lt,t)}),r=0;r<t.mutations.length-1;++r){var i,o=t.mutations[r];r+1<t.mutations.length&&void 0!==t.mutations[r+1].transform&&(i=t.mutations[r+1],o.updateTransforms=i.transform.fieldTransforms,t.mutations.splice(r+1,1),++r)}var s=t.mutations.map(function(t){return ba(e.Lt,t)}),a=Kr.fromMillis(t.localWriteTimeMs);return new Iu(t.batchId,a,n,s)}function Pu(t){var e=Ou(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Ou(t.lastLimboFreeSnapshotVersion):Gr.min(),r=void 0!==t.query.documents?(Fr(1===(r=t.query).documents.length),No(bo(da(r.documents[0])))):No(Ea(t.query));return new Tu(r,t.targetId,0,t.lastListenSequenceNumber,e,n,ni.fromBase64String(t.resumeToken))}function Mu(t,e){var n=xu(e.snapshotVersion),r=xu(e.lastLimboFreeSnapshotVersion),i=(Ui(e.target)?wa:Ia)(t.Lt,e.target),t=e.resumeToken.toBase64();return new Ka(e.targetId,Fi(e.target),n,t,e.sequenceNumber,r,i)}function Fu(t){var e=Ea({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Do(e,e.limit,"L"):e}var Vu=(Uu.prototype.getBundleMetadata=function(t,e){return qu(t).get(e).next(function(t){if(t)return{id:(t=t).bundleId,createTime:Ou(t.createTime),version:t.version}})},Uu.prototype.saveBundleMetadata=function(t,e){return qu(t).put({bundleId:(e=e).id,createTime:xu(aa(e.createTime)),version:e.version})},Uu.prototype.getNamedQuery=function(t,e){return Bu(t).get(e).next(function(t){if(t)return{name:(t=t).name,query:Fu(t.bundledQuery),readTime:Ou(t.readTime)}})},Uu.prototype.saveNamedQuery=function(t,e){return Bu(t).put({name:(e=e).name,readTime:xu(aa(e.readTime)),bundledQuery:e.bundledQuery})},Uu);function Uu(){}function qu(t){return wu(t,Wa.store)}function Bu(t){return wu(t,Ya.store)}var ju=(Hu.prototype.addToCollectionParentIndex=function(t,e){return this.Bt.add(e),tu.resolve()},Hu.prototype.getCollectionParents=function(t,e){return tu.resolve(this.Bt.getEntries(e))},Hu),Ku=(zu.prototype.add=function(t){var e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Os($r.comparator),t=!r.has(n);return this.index[e]=r.add(n),t},zu.prototype.has=function(t){var e=t.lastSegment(),t=t.popLast(),e=this.index[e];return e&&e.has(t)},zu.prototype.getEntries=function(t){return(this.index[t]||new Os($r.comparator)).toArray()},zu),Gu=(Qu.prototype.addToCollectionParentIndex=function(t,e){var n=this;if(this.qt.has(e))return tu.resolve();var r=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(function(){n.qt.add(e)});i={collectionId:r,parent:Ca(i)};return Wu(t).put(i)},Qu.prototype.getCollectionParents=function(t,i){var o=[],e=IDBKeyRange.bound([i,""],[jr(i),""],!1,!0);return Wu(t).Nt(e).next(function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];if(r.collectionId!==i)break;o.push(xa(r.parent))}return o})},Qu);function Qu(){this.qt=new Ku}function zu(){this.index={}}function Hu(){this.Bt=new Ku}function Wu(t){return wu(t,za.store)}var Yu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xu=(Ju.withCacheSize=function(t){return new Ju(t,Ju.DEFAULT_COLLECTION_PERCENTILE,Ju.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)},Ju);function Ju(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}function $u(t,e,n){var r=t.store(Ma.store),i=t.store(Fa.store),o=[],t=IDBKeyRange.only(n.batchId),s=0,t=r.Ot({range:t},function(t,e,n){return s++,n.delete()});o.push(t.next(function(){Fr(1===s)}));for(var a=[],u=0,c=n.mutations;u<c.length;u++){var h=c[u],l=Fa.key(e,h.key.path,n.batchId);o.push(i.delete(l)),a.push(h.key)}return tu.waitFor(o).next(function(){return a})}function Zu(t){if(!t)return 0;var e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Mr();e=t.noDocument}return JSON.stringify(e).length}Xu.DEFAULT_COLLECTION_PERCENTILE=10,Xu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xu.DEFAULT=new Xu(41943040,Xu.DEFAULT_COLLECTION_PERCENTILE,Xu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xu.DISABLED=new Xu(-1,0,0);var tc=(ec.Kt=function(t,e,n,r){return Fr(""!==t.uid),new ec(t.isAuthenticated()?t.uid:"",e,n,r)},ec.prototype.checkEmpty=function(t){var r=!0,e=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return rc(t).Ot({index:Ma.userMutationsIndex,range:e},function(t,e,n){r=!1,n.done()}).next(function(){return r})},ec.prototype.addMutationBatch=function(p,y,g,m){var v=this,b=ic(p),w=rc(p);return w.add({}).next(function(t){Fr("number"==typeof t);for(var e,n,r,i,o,s=new Iu(t,y,g,m),a=(e=v.R,n=v.userId,i=(r=s).baseMutations.map(function(t){return va(e.Lt,t)}),o=r.mutations.map(function(t){return va(e.Lt,t)}),new Ma(n,r.batchId,r.localWriteTime.toMillis(),i,o)),u=[],c=new Os(function(t,e){return qr(t.canonicalString(),e.canonicalString())}),h=0,l=m;h<l.length;h++){var f=l[h],d=Fa.key(v.userId,f.key.path,t),c=c.add(f.key.path.popLast());u.push(w.put(a)),u.push(b.put(d,Fa.PLACEHOLDER))}return c.forEach(function(t){u.push(v.Ut.addToCollectionParentIndex(p,t))}),p.addOnCommittedListener(function(){v.Qt[t]=s.keys()}),tu.waitFor(u).next(function(){return s})})},ec.prototype.lookupMutationBatch=function(t,e){var n=this;return rc(t).get(e).next(function(t){return t?(Fr(t.userId===n.userId),Lu(n.R,t)):null})},ec.prototype.jt=function(t,e){var n=this;return this.Qt[e]?tu.resolve(this.Qt[e]):this.lookupMutationBatch(t,e).next(function(t){if(t){t=t.keys();return n.Qt[e]=t}return null})},ec.prototype.getNextMutationBatchAfterBatchId=function(t,e){var r=this,i=e+1,e=IDBKeyRange.lowerBound([this.userId,i]),o=null;return rc(t).Ot({index:Ma.userMutationsIndex,range:e},function(t,e,n){e.userId===r.userId&&(Fr(e.batchId>=i),o=Lu(r.R,e)),n.done()}).next(function(){return o})},ec.prototype.getHighestUnacknowledgedBatchId=function(t){var e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return rc(t).Ot({index:Ma.userMutationsIndex,range:e,reverse:!0},function(t,e,n){r=e.batchId,n.done()}).next(function(){return r})},ec.prototype.getAllMutationBatches=function(t){var e=this,n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return rc(t).Nt(Ma.userMutationsIndex,n).next(function(t){return t.map(function(t){return Lu(e.R,t)})})},ec.prototype.getAllMutationBatchesAffectingDocumentKey=function(o,s){var a=this,t=Fa.prefixForPath(this.userId,s.path),t=IDBKeyRange.lowerBound(t),u=[];return ic(o).Ot({range:t},function(t,e,n){var r=t[0],i=t[1],t=t[2],i=xa(i);if(r===a.userId&&s.path.isEqual(i))return rc(o).get(t).next(function(t){if(!t)throw Mr();Fr(t.userId===a.userId),u.push(Lu(a.R,t))});n.done()}).next(function(){return u})},ec.prototype.getAllMutationBatchesAffectingDocumentKeys=function(e,t){var s=this,a=new Os(qr),n=[];return t.forEach(function(o){var t=Fa.prefixForPath(s.userId,o.path),t=IDBKeyRange.lowerBound(t),t=ic(e).Ot({range:t},function(t,e,n){var r=t[0],i=t[1],t=t[2],i=xa(i);r===s.userId&&o.path.isEqual(i)?a=a.add(t):n.done()});n.push(t)}),tu.waitFor(n).next(function(){return s.Wt(e,a)})},ec.prototype.getAllMutationBatchesAffectingQuery=function(t,e){var o=this,s=e.path,a=s.length+1,e=Fa.prefixForPath(this.userId,s),e=IDBKeyRange.lowerBound(e),u=new Os(qr);return ic(t).Ot({range:e},function(t,e,n){var r=t[0],i=t[1],t=t[2],i=xa(i);r===o.userId&&s.isPrefixOf(i)?i.length===a&&(u=u.add(t)):n.done()}).next(function(){return o.Wt(t,u)})},ec.prototype.Wt=function(e,t){var n=this,r=[],i=[];return t.forEach(function(t){i.push(rc(e).get(t).next(function(t){if(null===t)throw Mr();Fr(t.userId===n.userId),r.push(Lu(n.R,t))}))}),tu.waitFor(i).next(function(){return r})},ec.prototype.removeMutationBatch=function(e,n){var r=this;return $u(e.Mt,this.userId,n).next(function(t){return e.addOnCommittedListener(function(){r.Gt(n.batchId)}),tu.forEach(t,function(t){return r.referenceDelegate.markPotentiallyOrphaned(e,t)})})},ec.prototype.Gt=function(t){delete this.Qt[t]},ec.prototype.performConsistencyCheck=function(e){var i=this;return this.checkEmpty(e).next(function(t){if(!t)return tu.resolve();var t=IDBKeyRange.lowerBound(Fa.prefixForUser(i.userId)),r=[];return ic(e).Ot({range:t},function(t,e,n){t[0]===i.userId?(t=xa(t[1]),r.push(t)):n.done()}).next(function(){Fr(0===r.length)})})},ec.prototype.containsKey=function(t,e){return nc(t,this.userId,e)},ec.prototype.zt=function(t){var e=this;return oc(t).get(this.userId).next(function(t){return t||new Pa(e.userId,-1,"")})},ec);function ec(t,e,n,r){this.userId=t,this.R=e,this.Ut=n,this.referenceDelegate=r,this.Qt={}}function nc(t,o,e){var e=Fa.prefixForPath(o,e.path),s=e[1],e=IDBKeyRange.lowerBound(e),a=!1;return ic(t).Ot({range:e,kt:!0},function(t,e,n){var r=t[0],i=t[1];t[2],r===o&&i===s&&(a=!0),n.done()}).next(function(){return a})}function rc(t){return wu(t,Ma.store)}function ic(t){return wu(t,Fa.store)}function oc(t){return wu(t,Pa.store)}var sc=(cc.prototype.next=function(){return this.Ht+=2,this.Ht},cc.Jt=function(){return new cc(0)},cc.Yt=function(){return new cc(-1)},cc),ac=(uc.prototype.allocateTargetId=function(n){var r=this;return this.Xt(n).next(function(t){var e=new sc(t.highestTargetId);return t.highestTargetId=e.next(),r.Zt(n,t).next(function(){return t.highestTargetId})})},uc.prototype.getLastRemoteSnapshotVersion=function(t){return this.Xt(t).next(function(t){return Gr.fromTimestamp(new Kr(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))})},uc.prototype.getHighestSequenceNumber=function(t){return this.Xt(t).next(function(t){return t.highestListenSequenceNumber})},uc.prototype.setTargetsMetadata=function(e,n,r){var i=this;return this.Xt(e).next(function(t){return t.highestListenSequenceNumber=n,r&&(t.lastRemoteSnapshotVersion=r.toTimestamp()),n>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=n),i.Zt(e,t)})},uc.prototype.addTargetData=function(e,n){var r=this;return this.te(e,n).next(function(){return r.Xt(e).next(function(t){return t.targetCount+=1,r.ee(n,t),r.Zt(e,t)})})},uc.prototype.updateTargetData=function(t,e){return this.te(t,e)},uc.prototype.removeTargetData=function(e,t){var n=this;return this.removeMatchingKeysForTargetId(e,t.targetId).next(function(){return hc(e).delete(t.targetId)}).next(function(){return n.Xt(e)}).next(function(t){return Fr(0<t.targetCount),--t.targetCount,n.Zt(e,t)})},uc.prototype.removeTargets=function(n,r,i){var o=this,s=0,a=[];return hc(n).Ot(function(t,e){e=Pu(e);e.sequenceNumber<=r&&null===i.get(e.targetId)&&(s++,a.push(o.removeTargetData(n,e)))}).next(function(){return tu.waitFor(a)}).next(function(){return s})},uc.prototype.forEachTarget=function(t,n){return hc(t).Ot(function(t,e){e=Pu(e);n(e)})},uc.prototype.Xt=function(t){return lc(t).get(Qa.key).next(function(t){return Fr(null!==t),t})},uc.prototype.Zt=function(t,e){return lc(t).put(Qa.key,e)},uc.prototype.te=function(t,e){return hc(t).put(Mu(this.R,e))},uc.prototype.ee=function(t,e){var n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n},uc.prototype.getTargetCount=function(t){return this.Xt(t).next(function(t){return t.targetCount})},uc.prototype.getTargetData=function(t,r){var e=Fi(r),e=IDBKeyRange.bound([e,Number.NEGATIVE_INFINITY],[e,Number.POSITIVE_INFINITY]),i=null;return hc(t).Ot({range:e,index:Ka.queryTargetsIndexName},function(t,e,n){e=Pu(e);Vi(r,e.target)&&(i=e,n.done())}).next(function(){return i})},uc.prototype.addMatchingKeys=function(n,t,r){var i=this,o=[],s=fc(n);return t.forEach(function(t){var e=Ca(t.path);o.push(s.put(new Ga(r,e))),o.push(i.referenceDelegate.addReference(n,r,t))}),tu.waitFor(o)},uc.prototype.removeMatchingKeys=function(n,t,r){var i=this,o=fc(n);return tu.forEach(t,function(t){var e=Ca(t.path);return tu.waitFor([o.delete([r,e]),i.referenceDelegate.removeReference(n,r,t)])})},uc.prototype.removeMatchingKeysForTargetId=function(t,e){t=fc(t),e=IDBKeyRange.bound([e],[e+1],!1,!0);return t.delete(e)},uc.prototype.getMatchingKeysForTargetId=function(t,e){var e=IDBKeyRange.bound([e],[e+1],!1,!0),t=fc(t),r=Bs();return t.Ot({range:e,kt:!0},function(t,e,n){t=xa(t[1]),t=new mi(t);r=r.add(t)}).next(function(){return r})},uc.prototype.containsKey=function(t,e){var e=Ca(e.path),e=IDBKeyRange.bound([e],[jr(e)],!1,!0),i=0;return fc(t).Ot({index:Ga.documentTargetsIndex,kt:!0,range:e},function(t,e,n){var r=t[0];t[1],0!==r&&(i++,n.done())}).next(function(){return 0<i})},uc.prototype.lt=function(t,e){return hc(t).get(e).next(function(t){return t?Pu(t):null})},uc);function uc(t,e){this.referenceDelegate=t,this.R=e}function cc(t){this.Ht=t}function hc(t){return wu(t,Ka.store)}function lc(t){return wu(t,Qa.store)}function fc(t){return wu(t,Ga.store)}function dc(e){return y(this,void 0,void 0,function(){return g(this,function(t){if(e.code!==Dr.FAILED_PRECONDITION||e.message!==$a)throw e;return xr("LocalStore","Unexpectedly lost primary lease"),[2]})})}function pc(t,e){var n=t[0],r=t[1],t=e[0],e=e[1],t=qr(n,t);return 0===t?qr(r,e):t}var yc=(Ec.prototype.ie=function(){return++this.se},Ec.prototype.re=function(t){var e=[t,this.ie()];this.buffer.size<this.ne?this.buffer=this.buffer.add(e):pc(e,t=this.buffer.last())<0&&(this.buffer=this.buffer.delete(t).add(e))},Object.defineProperty(Ec.prototype,"maxValue",{get:function(){return this.buffer.last()[0]},enumerable:!1,configurable:!0}),Ec),gc=(Ic.prototype.start=function(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.ue(t)},Ic.prototype.stop=function(){this.ce&&(this.ce.cancel(),this.ce=null)},Object.defineProperty(Ic.prototype,"started",{get:function(){return null!==this.ce},enumerable:!1,configurable:!0}),Ic.prototype.ue=function(n){var t=this,e=this.oe?3e5:6e4;xr("LruGarbageCollector","Garbage collection scheduled in "+e+"ms"),this.ce=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:this.ce=null,this.oe=!0,t.label=1;case 1:return t.trys.push([1,3,,7]),[4,n.collectGarbage(this.garbageCollector)];case 2:return t.sent(),[3,7];case 3:return lu(e=t.sent())?(xr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e),[3,6]):[3,4];case 4:return[4,dc(e)];case 5:t.sent(),t.label=6;case 6:return[3,7];case 7:return[4,this.ue(n)];case 8:return t.sent(),[2]}})})})},Ic),mc=(wc.prototype.calculateTargetCount=function(t,e){return this.ae.he(t).next(function(t){return Math.floor(e/100*t)})},wc.prototype.nthSequenceNumber=function(t,e){var n=this;if(0===e)return tu.resolve(_r.o);var r=new yc(e);return this.ae.forEachTarget(t,function(t){return r.re(t.sequenceNumber)}).next(function(){return n.ae.le(t,function(t){return r.re(t)})}).next(function(){return r.maxValue})},wc.prototype.removeTargets=function(t,e,n){return this.ae.removeTargets(t,e,n)},wc.prototype.removeOrphanedDocuments=function(t,e){return this.ae.removeOrphanedDocuments(t,e)},wc.prototype.collect=function(e,n){var r=this;return-1===this.params.cacheSizeCollectionThreshold?(xr("LruGarbageCollector","Garbage collection skipped; disabled"),tu.resolve(Yu)):this.getCacheSize(e).next(function(t){return t<r.params.cacheSizeCollectionThreshold?(xr("LruGarbageCollector","Garbage collection skipped; Cache size "+t+" is lower than threshold "+r.params.cacheSizeCollectionThreshold),Yu):r.fe(e,n)})},wc.prototype.getCacheSize=function(t){return this.ae.getCacheSize(t)},wc.prototype.fe=function(e,n){var r,i,o,s,a,u,c,h=this,l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(function(t){return i=t>h.params.maximumSequenceNumbersToCollect?(xr("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of "+h.params.maximumSequenceNumbersToCollect+" from "+t),h.params.maximumSequenceNumbersToCollect):t,s=Date.now(),h.nthSequenceNumber(e,i)}).next(function(t){return r=t,a=Date.now(),h.removeTargets(e,r,n)}).next(function(t){return o=t,u=Date.now(),h.removeOrphanedDocuments(e,r)}).next(function(t){return c=Date.now(),Rr()<=f.DEBUG&&xr("LruGarbageCollector","LRU Garbage Collection\n\tCounted targets in "+(s-l)+"ms\n\tDetermined least recently used "+i+" in "+(a-s)+"ms\n\tRemoved "+o+" targets in "+(u-a)+"ms\n\tRemoved "+t+" documents in "+(c-u)+"ms\nTotal Duration: "+(c-l)+"ms"),tu.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:t})})},wc),vc=(bc.prototype.he=function(t){var n=this.de(t);return this.db.getTargetCache().getTargetCount(t).next(function(e){return n.next(function(t){return e+t})})},bc.prototype.de=function(t){var e=0;return this.le(t,function(t){e++}).next(function(){return e})},bc.prototype.forEachTarget=function(t,e){return this.db.getTargetCache().forEachTarget(t,e)},bc.prototype.le=function(t,n){return this.we(t,function(t,e){return n(e)})},bc.prototype.addReference=function(t,e,n){return Tc(t,n)},bc.prototype.removeReference=function(t,e,n){return Tc(t,n)},bc.prototype.removeTargets=function(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)},bc.prototype.markPotentiallyOrphaned=Tc,bc.prototype._e=function(t,e){return r=e,i=!1,oc(n=t).$t(function(t){return nc(n,t,r).next(function(t){return t&&(i=!0),tu.resolve(!t)})}).next(function(){return i});var n,r,i},bc.prototype.removeOrphanedDocuments=function(n,r){var i=this,o=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[],a=0;return this.we(n,function(e,t){t<=r&&(t=i._e(n,e).next(function(t){if(!t)return a++,o.getEntry(n,e).next(function(){return o.removeEntry(e),fc(n).delete([0,Ca(e.path)])})}),s.push(t))}).next(function(){return tu.waitFor(s)}).next(function(){return o.apply(n)}).next(function(){return a})},bc.prototype.removeTarget=function(t,e){e=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,e)},bc.prototype.updateLimboDocument=Tc,bc.prototype.we=function(t,r){var i,t=fc(t),o=_r.o;return t.Ot({index:Ga.documentTargetsIndex},function(t,e){var n=t[0],t=(t[1],e.path),e=e.sequenceNumber;0===n?(o!==_r.o&&r(new mi(xa(i)),o),o=e,i=t):o=_r.o}).next(function(){o!==_r.o&&r(new mi(xa(i)),o)})},bc.prototype.getCacheSize=function(t){return this.db.getRemoteDocumentCache().getSize(t)},bc);function bc(t,e){this.db=t,this.garbageCollector=new mc(this,e)}function wc(t,e){this.ae=t,this.params=e}function Ic(t,e){this.garbageCollector=t,this.asyncQueue=e,this.oe=!1,this.ce=null}function Ec(t){this.ne=t,this.buffer=new Os(pc),this.se=0}function Tc(t,e){return fc(t).put((t=t.currentSequenceNumber,new Ga(0,Ca(e.path),t)))}var _c,Sc=(Rc.prototype.get=function(t){var e=this.mapKeyFn(t),e=this.inner[e];if(void 0!==e)for(var n=0,r=e;n<r.length;n++){var i=r[n],o=i[0],i=i[1];if(this.equalsFn(o,t))return i}},Rc.prototype.has=function(t){return void 0!==this.get(t)},Rc.prototype.set=function(t,e){var n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]},Rc.prototype.delete=function(t){var e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1},Rc.prototype.forEach=function(s){Wr(this.inner,function(t,e){for(var n=0,r=e;n<r.length;n++){var i=r[n],o=i[0],i=i[1];s(o,i)}})},Rc.prototype.isEmpty=function(){return Yr(this.inner)},Rc),I=(Cc.prototype.getReadTime=function(t){t=this.changes.get(t);return t?t.readTime:Gr.min()},Cc.prototype.addEntry=function(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})},Cc.prototype.removeEntry=function(t,e){void 0===e&&(e=null),this.assertNotApplied(),this.changes.set(t,{document:Oi.newInvalidDocument(t),readTime:e})},Cc.prototype.getEntry=function(t,e){this.assertNotApplied();var n=this.changes.get(e);return void 0!==n?tu.resolve(n.document):this.getFromCache(t,e)},Cc.prototype.getEntries=function(t,e){return this.getAllFromCache(t,e)},Cc.prototype.apply=function(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)},Cc.prototype.assertNotApplied=function(){},Cc),Nc=(kc.prototype.addEntry=function(t,e,n){return Oc(t).put(Lc(e),n)},kc.prototype.removeEntry=function(t,e){t=Oc(t),e=Lc(e);return t.delete(e)},kc.prototype.updateMetadata=function(e,n){var r=this;return this.getMetadata(e).next(function(t){return t.byteSize+=n,r.me(e,t)})},kc.prototype.getEntry=function(t,e){var n=this;return Oc(t).get(Lc(e)).next(function(t){return n.ye(e,t)})},kc.prototype.ge=function(t,e){var n=this;return Oc(t).get(Lc(e)).next(function(t){return{document:n.ye(e,t),size:Zu(t)}})},kc.prototype.getEntries=function(t,e){var n=this,r=Ps;return this.pe(t,e,function(t,e){e=n.ye(t,e);r=r.insert(t,e)}).next(function(){return r})},kc.prototype.Ee=function(t,e){var r=this,i=Ps,o=new Ns(mi.comparator);return this.pe(t,e,function(t,e){var n=r.ye(t,e);i=i.insert(t,n),o=o.insert(t,Zu(e))}).next(function(){return{documents:i,Te:o}})},kc.prototype.pe=function(t,e,i){if(e.isEmpty())return tu.resolve();var n=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),o=e.getIterator(),s=o.getNext();return Oc(t).Ot({range:n},function(t,e,n){for(var r=mi.fromSegments(t);s&&mi.comparator(s,r)<0;)i(s,null),s=o.getNext();s&&s.isEqual(r)&&(i(s,e),s=o.hasNext()?o.getNext():null),s?n.Ct(s.path.toArray()):n.done()}).next(function(){for(;s;)i(s,null),s=o.hasNext()?o.getNext():null})},kc.prototype.getDocumentsMatchingQuery=function(t,r,e){var n,i=this,o=Ps,s=r.path.length+1,a={};return e.isEqual(Gr.min())?(n=r.path.toArray(),a.range=IDBKeyRange.lowerBound(n)):(n=r.path.toArray(),e=Cu(e),a.range=IDBKeyRange.lowerBound([n,e],!0),a.index=Ba.collectionReadTimeIndex),Oc(t).Ot(a,function(t,e,n){t.length===s&&(e=Au(i.R,e),r.path.isPrefixOf(e.key.path)?Ro(r,e)&&(o=o.insert(e.key,e)):n.done())}).next(function(){return o})},kc.prototype.newChangeBuffer=function(t){return new Dc(this,!!t&&t.trackRemovals)},kc.prototype.getSize=function(t){return this.getMetadata(t).next(function(t){return t.byteSize})},kc.prototype.getMetadata=function(t){return xc(t).get(ja.key).next(function(t){return Fr(!!t),t})},kc.prototype.me=function(t,e){return xc(t).put(ja.key,e)},kc.prototype.ye=function(t,e){if(e){e=Au(this.R,e);if(!e.isNoDocument()||!e.version.isEqual(Gr.min()))return e}return Oi.newInvalidDocument(t)},kc),Dc=(n(Ac,_c=I),Ac.prototype.applyChanges=function(i){var o=this,s=[],a=0,u=new Os(function(t,e){return qr(t.canonicalString(),e.canonicalString())});return this.changes.forEach(function(t,e){var n,r=o.Ae.get(t);e.document.isValidDocument()?(n=ku(o.Ie.R,e.document,o.getReadTime(t)),u=u.add(t.path.popLast()),e=Zu(n),a+=e-r,s.push(o.Ie.addEntry(i,t,n))):(a-=r,o.trackRemovals?(r=ku(o.Ie.R,Oi.newNoDocument(t,Gr.min()),o.getReadTime(t)),s.push(o.Ie.addEntry(i,t,r))):s.push(o.Ie.removeEntry(i,t)))}),u.forEach(function(t){s.push(o.Ie.Ut.addToCollectionParentIndex(i,t))}),s.push(this.Ie.updateMetadata(i,a)),tu.waitFor(s)},Ac.prototype.getFromCache=function(t,e){var n=this;return this.Ie.ge(t,e).next(function(t){return n.Ae.set(e,t.size),t.document})},Ac.prototype.getAllFromCache=function(t,e){var n=this;return this.Ie.Ee(t,e).next(function(t){var e=t.documents;return t.Te.forEach(function(t,e){n.Ae.set(t,e)}),e})},Ac);function Ac(t,e){var n=this;return(n=_c.call(this)||this).Ie=t,n.trackRemovals=e,n.Ae=new Sc(function(t){return t.toString()},function(t,e){return t.isEqual(e)}),n}function kc(t,e){this.R=t,this.Ut=e}function Cc(){this.changes=new Sc(function(t){return t.toString()},function(t,e){return t.isEqual(e)}),this.changesApplied=!1}function Rc(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}function xc(t){return wu(t,ja.store)}function Oc(t){return wu(t,Ba.store)}function Lc(t){return t.path.toArray()}var Pc=(Mc.prototype.Rt=function(e,n,t,r){var i=this;Fr(t<r&&0<=t&&r<=11);var o=new eu("createOrUpgrade",n);t<1&&1<=r&&(e.createObjectStore(Oa.store),(s=e).createObjectStore(Pa.store,{keyPath:Pa.keyPath}),s.createObjectStore(Ma.store,{keyPath:Ma.keyPath,autoIncrement:!0}).createIndex(Ma.userMutationsIndex,Ma.userMutationsKeyPath,{unique:!0}),s.createObjectStore(Fa.store),Fc(e),e.createObjectStore(Ba.store));var s,a=tu.resolve();return t<3&&3<=r&&(0!==t&&((s=e).deleteObjectStore(Ga.store),s.deleteObjectStore(Ka.store),s.deleteObjectStore(Qa.store),Fc(e)),a=a.next(function(){return t=o.store(Qa.store),e=new Qa(0,0,Gr.min().toTimestamp(),0),t.put(Qa.key,e);var t,e})),t<4&&4<=r&&(a=(a=0!==t?a.next(function(){return n=e,(r=o).store(Ma.store).Nt().next(function(t){n.deleteObjectStore(Ma.store),n.createObjectStore(Ma.store,{keyPath:Ma.keyPath,autoIncrement:!0}).createIndex(Ma.userMutationsIndex,Ma.userMutationsKeyPath,{unique:!0});var e=r.store(Ma.store),t=t.map(function(t){return e.put(t)});return tu.waitFor(t)});var n,r}):a).next(function(){e.createObjectStore(Ha.store,{keyPath:Ha.keyPath})})),t<5&&5<=r&&(a=a.next(function(){return i.Re(o)})),t<6&&6<=r&&(a=a.next(function(){return e.createObjectStore(ja.store),i.be(o)})),t<7&&7<=r&&(a=a.next(function(){return i.ve(o)})),t<8&&8<=r&&(a=a.next(function(){return i.Pe(e,o)})),t<9&&9<=r&&(a=a.next(function(){var t;(t=e).objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges"),(t=n.objectStore(Ba.store)).createIndex(Ba.readTimeIndex,Ba.readTimeIndexPath,{unique:!1}),t.createIndex(Ba.collectionReadTimeIndex,Ba.collectionReadTimeIndexPath,{unique:!1})})),t<10&&10<=r&&(a=a.next(function(){return i.Ve(o)})),a=t<11&&11<=r?a.next(function(){e.createObjectStore(Wa.store,{keyPath:Wa.keyPath}),e.createObjectStore(Ya.store,{keyPath:Ya.keyPath})}):a},Mc.prototype.be=function(e){var n=0;return e.store(Ba.store).Ot(function(t,e){n+=Zu(e)}).next(function(){var t=new ja(n);return e.store(ja.store).put(ja.key,t)})},Mc.prototype.Re=function(n){var r=this,t=n.store(Pa.store),i=n.store(Ma.store);return t.Nt().next(function(t){return tu.forEach(t,function(e){var t=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return i.Nt(Ma.userMutationsIndex,t).next(function(t){return tu.forEach(t,function(t){Fr(t.userId===e.userId);t=Lu(r.R,t);return $u(n,e.userId,t).next(function(){})})})})})},Mc.prototype.ve=function(t){var o=t.store(Ga.store),e=t.store(Ba.store);return t.store(Qa.store).get(Qa.key).next(function(r){var i=[];return e.Ot(function(t,e){var n=new $r(t),t=[0,Ca(n)];i.push(o.get(t).next(function(t){return t?tu.resolve():o.put(new Ga(0,Ca(n),r.highestListenSequenceNumber))}))}).next(function(){return tu.waitFor(i)})})},Mc.prototype.Pe=function(t,e){t.createObjectStore(za.store,{keyPath:za.keyPath});function r(t){if(i.add(t)){var e=t.lastSegment(),t=t.popLast();return n.put({collectionId:e,parent:Ca(t)})}}var n=e.store(za.store),i=new Ku;return e.store(Ba.store).Ot({kt:!0},function(t,e){t=new $r(t);return r(t.popLast())}).next(function(){return e.store(Fa.store).Ot({kt:!0},function(t,e){t[0];var n=t[1],n=(t[2],xa(n));return r(n.popLast())})})},Mc.prototype.Ve=function(t){var n=this,r=t.store(Ka.store);return r.Ot(function(t,e){e=Pu(e),e=Mu(n.R,e);return r.put(e)})},Mc);function Mc(t){this.R=t}function Fc(t){t.createObjectStore(Ga.store,{keyPath:Ga.keyPath}).createIndex(Ga.documentTargetsIndex,Ga.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Ka.store,{keyPath:Ka.keyPath}).createIndex(Ka.queryTargetsIndexName,Ka.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Qa.store)}var Vc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Uc=(qc.prototype.start=function(){var e=this;return this.je().then(function(){if(!e.isPrimary&&!e.allowTabSynchronization)throw new Ar(Dr.FAILED_PRECONDITION,Vc);return e.We(),e.Ge(),e.ze(),e.runTransaction("getHighestListenSequenceNumber","readonly",function(t){return e.qe.getHighestSequenceNumber(t)})}).then(function(t){e.Ne=new _r(t,e.De)}).then(function(){e.xe=!0}).catch(function(t){return e.Be&&e.Be.close(),Promise.reject(t)})},qc.prototype.He=function(n){var t=this;return this.Me=function(e){return y(t,void 0,void 0,function(){return g(this,function(t){return this.started?[2,n(e)]:[2]})})},n(this.isPrimary)},qc.prototype.setDatabaseDeletedListener=function(n){var t=this;this.Be.vt(function(e){return y(t,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return null===e.newVersion?[4,n()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})})},qc.prototype.setNetworkEnabled=function(t){var e=this;this.networkEnabled!==t&&(this.networkEnabled=t,this.Se.enqueueAndForget(function(){return y(e,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return this.started?[4,this.je()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})}))},qc.prototype.je=function(){var n=this;return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",function(e){return jc(e).put(new Ha(n.clientId,Date.now(),n.networkEnabled,n.inForeground)).next(function(){if(n.isPrimary)return n.Je(e).next(function(t){t||(n.isPrimary=!1,n.Se.enqueueRetryable(function(){return n.Me(!1)}))})}).next(function(){return n.Ye(e)}).next(function(t){return n.isPrimary&&!t?n.Xe(e).next(function(){return!1}):!!t&&n.Ze(e).next(function(){return!0})})}).catch(function(t){if(lu(t))return xr("IndexedDbPersistence","Failed to extend owner lease: ",t),n.isPrimary;if(!n.allowTabSynchronization)throw t;return xr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(function(t){n.isPrimary!==t&&n.Se.enqueueRetryable(function(){return n.Me(t)}),n.isPrimary=t})},qc.prototype.Je=function(t){var e=this;return Bc(t).get(Oa.key).next(function(t){return tu.resolve(e.tn(t))})},qc.prototype.en=function(t){return jc(t).delete(this.clientId)},qc.prototype.nn=function(){return y(this,void 0,void 0,function(){var e,n,r,i,o=this;return g(this,function(t){switch(t.label){case 0:return!this.isPrimary||this.sn(this.$e,18e5)?[3,2]:(this.$e=Date.now(),[4,this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",function(t){var r=wu(t,Ha.store);return r.Nt().next(function(t){var e=o.rn(t,18e5),n=t.filter(function(t){return-1===e.indexOf(t)});return tu.forEach(n,function(t){return r.delete(t.clientId)}).next(function(){return n})})}).catch(function(){return[]})]);case 1:if(e=t.sent(),this.Ke)for(n=0,r=e;n<r.length;n++)i=r[n],this.Ke.removeItem(this.on(i.clientId));t.label=2;case 2:return[2]}})})},qc.prototype.ze=function(){var t=this;this.Oe=this.Se.enqueueAfterDelay("client_metadata_refresh",4e3,function(){return t.je().then(function(){return t.nn()}).then(function(){return t.ze()})})},qc.prototype.tn=function(t){return!!t&&t.ownerId===this.clientId},qc.prototype.Ye=function(e){var r=this;return this.Ce?tu.resolve(!0):Bc(e).get(Oa.key).next(function(t){if(null!==t&&r.sn(t.leaseTimestampMs,5e3)&&!r.cn(t.ownerId)){if(r.tn(t)&&r.networkEnabled)return!0;if(!r.tn(t)){if(!t.allowTabSynchronization)throw new Ar(Dr.FAILED_PRECONDITION,Vc);return!1}}return!(!r.networkEnabled||!r.inForeground)||jc(e).Nt().next(function(t){return void 0===r.rn(t,5e3).find(function(t){if(r.clientId!==t.clientId){var e=!r.networkEnabled&&t.networkEnabled,n=!r.inForeground&&t.inForeground,t=r.networkEnabled===t.networkEnabled;if(e||n&&t)return!0}return!1})})}).next(function(t){return r.isPrimary!==t&&xr("IndexedDbPersistence","Client "+(t?"is":"is not")+" eligible for a primary lease."),t})},qc.prototype.shutdown=function(){return y(this,void 0,void 0,function(){var n=this;return g(this,function(t){switch(t.label){case 0:return this.xe=!1,this.un(),this.Oe&&(this.Oe.cancel(),this.Oe=null),this.an(),this.hn(),[4,this.Be.runTransaction("shutdown","readwrite",[Oa.store,Ha.store],function(t){var e=new vu(t,_r.o);return n.Xe(e).next(function(){return n.en(e)})})];case 1:return t.sent(),this.Be.close(),this.ln(),[2]}})})},qc.prototype.rn=function(t,e){var n=this;return t.filter(function(t){return n.sn(t.updateTimeMs,e)&&!n.cn(t.clientId)})},qc.prototype.fn=function(){var e=this;return this.runTransaction("getActiveClients","readonly",function(t){return jc(t).Nt().next(function(t){return e.rn(t,18e5).map(function(t){return t.clientId})})})},Object.defineProperty(qc.prototype,"started",{get:function(){return this.xe},enumerable:!1,configurable:!0}),qc.prototype.getMutationQueue=function(t){return tc.Kt(t,this.R,this.Ut,this.referenceDelegate)},qc.prototype.getTargetCache=function(){return this.qe},qc.prototype.getRemoteDocumentCache=function(){return this.Ue},qc.prototype.getIndexManager=function(){return this.Ut},qc.prototype.getBundleCache=function(){return this.Qe},qc.prototype.runTransaction=function(e,n,r){var i=this;xr("IndexedDbPersistence","Starting transaction:",e);var o,t="readonly"===n?"readonly":"readwrite";return this.Be.runTransaction(e,t,Ja,function(t){return o=new vu(t,i.Ne?i.Ne.next():_r.o),"readwrite-primary"===n?i.Je(o).next(function(t){return!!t||i.Ye(o)}).next(function(t){if(!t)throw Or("Failed to obtain primary lease for action '"+e+"'."),i.isPrimary=!1,i.Se.enqueueRetryable(function(){return i.Me(!1)}),new Ar(Dr.FAILED_PRECONDITION,$a);return r(o)}).next(function(t){return i.Ze(o).next(function(){return t})}):i.dn(o).next(function(){return r(o)})}).then(function(t){return o.raiseOnCommittedEvent(),t})},qc.prototype.dn=function(t){var e=this;return Bc(t).get(Oa.key).next(function(t){if(null!==t&&e.sn(t.leaseTimestampMs,5e3)&&!e.cn(t.ownerId)&&!e.tn(t)&&!(e.Ce||e.allowTabSynchronization&&t.allowTabSynchronization))throw new Ar(Dr.FAILED_PRECONDITION,Vc)})},qc.prototype.Ze=function(t){var e=new Oa(this.clientId,this.allowTabSynchronization,Date.now());return Bc(t).put(Oa.key,e)},qc.yt=function(){return nu.yt()},qc.prototype.Xe=function(t){var e=this,n=Bc(t);return n.get(Oa.key).next(function(t){return e.tn(t)?(xr("IndexedDbPersistence","Releasing primary lease."),n.delete(Oa.key)):tu.resolve()})},qc.prototype.sn=function(t,e){var n=Date.now();return!(t<n-e||n<t&&(Or("Detected an update time that is in the future: "+t+" > "+n),1))},qc.prototype.We=function(){var t=this;null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ke=function(){t.Se.enqueueAndForget(function(){return t.inForeground="visible"===t.document.visibilityState,t.je()})},this.document.addEventListener("visibilitychange",this.ke),this.inForeground="visible"===this.document.visibilityState)},qc.prototype.an=function(){this.ke&&(this.document.removeEventListener("visibilitychange",this.ke),this.ke=null)},qc.prototype.Ge=function(){var t,e=this;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Fe=function(){e.un(),e.Se.enqueueAndForget(function(){return e.shutdown()})},this.window.addEventListener("unload",this.Fe))},qc.prototype.hn=function(){this.Fe&&(this.window.removeEventListener("unload",this.Fe),this.Fe=null)},qc.prototype.cn=function(t){try{var e=null!==(null===(e=this.Ke)||void 0===e?void 0:e.getItem(this.on(t)));return xr("IndexedDbPersistence","Client '"+t+"' "+(e?"is":"is not")+" zombied in LocalStorage"),e}catch(t){return Or("IndexedDbPersistence","Failed to get zombied client id.",t),!1}},qc.prototype.un=function(){if(this.Ke)try{this.Ke.setItem(this.on(this.clientId),String(Date.now()))}catch(t){Or("Failed to set zombie client id.",t)}},qc.prototype.ln=function(){if(this.Ke)try{this.Ke.removeItem(this.on(this.clientId))}catch(t){}},qc.prototype.on=function(t){return"firestore_zombie_"+this.persistenceKey+"_"+t},qc);function qc(t,e,n,r,i,o,s,a,u,c){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Se=i,this.window=o,this.document=s,this.De=u,this.Ce=c,this.Ne=null,this.xe=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fe=null,this.inForeground=!1,this.ke=null,this.Oe=null,this.$e=Number.NEGATIVE_INFINITY,this.Me=function(t){return Promise.resolve()},!qc.yt())throw new Ar(Dr.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new vc(this,r),this.Le=e+"main",this.R=new _u(a),this.Be=new nu(this.Le,11,new Pc(this.R)),this.qe=new ac(this.referenceDelegate,this.R),this.Ut=new Gu,this.Ue=(e=this.R,a=this.Ut,new Nc(e,a)),this.Qe=new Vu,this.window&&this.window.localStorage?this.Ke=this.window.localStorage:(this.Ke=null,!1===c&&Or("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}function Bc(t){return wu(t,Oa.store)}function jc(t){return wu(t,Ha.store)}function Kc(t,e){var n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}function Gc(t,e){this.progress=t,this.wn=e}var Qc=($c.prototype.mn=function(e,n){var r=this;return this._n.getAllMutationBatchesAffectingDocumentKey(e,n).next(function(t){return r.yn(e,n,t)})},$c.prototype.yn=function(t,e,r){return this.Ue.getEntry(t,e).next(function(t){for(var e=0,n=r;e<n.length;e++)n[e].applyToLocalView(t);return t})},$c.prototype.gn=function(t,i){t.forEach(function(t,e){for(var n=0,r=i;n<r.length;n++)r[n].applyToLocalView(e)})},$c.prototype.pn=function(e,t){var n=this;return this.Ue.getEntries(e,t).next(function(t){return n.En(e,t).next(function(){return t})})},$c.prototype.En=function(t,e){var n=this;return this._n.getAllMutationBatchesAffectingDocumentKeys(t,e).next(function(t){return n.gn(e,t)})},$c.prototype.getDocumentsMatchingQuery=function(t,e,n){return r=e,mi.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(t,e.path):_o(e)?this.In(t,e,n):this.An(t,e,n);var r},$c.prototype.Tn=function(t,e){return this.mn(t,new mi(e)).next(function(t){var e=Vs;return e=t.isFoundDocument()?e.insert(t.key,t):e})},$c.prototype.In=function(n,r,i){var o=this,s=r.collectionGroup,a=Vs;return this.Ut.getCollectionParents(n,s).next(function(t){return tu.forEach(t,function(t){var e,e=(e=r,t=t.child(s),new mo(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt));return o.An(n,e,i).next(function(t){t.forEach(function(t,e){a=a.insert(t,e)})})}).next(function(){return a})})},$c.prototype.An=function(e,n,t){var c,h,r=this;return this.Ue.getDocumentsMatchingQuery(e,n,t).next(function(t){return c=t,r._n.getAllMutationBatchesAffectingQuery(e,n)}).next(function(t){return h=t,r.Rn(e,h,c).next(function(t){c=t;for(var e=0,n=h;e<n.length;e++)for(var r=n[e],i=0,o=r.mutations;i<o.length;i++){var s=o[i],a=s.key,u=c.get(a);null==u&&(u=Oi.newInvalidDocument(a),c=c.insert(a,u)),is(s,u,r.localWriteTime),u.isFoundDocument()||(c=c.remove(a))}})}).next(function(){return c.forEach(function(t,e){Ro(n,e)||(c=c.remove(t))}),c})},$c.prototype.Rn=function(t,e,n){for(var r=Bs(),i=0,o=e;i<o.length;i++)for(var s=0,a=o[i].mutations;s<a.length;s++){var u=a[s];u instanceof hs&&null===n.get(u.key)&&(r=r.add(u.key))}var c=n;return this.Ue.getEntries(t,r).next(function(t){return t.forEach(function(t,e){e.isFoundDocument()&&(c=c.insert(t,e))}),c})},$c),zc=(Jc.Pn=function(t,e){for(var n=Bs(),r=Bs(),i=0,o=e.docChanges;i<o.length;i++){var s=o[i];switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}}return new Jc(t,e.fromCache,n,r)},Jc),Hc=(Xc.prototype.Vn=function(t){this.Sn=t},Xc.prototype.getDocumentsMatchingQuery=function(e,r,i,o){var s=this;return 0===r.filters.length&&null===r.limit&&null==r.startAt&&null==r.endAt&&(0===r.explicitOrderBy.length||1===r.explicitOrderBy.length&&r.explicitOrderBy[0].field.isKeyField())||i.isEqual(Gr.min())?this.Dn(e,r):this.Sn.pn(e,o).next(function(t){var n=s.Cn(r,t);return(wo(r)||Io(r))&&s.Nn(r.limitType,n,o,i)?s.Dn(e,r):(Rr()<=f.DEBUG&&xr("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Co(r)),s.Sn.getDocumentsMatchingQuery(e,r,i).next(function(e){return n.forEach(function(t){e=e.insert(t.key,t)}),e}))})},Xc.prototype.Cn=function(n,t){var r=new Os(xo(n));return t.forEach(function(t,e){Ro(n,e)&&(r=r.add(e))}),r},Xc.prototype.Nn=function(t,e,n,r){if(n.size!==e.size)return!0;e="F"===t?e.last():e.first();return!!e&&(e.hasPendingWrites||0<e.version.compareTo(r))},Xc.prototype.Dn=function(t,e){return Rr()<=f.DEBUG&&xr("QueryEngine","Using full collection scan to execute query:",Co(e)),this.Sn.getDocumentsMatchingQuery(t,e,Gr.min())},Xc),Wc=(Yc.prototype.collectGarbage=function(e){var n=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",function(t){return e.collect(t,n.Fn)})},Yc);function Yc(t,e,n,r){this.persistence=t,this.xn=e,this.R=r,this.Fn=new Ns(qr),this.kn=new Sc(Fi,Vi),this.On=Gr.min(),this._n=t.getMutationQueue(n),this.$n=t.getRemoteDocumentCache(),this.qe=t.getTargetCache(),this.Mn=new Qc(this.$n,this._n,this.persistence.getIndexManager()),this.Qe=t.getBundleCache(),this.xn.Vn(this.Mn)}function Xc(){}function Jc(t,e,n,r){this.targetId=t,this.fromCache=e,this.bn=n,this.vn=r}function $c(t,e,n){this.Ue=t,this._n=e,this.Ut=n}function Zc(t,e,n,r){return new Wc(t,e,n,r)}function th(i,o){return y(this,void 0,void 0,function(){var e,n,v,r;return g(this,function(t){switch(t.label){case 0:return n=(e=i)._n,v=e.Mn,[4,e.persistence.runTransaction("Handle user change","readonly",function(g){var m;return e._n.getAllMutationBatches(g).next(function(t){return m=t,n=e.persistence.getMutationQueue(o),v=new Qc(e.$n,n,e.persistence.getIndexManager()),n.getAllMutationBatches(g)}).next(function(t){for(var e=[],n=[],r=Bs(),i=0,o=m;i<o.length;i++){var s=o[i];e.push(s.batchId);for(var a=0,u=s.mutations;a<u.length;a++)var c=u[a],r=r.add(c.key)}for(var h=0,l=t;h<l.length;h++){var f=l[h];n.push(f.batchId);for(var d=0,p=f.mutations;d<p.length;d++){var y=p[d];r=r.add(y.key)}}return v.pn(g,r).next(function(t){return{Ln:t,removedBatchIds:e,addedBatchIds:n}})})})];case 1:return r=t.sent(),[2,(e._n=n,e.Mn=v,e.xn.Vn(e.Mn),r)]}})})}function eh(t,h){var l=t;return l.persistence.runTransaction("Acknowledge batch","readwrite-primary",function(t){var e,r,i,o,s,n,a,u=h.batch.keys(),c=l.$n.newChangeBuffer({trackRemovals:!0});return e=l,r=t,o=c,s=(i=h).batch,n=s.keys(),a=tu.resolve(),n.forEach(function(n){a=a.next(function(){return o.getEntry(r,n)}).next(function(t){var e=i.docVersions.get(n);Fr(null!==e),t.version.compareTo(e)<0&&(s.applyToRemoteDocument(t,i),t.isValidDocument()&&o.addEntry(t,i.commitVersion))})}),a.next(function(){return e._n.removeMutationBatch(r,s)}).next(function(){return c.apply(t)}).next(function(){return l._n.performConsistencyCheck(t)}).next(function(){return l.Mn.pn(t,u)})})}function nh(t){var e=t;return e.persistence.runTransaction("Get last remote snapshot version","readonly",function(t){return e.qe.getLastRemoteSnapshotVersion(t)})}function rh(t,r){var u=t,c=r.snapshotVersion,h=u.Fn;return u.persistence.runTransaction("Apply remote event","readwrite-primary",function(s){var t=u.$n.newChangeBuffer({trackRemovals:!0});h=u.Fn;var a=[];r.targetChanges.forEach(function(t,e){var n,r,i,o=h.get(e);o&&(a.push(u.qe.removeMatchingKeys(s,t.removedDocuments,e).next(function(){return u.qe.addMatchingKeys(s,t.addedDocuments,e)})),0<(i=t.resumeToken).approximateByteSize()&&(n=o.withResumeToken(i,c).withSequenceNumber(s.currentSequenceNumber),h=h.insert(e,n),r=o,i=t,Fr(0<(o=n).resumeToken.approximateByteSize()),(0===r.resumeToken.approximateByteSize()||3e8<=o.snapshotVersion.toMicroseconds()-r.snapshotVersion.toMicroseconds()||0<i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size)&&a.push(u.qe.updateTargetData(s,n))))});var e,n=Ps;return r.documentUpdates.forEach(function(t,e){r.resolvedLimboDocuments.has(t)&&a.push(u.persistence.referenceDelegate.updateLimboDocument(s,t))}),a.push(ih(s,t,r.documentUpdates,c,void 0).next(function(t){n=t})),c.isEqual(Gr.min())||(e=u.qe.getLastRemoteSnapshotVersion(s).next(function(t){return u.qe.setTargetsMetadata(s,s.currentSequenceNumber,c)}),a.push(e)),tu.waitFor(a).next(function(){return t.apply(s)}).next(function(){return u.Mn.En(s,n)}).next(function(){return n})}).then(function(t){return u.Fn=h,t})}function ih(t,s,e,a,u){var n=Bs();return e.forEach(function(t){return n=n.add(t)}),s.getEntries(t,n).next(function(i){var o=Ps;return e.forEach(function(t,e){var n=i.get(t),r=(null==u?void 0:u.get(t))||a;e.isNoDocument()&&e.version.isEqual(Gr.min())?(s.removeEntry(t,r),o=o.insert(t,e)):!n.isValidDocument()||0<e.version.compareTo(n.version)||0===e.version.compareTo(n.version)&&n.hasPendingWrites?(s.addEntry(e,r),o=o.insert(t,e)):xr("LocalStore","Ignoring outdated watch update for ",t,". Current version:",n.version," Watch version:",e.version)}),o})}function oh(t,r){var i=t;return i.persistence.runTransaction("Allocate target","readwrite",function(e){var n;return i.qe.getTargetData(e,r).next(function(t){return t?(n=t,tu.resolve(n)):i.qe.allocateTargetId(e).next(function(t){return n=new Tu(r,t,0,e.currentSequenceNumber),i.qe.addTargetData(e,n).next(function(){return n})})})}).then(function(t){var e=i.Fn.get(t.targetId);return(null===e||0<t.snapshotVersion.compareTo(e.snapshotVersion))&&(i.Fn=i.Fn.insert(t.targetId,t),i.kn.set(r,t.targetId)),t})}function sh(i,o,s){return y(this,void 0,void 0,function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:n=(e=i).Fn.get(o),r=s?"readwrite":"readwrite-primary",t.label=1;case 1:return t.trys.push([1,4,,5]),s?[3,3]:[4,e.persistence.runTransaction("Release target",r,function(t){return e.persistence.referenceDelegate.removeTarget(t,n)})];case 2:t.sent(),t.label=3;case 3:return[3,5];case 4:if(!lu(r=t.sent()))throw r;return xr("LocalStore","Failed to update sequence numbers for target "+o+": "+r),[3,5];case 5:return e.Fn=e.Fn.remove(o),e.kn.delete(n.target),[2]}})})}function ah(t,o,s){var a=t,u=Gr.min(),c=Bs();return a.persistence.runTransaction("Execute query","readonly",function(e){return t=a,n=e,r=No(o),(void 0!==(t=(i=t).kn.get(r))?tu.resolve(i.Fn.get(t)):i.qe.getTargetData(n,r)).next(function(t){if(t)return u=t.lastLimboFreeSnapshotVersion,a.qe.getMatchingKeysForTargetId(e,t.targetId).next(function(t){c=t})}).next(function(){return a.xn.getDocumentsMatchingQuery(e,o,s?u:Gr.min(),s?c:Bs())}).next(function(t){return{documents:t,Bn:c}});var t,n,r,i})}function uh(t,e){var n=t,r=n.qe,t=n.Fn.get(e);return t?Promise.resolve(t.target):n.persistence.runTransaction("Get target data","readonly",function(t){return r.lt(t,e).next(function(t){return t?t.target:null})})}function ch(t){var s=t;return s.persistence.runTransaction("Get new document changes","readonly",function(t){return e=s.$n,n=t,t=s.On,r=e,i=Ps,o=Cu(t),t=Oc(n),n=IDBKeyRange.lowerBound(o,!0),t.Ot({index:Ba.readTimeIndex,range:n},function(t,e){var n=Au(r.R,e);i=i.insert(n.key,n),o=e.readTime}).next(function(){return{wn:i,readTime:Ru(o)}});var e,n,r,i,o}).then(function(t){var e=t.wn,t=t.readTime;return s.On=t,e})}function hh(n){return y(this,void 0,void 0,function(){var e;return g(this,function(t){return[2,(e=n).persistence.runTransaction("Synchronize last document change read time","readonly",function(t){return t=Oc(t),r=Gr.min(),t.Ot({index:Ba.readTimeIndex,reverse:!0},function(t,e,n){e.readTime&&(r=Ru(e.readTime)),n.done()}).next(function(){return r});var r}).then(function(t){e.On=t})]})})}var lh,fh,dh=(Lh.prototype.getBundleMetadata=function(t,e){return tu.resolve(this.Kn.get(e))},Lh.prototype.saveBundleMetadata=function(t,e){return this.Kn.set(e.id,{id:e.id,version:e.version,createTime:aa(e.createTime)}),tu.resolve()},Lh.prototype.getNamedQuery=function(t,e){return tu.resolve(this.jn.get(e))},Lh.prototype.saveNamedQuery=function(t,e){return this.jn.set(e.name,{name:(e=e).name,query:Fu(e.bundledQuery),readTime:aa(e.readTime)}),tu.resolve()},Lh),ph=(Oh.prototype.isEmpty=function(){return this.Wn.isEmpty()},Oh.prototype.addReference=function(t,e){e=new yh(t,e);this.Wn=this.Wn.add(e),this.zn=this.zn.add(e)},Oh.prototype.Jn=function(t,e){var n=this;t.forEach(function(t){return n.addReference(t,e)})},Oh.prototype.removeReference=function(t,e){this.Yn(new yh(t,e))},Oh.prototype.Xn=function(t,e){var n=this;t.forEach(function(t){return n.removeReference(t,e)})},Oh.prototype.Zn=function(t){var e=this,n=new mi(new $r([])),r=new yh(n,t),t=new yh(n,t+1),i=[];return this.zn.forEachInRange([r,t],function(t){e.Yn(t),i.push(t.key)}),i},Oh.prototype.ts=function(){var e=this;this.Wn.forEach(function(t){return e.Yn(t)})},Oh.prototype.Yn=function(t){this.Wn=this.Wn.delete(t),this.zn=this.zn.delete(t)},Oh.prototype.es=function(t){var e=new mi(new $r([])),n=new yh(e,t),t=new yh(e,t+1),r=Bs();return this.zn.forEachInRange([n,t],function(t){r=r.add(t.key)}),r},Oh.prototype.containsKey=function(t){var e=new yh(t,0),e=this.Wn.firstAfterOrEqual(e);return null!==e&&t.isEqual(e.key)},Oh),yh=(xh.Gn=function(t,e){return mi.comparator(t.key,e.key)||qr(t.ns,e.ns)},xh.Hn=function(t,e){return qr(t.ns,e.ns)||mi.comparator(t.key,e.key)},xh),gh=(Rh.prototype.checkEmpty=function(t){return tu.resolve(0===this._n.length)},Rh.prototype.addMutationBatch=function(t,e,n,r){var i=this.ss;this.ss++,0<this._n.length&&this._n[this._n.length-1];n=new Iu(i,e,n,r);this._n.push(n);for(var o=0,s=r;o<s.length;o++){var a=s[o];this.rs=this.rs.add(new yh(a.key,i)),this.Ut.addToCollectionParentIndex(t,a.key.path.popLast())}return tu.resolve(n)},Rh.prototype.lookupMutationBatch=function(t,e){return tu.resolve(this.os(e))},Rh.prototype.getNextMutationBatchAfterBatchId=function(t,e){e+=1,e=this.cs(e),e=e<0?0:e;return tu.resolve(this._n.length>e?this._n[e]:null)},Rh.prototype.getHighestUnacknowledgedBatchId=function(){return tu.resolve(0===this._n.length?-1:this.ss-1)},Rh.prototype.getAllMutationBatches=function(t){return tu.resolve(this._n.slice())},Rh.prototype.getAllMutationBatchesAffectingDocumentKey=function(t,e){var n=this,r=new yh(e,0),e=new yh(e,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([r,e],function(t){t=n.os(t.ns);i.push(t)}),tu.resolve(i)},Rh.prototype.getAllMutationBatchesAffectingDocumentKeys=function(t,e){var n=this,r=new Os(qr);return e.forEach(function(t){var e=new yh(t,0),t=new yh(t,Number.POSITIVE_INFINITY);n.rs.forEachInRange([e,t],function(t){r=r.add(t.ns)})}),tu.resolve(this.us(r))},Rh.prototype.getAllMutationBatchesAffectingQuery=function(t,e){var n=e.path,r=n.length+1,e=n;mi.isDocumentKey(e)||(e=e.child(""));var e=new yh(new mi(e),0),i=new Os(qr);return this.rs.forEachWhile(function(t){var e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(i=i.add(t.ns)),!0)},e),tu.resolve(this.us(i))},Rh.prototype.us=function(t){var e=this,n=[];return t.forEach(function(t){t=e.os(t);null!==t&&n.push(t)}),n},Rh.prototype.removeMutationBatch=function(n,r){var i=this;Fr(0===this.hs(r.batchId,"removed")),this._n.shift();var o=this.rs;return tu.forEach(r.mutations,function(t){var e=new yh(t.key,r.batchId);return o=o.delete(e),i.referenceDelegate.markPotentiallyOrphaned(n,t.key)}).next(function(){i.rs=o})},Rh.prototype.Gt=function(t){},Rh.prototype.containsKey=function(t,e){var n=new yh(e,0),n=this.rs.firstAfterOrEqual(n);return tu.resolve(e.isEqual(n&&n.key))},Rh.prototype.performConsistencyCheck=function(t){return this._n.length,tu.resolve()},Rh.prototype.hs=function(t,e){return this.cs(t)},Rh.prototype.cs=function(t){return 0===this._n.length?0:t-this._n[0].batchId},Rh.prototype.os=function(t){t=this.cs(t);return t<0||t>=this._n.length?null:this._n[t]},Rh),mh=(Ch.prototype.addEntry=function(t,e,n){var r=e.key,i=this.docs.get(r),o=i?i.size:0,i=this.ls(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:i,readTime:n}),this.size+=i-o,this.Ut.addToCollectionParentIndex(t,r.path.popLast())},Ch.prototype.removeEntry=function(t){var e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)},Ch.prototype.getEntry=function(t,e){var n=this.docs.get(e);return tu.resolve(n?n.document.clone():Oi.newInvalidDocument(e))},Ch.prototype.getEntries=function(t,e){var n=this,r=Ps;return e.forEach(function(t){var e=n.docs.get(t);r=r.insert(t,e?e.document.clone():Oi.newInvalidDocument(t))}),tu.resolve(r)},Ch.prototype.getDocumentsMatchingQuery=function(t,e,n){for(var r=Ps,i=new mi(e.path.child("")),o=this.docs.getIteratorFrom(i);o.hasNext();){var s=o.getNext(),a=s.key,u=s.value,s=u.document,u=u.readTime;if(!e.path.isPrefixOf(a.path))break;u.compareTo(n)<=0||Ro(e,s)&&(r=r.insert(s.key,s.clone()))}return tu.resolve(r)},Ch.prototype.fs=function(t,e){return tu.forEach(this.docs,function(t){return e(t)})},Ch.prototype.newChangeBuffer=function(t){return new vh(this)},Ch.prototype.getSize=function(t){return tu.resolve(this.size)},Ch),vh=(n(kh,fh=I),kh.prototype.applyChanges=function(n){var r=this,i=[];return this.changes.forEach(function(t,e){e.document.isValidDocument()?i.push(r.Ie.addEntry(n,e.document,r.getReadTime(t))):r.Ie.removeEntry(t)}),tu.waitFor(i)},kh.prototype.getFromCache=function(t,e){return this.Ie.getEntry(t,e)},kh.prototype.getAllFromCache=function(t,e){return this.Ie.getEntries(t,e)},kh),bh=(Ah.prototype.forEachTarget=function(t,n){return this.ds.forEach(function(t,e){return n(e)}),tu.resolve()},Ah.prototype.getLastRemoteSnapshotVersion=function(t){return tu.resolve(this.lastRemoteSnapshotVersion)},Ah.prototype.getHighestSequenceNumber=function(t){return tu.resolve(this.ws)},Ah.prototype.allocateTargetId=function(t){return this.highestTargetId=this.ys.next(),tu.resolve(this.highestTargetId)},Ah.prototype.setTargetsMetadata=function(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ws&&(this.ws=e),tu.resolve()},Ah.prototype.te=function(t){this.ds.set(t.target,t);var e=t.targetId;e>this.highestTargetId&&(this.ys=new sc(e),this.highestTargetId=e),t.sequenceNumber>this.ws&&(this.ws=t.sequenceNumber)},Ah.prototype.addTargetData=function(t,e){return this.te(e),this.targetCount+=1,tu.resolve()},Ah.prototype.updateTargetData=function(t,e){return this.te(e),tu.resolve()},Ah.prototype.removeTargetData=function(t,e){return this.ds.delete(e.target),this._s.Zn(e.targetId),--this.targetCount,tu.resolve()},Ah.prototype.removeTargets=function(n,r,i){var o=this,s=0,a=[];return this.ds.forEach(function(t,e){e.sequenceNumber<=r&&null===i.get(e.targetId)&&(o.ds.delete(t),a.push(o.removeMatchingKeysForTargetId(n,e.targetId)),s++)}),tu.waitFor(a).next(function(){return s})},Ah.prototype.getTargetCount=function(t){return tu.resolve(this.targetCount)},Ah.prototype.getTargetData=function(t,e){e=this.ds.get(e)||null;return tu.resolve(e)},Ah.prototype.addMatchingKeys=function(t,e,n){return this._s.Jn(e,n),tu.resolve()},Ah.prototype.removeMatchingKeys=function(e,t,n){this._s.Xn(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(function(t){i.push(r.markPotentiallyOrphaned(e,t))}),tu.waitFor(i)},Ah.prototype.removeMatchingKeysForTargetId=function(t,e){return this._s.Zn(e),tu.resolve()},Ah.prototype.getMatchingKeysForTargetId=function(t,e){e=this._s.es(e);return tu.resolve(e)},Ah.prototype.containsKey=function(t,e){return tu.resolve(this._s.containsKey(e))},Ah),wh=(Dh.prototype.start=function(){return Promise.resolve()},Dh.prototype.shutdown=function(){return this.xe=!1,Promise.resolve()},Object.defineProperty(Dh.prototype,"started",{get:function(){return this.xe},enumerable:!1,configurable:!0}),Dh.prototype.setDatabaseDeletedListener=function(){},Dh.prototype.setNetworkEnabled=function(){},Dh.prototype.getIndexManager=function(){return this.Ut},Dh.prototype.getMutationQueue=function(t){var e=this.gs[t.toKey()];return e||(e=new gh(this.Ut,this.referenceDelegate),this.gs[t.toKey()]=e),e},Dh.prototype.getTargetCache=function(){return this.qe},Dh.prototype.getRemoteDocumentCache=function(){return this.Ue},Dh.prototype.getBundleCache=function(){return this.Qe},Dh.prototype.runTransaction=function(t,e,n){var r=this;xr("MemoryPersistence","Starting transaction:",t);var i=new Ih(this.Ne.next());return this.referenceDelegate.Es(),n(i).next(function(t){return r.referenceDelegate.Ts(i).next(function(){return t})}).toPromise().then(function(t){return i.raiseOnCommittedEvent(),t})},Dh.prototype.Is=function(e,n){return tu.or(Object.values(this.gs).map(function(t){return function(){return t.containsKey(e,n)}}))},Dh),Ih=(n(Nh,lh=Te),Nh),Eh=(Sh.bs=function(t){return new Sh(t)},Object.defineProperty(Sh.prototype,"vs",{get:function(){if(this.Rs)return this.Rs;throw Mr()},enumerable:!1,configurable:!0}),Sh.prototype.addReference=function(t,e,n){return this.As.addReference(n,e),this.vs.delete(n.toString()),tu.resolve()},Sh.prototype.removeReference=function(t,e,n){return this.As.removeReference(n,e),this.vs.add(n.toString()),tu.resolve()},Sh.prototype.markPotentiallyOrphaned=function(t,e){return this.vs.add(e.toString()),tu.resolve()},Sh.prototype.removeTarget=function(t,e){var n=this;this.As.Zn(e.targetId).forEach(function(t){return n.vs.add(t.toString())});var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(function(t){t.forEach(function(t){return n.vs.add(t.toString())})}).next(function(){return r.removeTargetData(t,e)})},Sh.prototype.Es=function(){this.Rs=new Set},Sh.prototype.Ts=function(n){var r=this,i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tu.forEach(this.vs,function(t){var e=mi.fromPath(t);return r.Ps(n,e).next(function(t){t||i.removeEntry(e)})}).next(function(){return r.Rs=null,i.apply(n)})},Sh.prototype.updateLimboDocument=function(t,e){var n=this;return this.Ps(t,e).next(function(t){t?n.vs.delete(e.toString()):n.vs.add(e.toString())})},Sh.prototype.ps=function(t){return 0},Sh.prototype.Ps=function(t,e){var n=this;return tu.or([function(){return tu.resolve(n.As.containsKey(e))},function(){return n.persistence.getTargetCache().containsKey(t,e)},function(){return n.persistence.Is(t,e)}])},Sh),Th=(_h.prototype.isAuthenticated=function(){return null!=this.uid},_h.prototype.toKey=function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"},_h.prototype.isEqual=function(t){return t.uid===this.uid},_h);function _h(t){this.uid=t}function Sh(t){this.persistence=t,this.As=new ph,this.Rs=null}function Nh(t){var e=this;return(e=lh.call(this)||this).currentSequenceNumber=t,e}function Dh(t,e){var n=this;this.gs={},this.Ne=new _r(0),this.xe=!1,this.xe=!0,this.referenceDelegate=t(this),this.qe=new bh(this),this.Ut=new ju,this.Ue=(t=this.Ut,new mh(t,function(t){return n.referenceDelegate.ps(t)})),this.R=new _u(e),this.Qe=new dh(this.R)}function Ah(t){this.persistence=t,this.ds=new Sc(Fi,Vi),this.lastRemoteSnapshotVersion=Gr.min(),this.highestTargetId=0,this.ws=0,this._s=new ph,this.targetCount=0,this.ys=sc.Jt()}function kh(t){var e=this;return(e=fh.call(this)||this).Ie=t,e}function Ch(t,e){this.Ut=t,this.ls=e,this.docs=new Ns(mi.comparator),this.size=0}function Rh(t,e){this.Ut=t,this.referenceDelegate=e,this._n=[],this.ss=1,this.rs=new Os(yh.Gn)}function xh(t,e){this.key=t,this.ns=e}function Oh(){this.Wn=new Os(yh.Gn),this.zn=new Os(yh.Hn)}function Lh(t){this.R=t,this.Kn=new Map,this.jn=new Map}function Ph(t,e){return"firestore_clients_"+t+"_"+e}function Mh(t,e,n){n="firestore_mutations_"+t+"_"+n;return e.isAuthenticated()&&(n+="_"+e.uid),n}function Fh(t,e){return"firestore_targets_"+t+"_"+e}Th.UNAUTHENTICATED=new Th(null),Th.GOOGLE_CREDENTIALS=new Th("google-credentials-uid"),Th.FIRST_PARTY=new Th("first-party-uid");var Vh,Uh=(ul.Vs=function(t,e,n){var r,i=JSON.parse(n),o="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return o&&i.error&&(o="string"==typeof i.error.message&&"string"==typeof i.error.code)&&(r=new Ar(i.error.code,i.error.message)),o?new ul(t,e,i.state,r):(Or("SharedClientState","Failed to parse mutation state for ID '"+e+"': "+n),null)},ul.prototype.Ss=function(){var t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},ul),qh=(al.Vs=function(t,e){var n,r=JSON.parse(e),i="object"==typeof r&&-1!==["not-current","current","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(n=new Ar(r.error.code,r.error.message)),i?new al(t,r.state,n):(Or("SharedClientState","Failed to parse target state for ID '"+t+"': "+e),null)},al.prototype.Ss=function(){var t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},al),Bh=(sl.Vs=function(t,e){for(var n=JSON.parse(e),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=js,o=0;r&&o<n.activeTargetIds.length;++o)r=gi(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return r?new sl(t,i):(Or("SharedClientState","Failed to parse client data for instance '"+t+"': "+e),null)},sl),jh=(ol.Vs=function(t){var e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new ol(e.clientId,e.onlineState):(Or("SharedClientState","Failed to parse online state: "+t),null)},ol),Kh=(il.prototype.Ds=function(t){this.activeTargetIds=this.activeTargetIds.add(t)},il.prototype.Cs=function(t){this.activeTargetIds=this.activeTargetIds.delete(t)},il.prototype.Ss=function(){var t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)},il),Gh=(rl.yt=function(t){return!(!t||!t.localStorage)},rl.prototype.start=function(){return y(this,void 0,void 0,function(){var e,n,r,i,o,s,a,u,c,h,l=this;return g(this,function(t){switch(t.label){case 0:return[4,this.syncEngine.fn()];case 1:for(s=t.sent(),e=0,n=s;e<n.length;e++)(r=n[e])!==this.Ns&&(i=this.getItem(Ph(this.persistenceKey,r)))&&(o=Bh.Vs(r,i))&&(this.ks=this.ks.insert(o.clientId,o));for(this.Ks(),(s=this.storage.getItem(this.Us))&&(a=this.js(s))&&this.Ws(a),u=0,c=this.Os;u<c.length;u++)h=c[u],this.Fs(h);return this.Os=[],this.window.addEventListener("unload",function(){return l.shutdown()}),this.started=!0,[2]}})})},rl.prototype.writeSequenceNumber=function(t){this.setItem(this.Ms,JSON.stringify(t))},rl.prototype.getAllActiveQueryTargets=function(){return this.Gs(this.ks)},rl.prototype.isActiveQueryTarget=function(n){var r=!1;return this.ks.forEach(function(t,e){e.activeTargetIds.has(n)&&(r=!0)}),r},rl.prototype.addPendingMutation=function(t){this.zs(t,"pending")},rl.prototype.updateMutationState=function(t,e,n){this.zs(t,e,n),this.Hs(t)},rl.prototype.addLocalQueryTarget=function(t){var e,n="not-current";return this.isActiveQueryTarget(t)&&(!(e=this.storage.getItem(Fh(this.persistenceKey,t)))||(e=qh.Vs(t,e))&&(n=e.state)),this.Js.Ds(t),this.Ks(),n},rl.prototype.removeLocalQueryTarget=function(t){this.Js.Cs(t),this.Ks()},rl.prototype.isLocalQueryTarget=function(t){return this.Js.activeTargetIds.has(t)},rl.prototype.clearQueryState=function(t){this.removeItem(Fh(this.persistenceKey,t))},rl.prototype.updateQueryState=function(t,e,n){this.Ys(t,e,n)},rl.prototype.handleUserChange=function(t,e,n){var r=this;e.forEach(function(t){r.Hs(t)}),this.currentUser=t,n.forEach(function(t){r.addPendingMutation(t)})},rl.prototype.setOnlineState=function(t){this.Xs(t)},rl.prototype.notifyBundleLoaded=function(){this.Zs()},rl.prototype.shutdown=function(){this.started&&(this.window.removeEventListener("storage",this.xs),this.removeItem(this.$s),this.started=!1)},rl.prototype.getItem=function(t){var e=this.storage.getItem(t);return xr("SharedClientState","READ",t,e),e},rl.prototype.setItem=function(t,e){xr("SharedClientState","SET",t,e),this.storage.setItem(t,e)},rl.prototype.removeItem=function(t){xr("SharedClientState","REMOVE",t),this.storage.removeItem(t)},rl.prototype.Fs=function(t){var e=this,o=t;o.storageArea===this.storage&&(xr("SharedClientState","EVENT",o.key,o.newValue),o.key!==this.$s?this.Se.enqueueRetryable(function(){return y(e,void 0,void 0,function(){var e,n,r,i;return g(this,function(t){if(this.started){if(null!==o.key)if(this.Ls.test(o.key)){if(null==o.newValue)return e=this.ti(o.key),[2,this.ei(e,null)];if(e=this.ni(o.key,o.newValue))return[2,this.ei(e.clientId,e)]}else if(this.Bs.test(o.key)){if(null!==o.newValue&&(n=this.si(o.key,o.newValue)))return[2,this.ii(n)]}else if(this.qs.test(o.key)){if(null!==o.newValue&&(r=this.ri(o.key,o.newValue)))return[2,this.oi(r)]}else if(o.key===this.Us){if(null!==o.newValue&&(i=this.js(o.newValue)))return[2,this.Ws(i)]}else if(o.key===this.Ms)(i=function(t){var e=_r.o;if(null!=t)try{var n=JSON.parse(t);Fr("number"==typeof n),e=n}catch(t){Or("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(o.newValue))!==_r.o&&this.sequenceNumberHandler(i);else if(o.key===this.Qs)return[2,this.syncEngine.ci()]}else this.Os.push(o);return[2]})})}):Or("Received WebStorage notification for local change. Another client might have garbage-collected our state"))},Object.defineProperty(rl.prototype,"Js",{get:function(){return this.ks.get(this.Ns)},enumerable:!1,configurable:!0}),rl.prototype.Ks=function(){this.setItem(this.$s,this.Js.Ss())},rl.prototype.zs=function(t,e,n){n=new Uh(this.currentUser,t,e,n),t=Mh(this.persistenceKey,this.currentUser,t);this.setItem(t,n.Ss())},rl.prototype.Hs=function(t){t=Mh(this.persistenceKey,this.currentUser,t);this.removeItem(t)},rl.prototype.Xs=function(t){t={clientId:this.Ns,onlineState:t};this.storage.setItem(this.Us,JSON.stringify(t))},rl.prototype.Ys=function(t,e,n){var r=Fh(this.persistenceKey,t),n=new qh(t,e,n);this.setItem(r,n.Ss())},rl.prototype.Zs=function(){this.setItem(this.Qs,"value-not-used")},rl.prototype.ti=function(t){t=this.Ls.exec(t);return t?t[1]:null},rl.prototype.ni=function(t,e){t=this.ti(t);return Bh.Vs(t,e)},rl.prototype.si=function(t,e){var n=this.Bs.exec(t),t=Number(n[1]),n=void 0!==n[2]?n[2]:null;return Uh.Vs(new Th(n),t,e)},rl.prototype.ri=function(t,e){t=this.qs.exec(t),t=Number(t[1]);return qh.Vs(t,e)},rl.prototype.js=function(t){return jh.Vs(t)},rl.prototype.ii=function(e){return y(this,void 0,void 0,function(){return g(this,function(t){return e.user.uid===this.currentUser.uid?[2,this.syncEngine.ui(e.batchId,e.state,e.error)]:(xr("SharedClientState","Ignoring mutation for non-active user "+e.user.uid),[2])})})},rl.prototype.oi=function(t){return this.syncEngine.ai(t.targetId,t.state,t.error)},rl.prototype.ei=function(t,e){var n=this,r=e?this.ks.insert(t,e):this.ks.remove(t),i=this.Gs(this.ks),o=this.Gs(r),s=[],a=[];return o.forEach(function(t){i.has(t)||s.push(t)}),i.forEach(function(t){o.has(t)||a.push(t)}),this.syncEngine.hi(s,a).then(function(){n.ks=r})},rl.prototype.Ws=function(t){this.ks.get(t.clientId)&&this.onlineStateHandler(t.onlineState)},rl.prototype.Gs=function(t){var n=js;return t.forEach(function(t,e){n=n.unionWith(e.activeTargetIds)}),n},rl),Qh=(nl.prototype.addPendingMutation=function(t){},nl.prototype.updateMutationState=function(t,e,n){},nl.prototype.addLocalQueryTarget=function(t){return this.li.Ds(t),this.fi[t]||"not-current"},nl.prototype.updateQueryState=function(t,e,n){this.fi[t]=e},nl.prototype.removeLocalQueryTarget=function(t){this.li.Cs(t)},nl.prototype.isLocalQueryTarget=function(t){return this.li.activeTargetIds.has(t)},nl.prototype.clearQueryState=function(t){delete this.fi[t]},nl.prototype.getAllActiveQueryTargets=function(){return this.li.activeTargetIds},nl.prototype.isActiveQueryTarget=function(t){return this.li.activeTargetIds.has(t)},nl.prototype.start=function(){return this.li=new Kh,Promise.resolve()},nl.prototype.handleUserChange=function(t,e,n){},nl.prototype.setOnlineState=function(t){},nl.prototype.shutdown=function(){},nl.prototype.writeSequenceNumber=function(t){},nl.prototype.notifyBundleLoaded=function(){},nl),zh=(el.prototype.di=function(t){},el.prototype.shutdown=function(){},el),Hh=(tl.prototype.di=function(t){this.gi.push(t)},tl.prototype.shutdown=function(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)},tl.prototype.pi=function(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)},tl.prototype._i=function(){xr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(var t=0,e=this.gi;t<e.length;t++)(0,e[t])(0)},tl.prototype.yi=function(){xr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(var t=0,e=this.gi;t<e.length;t++)(0,e[t])(1)},tl.yt=function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener},tl),Wh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"},Yh=(Zh.prototype.Ii=function(t){this.Ai=t},Zh.prototype.Ri=function(t){this.bi=t},Zh.prototype.onMessage=function(t){this.vi=t},Zh.prototype.close=function(){this.Ti()},Zh.prototype.send=function(t){this.Ei(t)},Zh.prototype.Pi=function(){this.Ai()},Zh.prototype.Vi=function(t){this.bi(t)},Zh.prototype.Si=function(t){this.vi(t)},Zh),Xh=($h.prototype.Ni=function(e,t,n,r){var i=this.xi(e,t);xr("RestConnection","Sending: ",i,n);t={};return this.Fi(t,r),this.ki(e,i,t,n).then(function(t){return xr("RestConnection","Received: ",t),t},function(t){throw Lr("RestConnection",e+" failed with error: ",t,"url: ",i,"request:",n),t})},$h.prototype.Oi=function(t,e,n,r){return this.Ni(t,e,n,r)},$h.prototype.Fi=function(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/8.4.2",t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(var n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])},$h.prototype.xi=function(t,e){t=Wh[t];return this.Di+"/v1/"+e+":"+t},n(Jh,Vh=$h),Jh.prototype.ki=function(o,e,s,a){return new Promise(function(n,r){var i=new Tr;i.listenOnce(vr.COMPLETE,function(){try{switch(i.getLastErrorCode()){case mr.NO_ERROR:var t=i.getResponseJson();xr("Connection","XHR received:",JSON.stringify(t)),n(t);break;case mr.TIMEOUT:xr("Connection",'RPC "'+o+'" timed out'),r(new Ar(Dr.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:var e=i.getStatus();xr("Connection",'RPC "'+o+'" failed with status:',e,"response text:",i.getResponseText()),0<e?(t=i.getResponseJson().error)&&t.status&&t.message?(e=t.status.toLowerCase().replace(/_/g,"-"),e=0<=Object.values(Dr).indexOf(e)?e:Dr.UNKNOWN,r(new Ar(e,t.message))):r(new Ar(Dr.UNKNOWN,"Server responded with status "+i.getStatus())):r(new Ar(Dr.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{xr("Connection",'RPC "'+o+'" completed.')}});var t=JSON.stringify(a);i.send(e,"POST",t,s,15)})},Jh.prototype.$i=function(t,e){var n,r=[this.Di,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new lr,o=gr(),t={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.Fi(t.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())||"object"==typeof navigator&&"ReactNative"===navigator.product||0<=h().indexOf("Electron/")||(0<=(n=h()).indexOf("MSIE ")||0<=n.indexOf("Trident/"))||0<=h().indexOf("MSAppHost/")||"object"==typeof(n="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)&&void 0!==n.id||(t.httpHeadersOverwriteParam="$httpHeaders");r=r.join("");xr("Connection","Creating WebChannel: "+r,t);var s=i.createWebChannel(r,t),a=!1,u=!1,c=new Yh({Ei:function(t){u?xr("Connection","Not sending because WebChannel is closed:",t):(a||(xr("Connection","Opening WebChannel transport."),s.open(),a=!0),xr("Connection","WebChannel sending:",t),s.send(t))},Ti:function(){return s.close()}}),t=function(t,e,n){t.listen(e,function(t){try{n(t)}catch(t){setTimeout(function(){throw t},0)}})};return t(s,Er.EventType.OPEN,function(){u||xr("Connection","WebChannel transport opened.")}),t(s,Er.EventType.CLOSE,function(){u||(u=!0,xr("Connection","WebChannel transport closed"),c.Vi())}),t(s,Er.EventType.ERROR,function(t){u||(u=!0,Lr("Connection","WebChannel transport errored:",t),c.Vi(new Ar(Dr.UNAVAILABLE,"The operation could not be completed")))}),t(s,Er.EventType.MESSAGE,function(t){var e,n,r,i;u||(Fr(!!(e=t.data[0])),(n=e.error||(null===(i=e[0])||void 0===i?void 0:i.error))?(xr("Connection","WebChannel received error:",n),r=n.status,t=function(){var t=ms[r];if(void 0!==t)return Ss(t)}(),i=n.message,void 0===t&&(t=Dr.INTERNAL,i="Unknown error status: "+r+" with message "+n.message),u=!0,c.Vi(new Ar(t,i)),s.close()):(xr("Connection","WebChannel received:",e),c.Si(e)))}),t(o,br.STAT_EVENT,function(t){t.stat===wr?xr("Connection","Detected buffering proxy"):t.stat===Ir&&xr("Connection","Detected no buffering proxy")}),setTimeout(function(){c.Pi()},0),c},Jh);function Jh(t){var e=this;return(e=Vh.call(this,t)||this).forceLongPolling=t.forceLongPolling,e.autoDetectLongPolling=t.autoDetectLongPolling,e}function $h(t){this.databaseInfo=t,this.databaseId=t.databaseId;var e=t.ssl?"https":"http";this.Di=e+"://"+t.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}function Zh(t){this.Ei=t.Ei,this.Ti=t.Ti}function tl(){var t=this;this.wi=function(){return t._i()},this.mi=function(){return t.yi()},this.gi=[],this.pi()}function el(){}function nl(){this.li=new Kh,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}function rl(t,e,n,r,i){this.window=t,this.Se=e,this.persistenceKey=n,this.Ns=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.xs=this.Fs.bind(this),this.ks=new Ns(qr),this.started=!1,this.Os=[];n=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.$s=Ph(this.persistenceKey,this.Ns),this.Ms="firestore_sequence_number_"+this.persistenceKey,this.ks=this.ks.insert(this.Ns,new Kh),this.Ls=new RegExp("^firestore_clients_"+n+"_([^_]*)$"),this.Bs=new RegExp("^firestore_mutations_"+n+"_(\\d+)(?:_(.*))?$"),this.qs=new RegExp("^firestore_targets_"+n+"_(\\d+)$"),this.Us="firestore_online_state_"+this.persistenceKey,this.Qs="firestore_bundle_loaded_"+this.persistenceKey,this.window.addEventListener("storage",this.xs)}function il(){this.activeTargetIds=js}function ol(t,e){this.clientId=t,this.onlineState=e}function sl(t,e){this.clientId=t,this.activeTargetIds=e}function al(t,e,n){this.targetId=t,this.state=e,this.error=n}function ul(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}function cl(){return"undefined"!=typeof window?window:null}function hl(){return"undefined"!=typeof document?document:null}function ll(t){return new ia(t,!0)}function fl(t,e,n,r,i){var o=this;this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.kr=[],this.Or=new Map,this.$r=new Set,this.Mr=[],this.Lr=i,this.Lr.di(function(t){n.enqueueAndForget(function(){return y(o,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return Pl(this)?(xr("RemoteStore","Restarting streams for network reachability change."),[4,function(n){return y(this,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return(e=n).$r.add(4),[4,Al(e)];case 1:return t.sent(),e.Br.set("Unknown"),e.$r.delete(4),[4,Dl(e)];case 2:return t.sent(),[2]}})})}(this)]):[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})})}),this.Br=new wl(n,r)}var dl,pl,yl,gl=(Nl.prototype.reset=function(){this.qi=0},Nl.prototype.Ki=function(){this.qi=this.Bi},Nl.prototype.ji=function(t){var e=this;this.cancel();var n=Math.floor(this.qi+this.Wi()),r=Math.max(0,Date.now()-this.Qi),i=Math.max(0,n-r);0<i&&xr("ExponentialBackoff","Backing off for "+i+" ms (base delay: "+this.qi+" ms, delay with jitter: "+n+" ms, last attempt: "+r+" ms ago)"),this.Ui=this.Se.enqueueAfterDelay(this.timerId,i,function(){return e.Qi=Date.now(),t()}),this.qi*=this.Li,this.qi<this.Mi&&(this.qi=this.Mi),this.qi>this.Bi&&(this.qi=this.Bi)},Nl.prototype.Gi=function(){null!==this.Ui&&(this.Ui.skipDelay(),this.Ui=null)},Nl.prototype.cancel=function(){null!==this.Ui&&(this.Ui.cancel(),this.Ui=null)},Nl.prototype.Wi=function(){return(Math.random()-.5)*this.qi},Nl),I=(Sl.prototype.tr=function(){return 1===this.state||2===this.state||4===this.state},Sl.prototype.er=function(){return 2===this.state},Sl.prototype.start=function(){3!==this.state?this.auth():this.nr()},Sl.prototype.stop=function(){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return this.tr()?[4,this.close(0)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},Sl.prototype.sr=function(){this.state=0,this.Zi.reset()},Sl.prototype.ir=function(){var t=this;this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,function(){return t.rr()}))},Sl.prototype.cr=function(t){this.ur(),this.stream.send(t)},Sl.prototype.rr=function(){return y(this,void 0,void 0,function(){return g(this,function(t){return this.er()?[2,this.close(0)]:[2]})})},Sl.prototype.ur=function(){this.Xi&&(this.Xi.cancel(),this.Xi=null)},Sl.prototype.close=function(e,n){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return this.ur(),this.Zi.cancel(),this.Yi++,3!==e?this.Zi.reset():n&&n.code===Dr.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.Zi.Ki()):n&&n.code===Dr.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ar(),this.stream.close(),this.stream=null),this.state=e,[4,this.listener.Ri(n)];case 1:return t.sent(),[2]}})})},Sl.prototype.ar=function(){},Sl.prototype.auth=function(){var n=this;this.state=1;var t=this.hr(this.Yi),e=this.Yi;this.Ji.getToken().then(function(t){n.Yi===e&&n.lr(t)},function(e){t(function(){var t=new Ar(Dr.UNKNOWN,"Fetching auth token failed: "+e.message);return n.dr(t)})})},Sl.prototype.lr=function(t){var e=this,n=this.hr(this.Yi);this.stream=this.wr(t),this.stream.Ii(function(){n(function(){return e.state=2,e.listener.Ii()})}),this.stream.Ri(function(t){n(function(){return e.dr(t)})}),this.stream.onMessage(function(t){n(function(){return e.onMessage(t)})})},Sl.prototype.nr=function(){var t=this;this.state=4,this.Zi.ji(function(){return y(t,void 0,void 0,function(){return g(this,function(t){return this.state=0,this.start(),[2]})})})},Sl.prototype.dr=function(t){return xr("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)},Sl.prototype.hr=function(e){var n=this;return function(t){n.Se.enqueueAndForget(function(){return n.Yi===e?t():(xr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())})}},Sl),ml=(n(_l,yl=I),_l.prototype.wr=function(t){return this.Hi.$i("Listen",t)},_l.prototype.onMessage=function(t){this.Zi.reset();var e=function(t,e){if("targetChange"in e){e.targetChange;var n="NO_CHANGE"===(o=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===o?1:"REMOVE"===o?2:"CURRENT"===o?3:"RESET"===o?4:Mr(),r=e.targetChange.targetIds||[],i=(s=e.targetChange.resumeToken,t.I?(Fr(void 0===s||"string"==typeof s),ni.fromBase64String(s||"")):(Fr(void 0===s||s instanceof Uint8Array),ni.fromUint8Array(s||new Uint8Array))),o=(a=e.targetChange.cause)&&(u=void 0===(c=a).code?Dr.UNKNOWN:Ss(c.code),new Ar(u,c.message||"")),s=new Hs(n,r,i,o||null)}else if("documentChange"in e){e.documentChange,(n=e.documentChange).document,n.document.name,n.document.updateTime;var r=la(t,n.document.name),i=aa(n.document.updateTime),a=new Ri({mapValue:{fields:n.document.fields}}),u=(o=Oi.newFoundDocument(r,i,a),n.targetIds||[]),c=n.removedTargetIds||[];s=new Qs(u,c,o.key,o)}else if("documentDelete"in e)e.documentDelete,(n=e.documentDelete).document,r=la(t,n.document),i=n.readTime?aa(n.readTime):Gr.min(),a=Oi.newNoDocument(r,i),o=n.removedTargetIds||[],s=new Qs([],o,a.key,a);else if("documentRemove"in e)e.documentRemove,(n=e.documentRemove).document,r=la(t,n.document),i=n.removedTargetIds||[],s=new Qs([],i,r,null);else{if(!("filter"in e))return Mr();e.filter;e=e.filter;e.targetId,n=e.count||0,r=new gs(n),i=e.targetId,s=new zs(i,r)}return s}(this.R,t),t=function(t){if(!("targetChange"in t))return Gr.min();t=t.targetChange;return(!t.targetIds||!t.targetIds.length)&&t.readTime?aa(t.readTime):Gr.min()}(t);return this.listener._r(e,t)},_l.prototype.mr=function(t){var e,n,r,i={};i.database=pa(this.R),i.addTarget=(e=this.R,(r=Ui(r=(n=t).target)?{documents:wa(e,r)}:{query:Ia(e,r)}).targetId=n.targetId,0<n.resumeToken.approximateByteSize()?r.resumeToken=sa(e,n.resumeToken):0<n.snapshotVersion.compareTo(Gr.min())&&(r.readTime=oa(e,n.snapshotVersion.toTimestamp())),r);var o,t=(this.R,o=t,null==(t=function(){switch(o.purpose){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}())?null:{"goog-listen-tags":t});t&&(i.labels=t),this.cr(i)},_l.prototype.yr=function(t){var e={};e.database=pa(this.R),e.removeTarget=t,this.cr(e)},_l),vl=(n(Tl,pl=I),Object.defineProperty(Tl.prototype,"pr",{get:function(){return this.gr},enumerable:!1,configurable:!0}),Tl.prototype.start=function(){this.gr=!1,this.lastStreamToken=void 0,pl.prototype.start.call(this)},Tl.prototype.ar=function(){this.gr&&this.Er([])},Tl.prototype.wr=function(t){return this.Hi.$i("Write",t)},Tl.prototype.onMessage=function(t){if(Fr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.gr){this.Zi.reset();var e=(n=t.writeResults,r=t.commitTime,n&&0<n.length?(Fr(void 0!==r),n.map(function(t){return n=r,(t=(e=t).updateTime?aa(e.updateTime):aa(n)).isEqual(Gr.min())&&(t=aa(n)),new Zo(t,e.transformResults||[]);var e,n})):[]),n=aa(t.commitTime);return this.listener.Tr(n,e)}var n,r;return Fr(!t.writeResults||0===t.writeResults.length),this.gr=!0,this.listener.Ir()},Tl.prototype.Ar=function(){var t={};t.database=pa(this.R),this.cr(t)},Tl.prototype.Er=function(t){var e=this,t={streamToken:this.lastStreamToken,writes:t.map(function(t){return va(e.R,t)})};this.cr(t)},Tl),bl=(n(El,dl=function(){}),El.prototype.br=function(){if(this.Rr)throw new Ar(Dr.FAILED_PRECONDITION,"The client has already been terminated.")},El.prototype.Ni=function(e,n,r){var i=this;return this.br(),this.credentials.getToken().then(function(t){return i.Hi.Ni(e,n,r,t)}).catch(function(t){throw"FirebaseError"===t.name?(t.code===Dr.UNAUTHENTICATED&&i.credentials.invalidateToken(),t):new Ar(Dr.UNKNOWN,t.toString())})},El.prototype.Oi=function(e,n,r){var i=this;return this.br(),this.credentials.getToken().then(function(t){return i.Hi.Oi(e,n,r,t)}).catch(function(t){throw"FirebaseError"===t.name?(t.code===Dr.UNAUTHENTICATED&&i.credentials.invalidateToken(),t):new Ar(Dr.UNKNOWN,t.toString())})},El.prototype.terminate=function(){this.Rr=!0},El),wl=(Il.prototype.Sr=function(){var t=this;0===this.vr&&(this.Dr("Unknown"),this.Pr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,function(){return t.Pr=null,t.Cr("Backend didn't respond within 10 seconds."),t.Dr("Offline"),Promise.resolve()}))},Il.prototype.Nr=function(t){"Online"===this.state?this.Dr("Unknown"):(this.vr++,1<=this.vr&&(this.Fr(),this.Cr("Connection failed 1 times. Most recent error: "+t.toString()),this.Dr("Offline")))},Il.prototype.set=function(t){this.Fr(),this.vr=0,"Online"===t&&(this.Vr=!1),this.Dr(t)},Il.prototype.Dr=function(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))},Il.prototype.Cr=function(t){t="Could not reach Cloud Firestore backend. "+t+"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";this.Vr?(Or(t),this.Vr=!1):xr("OnlineStateTracker",t)},Il.prototype.Fr=function(){null!==this.Pr&&(this.Pr.cancel(),this.Pr=null)},Il);function Il(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.vr=0,this.Pr=null,this.Vr=!0}function El(t,e,n){var r=this;return(r=dl.call(this)||this).credentials=t,r.Hi=e,r.R=n,r.Rr=!1,r}function Tl(t,e,n,r,i){var o=this;return(o=pl.call(this,t,"write_stream_connection_backoff","write_stream_idle",e,n,i)||this).R=r,o.gr=!1,o}function _l(t,e,n,r,i){var o=this;return(o=yl.call(this,t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i)||this).R=r,o}function Sl(t,e,n,r,i,o){this.Se=t,this.zi=n,this.Hi=r,this.Ji=i,this.listener=o,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new gl(t,e)}function Nl(t,e,n,r,i){void 0===n&&(n=1e3),void 0===r&&(r=1.5),void 0===i&&(i=6e4),this.Se=t,this.timerId=e,this.Mi=n,this.Li=r,this.Bi=i,this.qi=0,this.Ui=null,this.Qi=Date.now(),this.reset()}function Dl(r){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:if(!Pl(r))return[3,4];e=0,n=r.Mr,t.label=1;case 1:return e<n.length?[4,(0,n[e])(!0)]:[3,4];case 2:t.sent(),t.label=3;case 3:return e++,[3,1];case 4:return[2]}})})}function Al(r){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:e=0,n=r.Mr,t.label=1;case 1:return e<n.length?[4,(0,n[e])(!1)]:[3,4];case 2:t.sent(),t.label=3;case 3:return e++,[3,1];case 4:return[2]}})})}function kl(t,e){t.Or.has(e.targetId)||(t.Or.set(e.targetId,e),Ll(t)?Ol(t):Gl(t).er()&&Rl(t,e))}function Cl(t,e){var n=t,t=Gl(n);n.Or.delete(e),t.er()&&xl(n,e),0===n.Or.size&&(t.er()?t.ir():Pl(n)&&n.Br.set("Unknown"))}function Rl(t,e){t.qr.U(e.targetId),Gl(t).mr(e)}function xl(t,e){t.qr.U(e),Gl(t).yr(e)}function Ol(e){e.qr=new Ys({getRemoteKeysForTarget:function(t){return e.remoteSyncer.getRemoteKeysForTarget(t)},lt:function(t){return e.Or.get(t)||null}}),Gl(e).start(),e.Br.Sr()}function Ll(t){return Pl(t)&&!Gl(t).tr()&&0<t.Or.size}function Pl(t){return 0===t.$r.size}function Ml(t){t.qr=void 0}function Fl(s,a,u){return y(this,void 0,void 0,function(){var n,o;return g(this,function(t){switch(t.label){case 0:if(s.Br.set("Online"),!(a instanceof Hs&&2===a.state&&a.cause))return[3,6];t.label=1;case 1:return t.trys.push([1,3,,5]),[4,function(o,s){return y(this,void 0,void 0,function(){var e,n,r,i;return g(this,function(t){switch(t.label){case 0:e=s.cause,n=0,r=s.targetIds,t.label=1;case 1:return n<r.length?(i=r[n],o.Or.has(i)?[4,o.remoteSyncer.rejectListen(i,e)]:[3,3]):[3,5];case 2:t.sent(),o.Or.delete(i),o.qr.removeTarget(i),t.label=3;case 3:t.label=4;case 4:return n++,[3,1];case 5:return[2]}})})}(s,a)];case 2:return t.sent(),[3,5];case 3:return n=t.sent(),xr("RemoteStore","Failed to remove targets %s: %s ",a.targetIds.join(","),n),[4,Vl(s,n)];case 4:return t.sent(),[3,5];case 5:return[3,13];case 6:if(a instanceof Qs?s.qr.X(a):a instanceof zs?s.qr.rt(a):s.qr.et(a),u.isEqual(Gr.min()))return[3,13];t.label=7;case 7:return t.trys.push([7,11,,13]),[4,nh(s.localStore)];case 8:return o=t.sent(),0<=u.compareTo(o)?[4,(i=u,(e=(r=s).qr.ut(i)).targetChanges.forEach(function(t,e){var n;0<t.resumeToken.approximateByteSize()&&((n=r.Or.get(e))&&r.Or.set(e,n.withResumeToken(t.resumeToken,i)))}),e.targetMismatches.forEach(function(t){var e=r.Or.get(t);e&&(r.Or.set(t,e.withResumeToken(ni.EMPTY_BYTE_STRING,e.snapshotVersion)),xl(r,t),e=new Tu(e.target,t,1,e.sequenceNumber),Rl(r,e))}),r.remoteSyncer.applyRemoteEvent(e))]:[3,10];case 9:t.sent(),t.label=10;case 10:return[3,13];case 11:return xr("RemoteStore","Failed to raise snapshot:",o=t.sent()),[4,Vl(s,o)];case 12:return t.sent(),[3,13];case 13:return[2]}var r,i,e})})}function Vl(n,r,i){return y(this,void 0,void 0,function(){var e=this;return g(this,function(t){switch(t.label){case 0:if(!lu(r))throw r;return n.$r.add(1),[4,Al(n)];case 1:return t.sent(),n.Br.set("Offline"),i=i||function(){return nh(n.localStore)},n.asyncQueue.enqueueRetryable(function(){return y(e,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return xr("RemoteStore","Retrying IndexedDB access"),[4,i()];case 1:return t.sent(),n.$r.delete(1),[4,Dl(n)];case 2:return t.sent(),[2]}})})}),[2]}})})}function Ul(e,n){return n().catch(function(t){return Vl(e,t,n)})}function ql(u){return y(this,void 0,void 0,function(){var i,o,s,a;return g(this,function(t){switch(t.label){case 0:o=Ql(i=u),s=0<i.kr.length?i.kr[i.kr.length-1].batchId:-1,t.label=1;case 1:if(!(Pl(i)&&i.kr.length<10))return[3,7];t.label=2;case 2:return t.trys.push([2,4,,6]),[4,(e=i.localStore,n=s,(r=e).persistence.runTransaction("Get next mutation batch","readonly",function(t){return void 0===n&&(n=-1),r._n.getNextMutationBatchAfterBatchId(t,n)}))];case 3:return null===(a=t.sent())?(0===i.kr.length&&o.ir(),[3,7]):(s=a.batchId,function(t,e){t.kr.push(e);t=Ql(t);t.er()&&t.pr&&t.Er(e.mutations)}(i,a),[3,6]);case 4:return a=t.sent(),[4,Vl(i,a)];case 5:return t.sent(),[3,6];case 6:return[3,1];case 7:return Bl(i)&&jl(i),[2]}var e,n,r})})}function Bl(t){return Pl(t)&&!Ql(t).tr()&&0<t.kr.length}function jl(t){Ql(t).start()}function Kl(n,r){return y(this,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=n,r?(e.$r.delete(2),[4,Dl(e)]):[3,2];case 1:return t.sent(),[3,5];case 2:return r?[3,4]:(e.$r.add(2),[4,Al(e)]);case 3:t.sent(),e.Br.set("Unknown"),t.label=4;case 4:t.label=5;case 5:return[2]}})})}function Gl(n){var t,e,r,i=this;return n.Ur||(n.Ur=(t=n.datastore,e=n.asyncQueue,r={Ii:function(n){return y(this,void 0,void 0,function(){return g(this,function(t){return n.Or.forEach(function(t,e){Rl(n,t)}),[2]})})}.bind(null,n),Ri:function(e,n){return y(this,void 0,void 0,function(){return g(this,function(t){return Ml(e),Ll(e)?(e.Br.Nr(n),Ol(e)):e.Br.set("Unknown"),[2]})})}.bind(null,n),_r:Fl.bind(null,n)},t.br(),new ml(e,t.Hi,t.credentials,t.R,r)),n.Mr.push(function(e){return y(i,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return e?(n.Ur.sr(),Ll(n)?Ol(n):n.Br.set("Unknown"),[3,3]):[3,1];case 1:return[4,n.Ur.stop()];case 2:t.sent(),Ml(n),t.label=3;case 3:return[2]}})})})),n.Ur}function Ql(n){var t,e,r,i=this;return n.Qr||(n.Qr=(t=n.datastore,e=n.asyncQueue,r={Ii:function(e){return y(this,void 0,void 0,function(){return g(this,function(t){return Ql(e).Ar(),[2]})})}.bind(null,n),Ri:function(e,n){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return n&&Ql(e).pr?[4,function(r,i){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return _s(n=i.code)&&n!==Dr.ABORTED?(e=r.kr.shift(),Ql(r).sr(),[4,Ul(r,function(){return r.remoteSyncer.rejectFailedWrite(e.batchId,i)})]):[3,3];case 1:return t.sent(),[4,ql(r)];case 2:t.sent(),t.label=3;case 3:return[2]}})})}(e,n)]:[3,2];case 1:t.sent(),t.label=2;case 2:return Bl(e)&&jl(e),[2]}})})}.bind(null,n),Ir:function(o){return y(this,void 0,void 0,function(){var e,n,r,i;return g(this,function(t){for(e=Ql(o),n=0,r=o.kr;n<r.length;n++)i=r[n],e.Er(i.mutations);return[2]})})}.bind(null,n),Tr:function(r,i,o){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return e=r.kr.shift(),n=Eu.from(e,i,o),[4,Ul(r,function(){return r.remoteSyncer.applySuccessfulWrite(n)})];case 1:return t.sent(),[4,ql(r)];case 2:return t.sent(),[2]}})})}.bind(null,n)},t.br(),new vl(e,t.Hi,t.credentials,t.R,r)),n.Mr.push(function(e){return y(i,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return e?(n.Qr.sr(),[4,ql(n)]):[3,2];case 1:return t.sent(),[3,4];case 2:return[4,n.Qr.stop()];case 3:t.sent(),0<n.kr.length&&(xr("RemoteStore","Stopping write stream with "+n.kr.length+" pending writes"),n.kr=[]),t.label=4;case 4:return[2]}})})})),n.Qr}var zl=(Hl.createAndSchedule=function(t,e,n,r,i){i=new Hl(t,e,Date.now()+n,r,i);return i.start(n),i},Hl.prototype.start=function(t){var e=this;this.timerHandle=setTimeout(function(){return e.handleDelayElapsed()},t)},Hl.prototype.skipDelay=function(){return this.handleDelayElapsed()},Hl.prototype.cancel=function(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ar(Dr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))},Hl.prototype.handleDelayElapsed=function(){var e=this;this.asyncQueue.enqueueAndForget(function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then(function(t){return e.deferred.resolve(t)})):Promise.resolve()})},Hl.prototype.clearTimeout=function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)},Hl);function Hl(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Za,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(function(t){})}function Wl(t,e){if(Or("AsyncQueue",e+": "+t),lu(t))return new Ar(Dr.UNAVAILABLE,e+": "+t);throw t}function Yl(){this.queries=new Sc(ko,Ao),this.onlineState="Unknown",this.Gr=new Set}var Xl=(nf.emptySet=function(t){return new nf(t.comparator)},nf.prototype.has=function(t){return null!=this.keyedMap.get(t)},nf.prototype.get=function(t){return this.keyedMap.get(t)},nf.prototype.first=function(){return this.sortedSet.minKey()},nf.prototype.last=function(){return this.sortedSet.maxKey()},nf.prototype.isEmpty=function(){return this.sortedSet.isEmpty()},nf.prototype.indexOf=function(t){t=this.keyedMap.get(t);return t?this.sortedSet.indexOf(t):-1},Object.defineProperty(nf.prototype,"size",{get:function(){return this.sortedSet.size},enumerable:!1,configurable:!0}),nf.prototype.forEach=function(n){this.sortedSet.inorderTraversal(function(t,e){return n(t),!1})},nf.prototype.add=function(t){var e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))},nf.prototype.delete=function(t){var e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this},nf.prototype.isEqual=function(t){if(!(t instanceof nf))return!1;if(this.size!==t.size)return!1;for(var e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();e.hasNext();){var r=e.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0},nf.prototype.toString=function(){var e=[];return this.forEach(function(t){e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"},nf.prototype.copy=function(t,e){var n=new nf;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n},nf),Jl=(ef.prototype.track=function(t){var e=t.doc.key,n=this.Kr.get(e);!n||0!==t.type&&3===n.type?this.Kr=this.Kr.insert(e,t):3===t.type&&1!==n.type?this.Kr=this.Kr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Kr=this.Kr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Kr=this.Kr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Kr=this.Kr.remove(e):1===t.type&&2===n.type?this.Kr=this.Kr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Kr=this.Kr.insert(e,{type:2,doc:t.doc}):Mr()},ef.prototype.jr=function(){var n=[];return this.Kr.inorderTraversal(function(t,e){n.push(e)}),n},ef),$l=(tf.fromInitialDocuments=function(t,e,n,r){var i=[];return e.forEach(function(t){i.push({type:0,doc:t})}),new tf(t,e,Xl.emptySet(e),i,n,r,!0,!1)},Object.defineProperty(tf.prototype,"hasPendingWrites",{get:function(){return!this.mutatedKeys.isEmpty()},enumerable:!1,configurable:!0}),tf.prototype.isEqual=function(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ao(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;var e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0},tf),Zl=function(){this.Wr=void 0,this.listeners=[]};function tf(t,e,n,r,i,o,s,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}function ef(){this.Kr=new Ns(mi.comparator)}function nf(n){this.comparator=n?function(t,e){return n(t,e)||mi.comparator(t.key,e.key)}:function(t,e){return mi.comparator(t.key,e.key)},this.keyedMap=Vs,this.sortedSet=new Ns(this.comparator)}function rf(s,a){return y(this,void 0,void 0,function(){var e,n,r,i,o;return g(this,function(t){switch(t.label){case 0:if(e=s,n=a.query,r=!1,(i=e.queries.get(n))||(r=!0,i=new Zl),!r)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),o=i,[4,e.onListen(n)];case 2:return o.Wr=t.sent(),[3,4];case 3:return o=t.sent(),o=Wl(o,"Initialization of query '"+Co(a.query)+"' failed"),[2,void a.onError(o)];case 4:return e.queries.set(n,i),i.listeners.push(a),a.zr(e.onlineState),i.Wr&&a.Hr(i.Wr)&&sf(e),[2]}})})}function of(s,a){return y(this,void 0,void 0,function(){var e,n,r,i,o;return g(this,function(t){return e=s,n=a.query,r=!1,(i=e.queries.get(n))&&0<=(o=i.listeners.indexOf(a))&&(i.listeners.splice(o,1),r=0===i.listeners.length),r?[2,(e.queries.delete(n),e.onUnlisten(n))]:[2]})})}function sf(t){t.Gr.forEach(function(t){t.next()})}var af=(pf.prototype.Hr=function(t){if(!this.options.includeMetadataChanges){for(var e=[],n=0,r=t.docChanges;n<r.length;n++){var i=r[n];3!==i.type&&e.push(i)}t=new $l(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}var o=!1;return this.Yr?this.Zr(t)&&(this.Jr.next(t),o=!0):this.eo(t,this.onlineState)&&(this.no(t),o=!0),this.Xr=t,o},pf.prototype.onError=function(t){this.Jr.error(t)},pf.prototype.zr=function(t){this.onlineState=t;var e=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,t)&&(this.no(this.Xr),e=!0),e},pf.prototype.eo=function(t,e){if(!t.fromCache)return!0;var n="Offline"!==e;return!(this.options.so&&n||t.docs.isEmpty()&&"Offline"!==e)},pf.prototype.Zr=function(t){if(0<t.docChanges.length)return!0;var e=this.Xr&&this.Xr.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges},pf.prototype.no=function(t){t=$l.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Yr=!0,this.Jr.next(t)},pf),uf=(df.prototype.io=function(){return"metadata"in this.payload},df),cf=(ff.prototype.qn=function(t){return la(this.R,t)},ff.prototype.Un=function(t){return t.metadata.exists?ma(this.R,t.document,!1):Oi.newNoDocument(this.qn(t.metadata.name),this.Qn(t.metadata.readTime))},ff.prototype.Qn=aa,ff),hf=(lf.prototype.oo=function(t){this.progress.bytesLoaded+=t.byteLength;var e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null},lf.prototype.co=function(t){for(var e=new Map,n=new cf(this.R),r=0,i=t;r<i.length;r++){var o=i[r];if(o.metadata.queries)for(var s=n.qn(o.metadata.name),a=0,u=o.metadata.queries;a<u.length;a++){var c=u[a],h=(e.get(c)||Bs()).add(s);e.set(c,h)}}return e},lf.prototype.complete=function(){return y(this,void 0,void 0,function(){var e,n,r,i;return g(this,function(t){switch(t.label){case 0:return[4,function(l,f,d,p){return y(this,void 0,void 0,function(){var n,r,i,o,e,s,a,u,c,h;return g(this,function(t){switch(t.label){case 0:for(n=l,r=Bs(),i=Ps,o=Us,e=0,s=d;e<s.length;e++)a=s[e],u=f.qn(a.metadata.name),a.document&&(r=r.add(u)),i=i.insert(u,f.Un(a)),o=o.insert(u,f.Qn(a.metadata.readTime));return c=n.$n.newChangeBuffer({trackRemovals:!0}),[4,oh(n,No(bo($r.fromString("__bundle__/docs/"+p))))];case 1:return h=t.sent(),[2,n.persistence.runTransaction("Apply bundle documents","readwrite",function(e){return ih(e,c,i,Gr.min(),o).next(function(t){return c.apply(e),t}).next(function(t){return n.qe.removeMatchingKeysForTargetId(e,h.targetId).next(function(){return n.qe.addMatchingKeys(e,r,h.targetId)}).next(function(){return n.Mn.En(e,t)}).next(function(){return t})})})]}})})}(this.localStore,new cf(this.R),this.documents,this.ro.id)];case 1:e=t.sent(),n=this.co(this.documents),r=0,i=this.queries,t.label=2;case 2:return r<i.length?(i=i[r],[4,function(e,i,o){return void 0===o&&(o=Bs()),y(this,void 0,void 0,function(){var n,r;return g(this,function(t){switch(t.label){case 0:return[4,oh(e,No(Fu(i.bundledQuery)))];case 1:return n=t.sent(),[2,(r=e).persistence.runTransaction("Save named query","readwrite",function(t){var e=aa(i.readTime);if(0<=n.snapshotVersion.compareTo(e))return r.Qe.saveNamedQuery(t,i);e=n.withResumeToken(ni.EMPTY_BYTE_STRING,e);return r.Fn=r.Fn.insert(e.targetId,e),r.qe.updateTargetData(t,e).next(function(){return r.qe.removeMatchingKeysForTargetId(t,n.targetId)}).next(function(){return r.qe.addMatchingKeys(t,o,n.targetId)}).next(function(){return r.Qe.saveNamedQuery(t,i)})})]}})})}(this.localStore,i,n.get(i.name))]):[3,5];case 3:t.sent(),t.label=4;case 4:return r++,[3,2];case 5:return[2,(this.progress.taskState="Success",new Gc(Object.assign({},this.progress),e))]}})})},lf);function lf(t,e,n){this.ro=t,this.localStore=e,this.R=n,this.queries=[],this.documents=[],this.progress=yf(t)}function ff(t){this.R=t}function df(t,e){this.payload=t,this.byteLength=e}function pf(t,e,n){this.query=t,this.Jr=e,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}function yf(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}var gf=function(t){this.key=t},mf=function(t){this.key=t},vf=(Object.defineProperty(Tf.prototype,"wo",{get:function(){return this.uo},enumerable:!1,configurable:!0}),Tf.prototype._o=function(t,e){var s=this,a=e?e.mo:new Jl,u=(e||this).fo,c=(e||this).mutatedKeys,h=u,l=!1,f=wo(this.query)&&u.size===this.query.limit?u.last():null,d=Io(this.query)&&u.size===this.query.limit?u.first():null;if(t.inorderTraversal(function(t,e){var n=u.get(t),r=Ro(s.query,e)?e:null,i=!!n&&s.mutatedKeys.has(n.key),o=!!r&&(r.hasLocalMutations||s.mutatedKeys.has(r.key)&&r.hasCommittedMutations),e=!1;n&&r?n.data.isEqual(r.data)?i!==o&&(a.track({type:3,doc:r}),e=!0):s.yo(n,r)||(a.track({type:2,doc:r}),e=!0,(f&&0<s.lo(r,f)||d&&s.lo(r,d)<0)&&(l=!0)):!n&&r?(a.track({type:0,doc:r}),e=!0):n&&!r&&(a.track({type:1,doc:n}),e=!0,(f||d)&&(l=!0)),e&&(c=r?(h=h.add(r),o?c.add(t):c.delete(t)):(h=h.delete(t),c.delete(t)))}),wo(this.query)||Io(this.query))for(;h.size>this.query.limit;){var n=wo(this.query)?h.last():h.first(),h=h.delete(n.key),c=c.delete(n.key);a.track({type:1,doc:n})}return{fo:h,mo:a,Nn:l,mutatedKeys:c}},Tf.prototype.yo=function(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations},Tf.prototype.applyChanges=function(t,e,n){var o=this,r=this.fo;this.fo=t.fo,this.mutatedKeys=t.mutatedKeys;var i=t.mo.jr();i.sort(function(t,e){return r=t.type,i=e.type,n(r)-n(i)||o.lo(t.doc,e.doc);function n(t){switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}}var r,i}),this.po(n);var s=e?this.Eo():[],n=0===this.ho.size&&this.current?1:0,e=n!==this.ao;return this.ao=n,0!==i.length||e?{snapshot:new $l(this.query,t.fo,r,i,t.mutatedKeys,0==n,e,!1),To:s}:{To:s}},Tf.prototype.zr=function(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({fo:this.fo,mo:new Jl,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}},Tf.prototype.Io=function(t){return!this.uo.has(t)&&!!this.fo.has(t)&&!this.fo.get(t).hasLocalMutations},Tf.prototype.po=function(t){var e=this;t&&(t.addedDocuments.forEach(function(t){return e.uo=e.uo.add(t)}),t.modifiedDocuments.forEach(function(t){}),t.removedDocuments.forEach(function(t){return e.uo=e.uo.delete(t)}),this.current=t.current)},Tf.prototype.Eo=function(){var e=this;if(!this.current)return[];var n=this.ho;this.ho=Bs(),this.fo.forEach(function(t){e.Io(t.key)&&(e.ho=e.ho.add(t.key))});var r=[];return n.forEach(function(t){e.ho.has(t)||r.push(new mf(t))}),this.ho.forEach(function(t){n.has(t)||r.push(new gf(t))}),r},Tf.prototype.Ao=function(t){this.uo=t.Bn,this.ho=Bs();t=this._o(t.documents);return this.applyChanges(t,!0)},Tf.prototype.Ro=function(){return $l.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.ao)},Tf),bf=function(t,e,n){this.query=t,this.targetId=e,this.view=n},wf=function(t){this.key=t,this.bo=!1},If=(Object.defineProperty(Ef.prototype,"isPrimaryClient",{get:function(){return!0===this.Oo},enumerable:!1,configurable:!0}),Ef);function Ef(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.vo={},this.Po=new Sc(ko,Ao),this.Vo=new Map,this.So=new Set,this.Do=new Ns(mi.comparator),this.Co=new Map,this.No=new ph,this.xo={},this.Fo=new Map,this.ko=sc.Yt(),this.onlineState="Unknown",this.Oo=void 0}function Tf(t,e){this.query=t,this.uo=e,this.ao=null,this.current=!1,this.ho=Bs(),this.mutatedKeys=Bs(),this.lo=xo(t),this.fo=new Xl(this.lo)}function _f(i,o,s,a){return y(this,void 0,void 0,function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:return i.$o=function(t,e,n){return function(r,i,o,s){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return(e=i.view._o(o)).Nn?[4,ah(r.localStore,i.query,!1).then(function(t){t=t.documents;return i.view._o(t,e)})]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return n=s&&s.targetChanges.get(i.targetId),n=i.view.applyChanges(e,r.isPrimaryClient,n),[2,(Lf(r,i.targetId,n.To),n.snapshot)]}})})}(i,t,e,n)},[4,ah(i.localStore,o,!0)];case 1:return n=t.sent(),r=new vf(o,n.Bn),e=r._o(n.documents),n=Gs.createSynthesizedTargetChangeForCurrentChange(s,a&&"Offline"!==i.onlineState),n=r.applyChanges(e,i.isPrimaryClient,n),Lf(i,s,n.To),r=new bf(o,s,r),[2,(i.Po.set(o,r),i.Vo.has(s)?i.Vo.get(s).push(o):i.Vo.set(s,[o]),n.snapshot)]}})})}function Sf(f,d,p){return y(this,void 0,void 0,function(){var s,l;return g(this,function(t){switch(t.label){case 0:l=Kf(f),t.label=1;case 1:return t.trys.push([1,5,,6]),[4,(i=l.localStore,a=d,c=i,h=Kr.now(),o=a.reduce(function(t,e){return t.add(e.key)},Bs()),c.persistence.runTransaction("Locally write mutations","readwrite",function(s){return c.Mn.pn(s,o).next(function(t){u=t;for(var e=[],n=0,r=a;n<r.length;n++){var i=r[n],o=function(t,e){for(var n=null,r=0,i=t.fieldTransforms;r<i.length;r++){var o=i[r],s=e.data.field(o.field),s=Mo(o.transform,s||null);null!=s&&(n=null==n?Ri.empty():n).set(o.field,s)}return n||null}(i,u.get(i.key));null!=o&&e.push(new hs(i.key,o,function s(t){var a=[];return Wr(t.fields||{},function(t,e){var n=new ti([t]);if(Ci(e))if(0===(e=s(e.mapValue).fields).length)a.push(n);else for(var r=0,i=e;r<i.length;r++){var o=i[r];a.push(n.child(o))}else a.push(n)}),new ei(a)}(o.toProto().mapValue),es.exists(!0)))}return c._n.addMutationBatch(s,h,e,a)})}).then(function(t){return t.applyToLocalDocumentSet(u),{batchId:t.batchId,changes:u}}))];case 2:return s=t.sent(),l.sharedClientState.addPendingMutation(s.batchId),e=l,n=s.batchId,r=p,i=(i=(i=e.xo[e.currentUser.toKey()])||new Ns(qr)).insert(n,r),e.xo[e.currentUser.toKey()]=i,[4,Mf(l,s.changes)];case 3:return t.sent(),[4,ql(l.remoteStore)];case 4:return t.sent(),[3,6];case 5:return l=t.sent(),l=Wl(l,"Failed to persist write"),p.reject(l),[3,6];case 6:return[2]}var e,n,r,i,a,u,c,h,o})})}function Nf(r,i){return y(this,void 0,void 0,function(){var n,e;return g(this,function(t){switch(t.label){case 0:n=r,t.label=1;case 1:return t.trys.push([1,4,,6]),[4,rh(n.localStore,i)];case 2:return e=t.sent(),i.targetChanges.forEach(function(t,e){e=n.Co.get(e);e&&(Fr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),0<t.addedDocuments.size?e.bo=!0:0<t.modifiedDocuments.size?Fr(e.bo):0<t.removedDocuments.size&&(Fr(e.bo),e.bo=!1))}),[4,Mf(n,e,i)];case 3:return t.sent(),[3,6];case 4:return[4,dc(t.sent())];case 5:return t.sent(),[3,6];case 6:return[2]}})})}function Df(t,n,e){var r,t=t;(t.isPrimaryClient&&0===e||!t.isPrimaryClient&&1===e)&&(r=[],t.Po.forEach(function(t,e){e=e.view.zr(n);e.snapshot&&r.push(e.snapshot)}),function(t,i){t.onlineState=i;var o=!1;t.queries.forEach(function(t,e){for(var n=0,r=e.listeners;n<r.length;n++)r[n].zr(i)&&(o=!0)}),o&&sf(t)}(t.eventManager,n),r.length&&t.vo._r(r),t.onlineState=n,t.isPrimaryClient&&t.sharedClientState.setOnlineState(n))}function Af(s,a,u){return y(this,void 0,void 0,function(){var n,o;return g(this,function(t){switch(t.label){case 0:n=s,t.label=1;case 1:return t.trys.push([1,4,,6]),[4,(e=n.localStore,r=a,(i=e).persistence.runTransaction("Reject batch","readwrite-primary",function(e){var n;return i._n.lookupMutationBatch(e,r).next(function(t){return Fr(null!==t),n=t.keys(),i._n.removeMutationBatch(e,t)}).next(function(){return i._n.performConsistencyCheck(e)}).next(function(){return i.Mn.pn(e,n)})}))];case 2:return o=t.sent(),Rf(n,a,u),Cf(n,a),n.sharedClientState.updateMutationState(a,"rejected",u),[4,Mf(n,o)];case 3:return t.sent(),[3,6];case 4:return[4,dc(t.sent())];case 5:return t.sent(),[3,6];case 6:return[2]}var e,r,i})})}function kf(o,s){return y(this,void 0,void 0,function(){var n,r,i;return g(this,function(t){switch(t.label){case 0:Pl((n=o).remoteStore)||xr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,(e=n.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",function(t){return e._n.getHighestUnacknowledgedBatchId(t)})];case 2:return-1===(r=t.sent())?[2,void s.resolve()]:((i=n.Fo.get(r)||[]).push(s),n.Fo.set(r,i),[3,4]);case 3:return i=t.sent(),i=Wl(i,"Initialization of waitForPendingWrites() operation failed"),s.reject(i),[3,4];case 4:return[2]}var e})})}function Cf(t,e){(t.Fo.get(e)||[]).forEach(function(t){t.resolve()}),t.Fo.delete(e)}function Rf(t,e,n){var r=t,i=r.xo[r.currentUser.toKey()];i&&((t=i.get(e))&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.xo[r.currentUser.toKey()]=i)}function xf(e,t,n){void 0===n&&(n=null),e.sharedClientState.removeLocalQueryTarget(t);for(var r=0,i=e.Vo.get(t);r<i.length;r++){var o=i[r];e.Po.delete(o),n&&e.vo.Mo(o,n)}e.Vo.delete(t),e.isPrimaryClient&&e.No.Zn(t).forEach(function(t){e.No.containsKey(t)||Of(e,t)})}function Of(t,e){t.So.delete(e.path.canonicalString());var n=t.Do.get(e);null!==n&&(Cl(t.remoteStore,n),t.Do=t.Do.remove(e),t.Co.delete(n),Pf(t))}function Lf(t,e,n){for(var r,i,o,s=0,a=n;s<a.length;s++){var u=a[s];u instanceof gf?(t.No.addReference(u.key,e),r=t,o=void 0,i=(o=(i=u).key).path.canonicalString(),r.Do.get(o)||r.So.has(i)||(xr("SyncEngine","New document in limbo: "+o),r.So.add(i),Pf(r))):u instanceof mf?(xr("SyncEngine","Document no longer in limbo: "+u.key),t.No.removeReference(u.key,e),t.No.containsKey(u.key)||Of(t,u.key)):Mr()}}function Pf(t){for(;0<t.So.size&&t.Do.size<t.maxConcurrentLimboResolutions;){var e=t.So.values().next().value;t.So.delete(e);var n=new mi($r.fromString(e)),e=t.ko.next();t.Co.set(e,new wf(n)),t.Do=t.Do.insert(n,e),kl(t.remoteStore,new Tu(No(bo(n.path)),e,2,_r.o))}}function Mf(e,s,a){return y(this,void 0,void 0,function(){var n,r,i,o;return g(this,function(t){switch(t.label){case 0:return r=[],i=[],o=[],(n=e).Po.isEmpty()?[3,3]:(n.Po.forEach(function(t,e){o.push(n.$o(e,s,a).then(function(t){t&&(n.isPrimaryClient&&n.sharedClientState.updateQueryState(e.targetId,t.fromCache?"not-current":"current"),r.push(t),t=zc.Pn(e.targetId,t),i.push(t))}))}),[4,Promise.all(o)]);case 1:return t.sent(),n.vo._r(r),[4,function(u,c){return y(this,void 0,void 0,function(){var r,e,n,i,o,s,a;return g(this,function(t){switch(t.label){case 0:r=u,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,r.persistence.runTransaction("notifyLocalViewChanges","readwrite",function(n){return tu.forEach(c,function(e){return tu.forEach(e.bn,function(t){return r.persistence.referenceDelegate.addReference(n,e.targetId,t)}).next(function(){return tu.forEach(e.vn,function(t){return r.persistence.referenceDelegate.removeReference(n,e.targetId,t)})})})})];case 2:return t.sent(),[3,4];case 3:if(!lu(e=t.sent()))throw e;return xr("LocalStore","Failed to update sequence numbers: "+e),[3,4];case 4:for(n=0,i=c;n<i.length;n++)a=i[n],o=a.targetId,a.fromCache||(s=r.Fn.get(o),a=s.snapshotVersion,a=s.withLastLimboFreeSnapshotVersion(a),r.Fn=r.Fn.insert(o,a));return[2]}})})}(n.localStore,i)];case 2:t.sent(),t.label=3;case 3:return[2]}})})}function Ff(i,o){return y(this,void 0,void 0,function(){var n,r;return g(this,function(t){switch(t.label){case 0:return(n=i).currentUser.isEqual(o)?[3,3]:(xr("SyncEngine","User change. New user:",o.toKey()),[4,th(n.localStore,o)]);case 1:return r=t.sent(),n.currentUser=o,(e=n).Fo.forEach(function(t){t.forEach(function(t){t.reject(new Ar(Dr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Fo.clear(),n.sharedClientState.handleUserChange(o,r.removedBatchIds,r.addedBatchIds),[4,Mf(n,r.Ln)];case 2:t.sent(),t.label=3;case 3:return[2]}var e})})}function Vf(a,u,c,h){return y(this,void 0,void 0,function(){var o,s;return g(this,function(t){switch(t.label){case 0:return[4,(e=(o=a).localStore,n=u,i=(r=e)._n,r.persistence.runTransaction("Lookup mutation documents","readonly",function(e){return i.jt(e,n).next(function(t){return t?r.Mn.pn(e,t):tu.resolve(null)})}))];case 1:return null===(s=t.sent())?[3,6]:"pending"!==c?[3,3]:[4,ql(o.remoteStore)];case 2:return t.sent(),[3,4];case 3:"acknowledged"===c||"rejected"===c?(Rf(o,u,h||null),Cf(o,u),o.localStore._n.Gt(u)):Mr(),t.label=4;case 4:return[4,Mf(o,s)];case 5:return t.sent(),[3,7];case 6:xr("SyncEngine","Cannot apply mutation batch with id: "+u),t.label=7;case 7:return[2]}var e,n,r,i})})}function Uf(h,l){return y(this,void 0,void 0,function(){var r,e,i,o,s,a,u,c;return g(this,function(t){switch(t.label){case 0:return jf(r=h),Kf(r),!0!==l||!0===r.Oo?[3,3]:(e=r.sharedClientState.getAllActiveQueryTargets(),[4,qf(r,e.toArray())]);case 1:return i=t.sent(),r.Oo=!0,[4,Kl(r.remoteStore,!0)];case 2:for(t.sent(),o=0,s=i;o<s.length;o++)a=s[o],kl(r.remoteStore,a);return[3,7];case 3:return!1!==l||!1===r.Oo?[3,7]:(u=[],c=Promise.resolve(),r.Vo.forEach(function(t,e){r.sharedClientState.isLocalQueryTarget(e)?u.push(e):c=c.then(function(){return xf(r,e),sh(r.localStore,e,!0)}),Cl(r.remoteStore,e)}),[4,c]);case 4:return t.sent(),[4,qf(r,u)];case 5:return t.sent(),(n=r).Co.forEach(function(t,e){Cl(n.remoteStore,e)}),n.No.ts(),n.Co=new Map,n.Do=new Ns(mi.comparator),r.Oo=!1,[4,Kl(r.remoteStore,!1)];case 6:t.sent(),t.label=7;case 7:return[2]}var n})})}function qf(d,p){return y(this,void 0,void 0,function(){var e,n,r,i,o,s,a,u,c,h,l,f;return g(this,function(t){switch(t.label){case 0:e=d,n=[],r=[],i=0,o=p,t.label=1;case 1:return i<o.length?(s=o[i],a=void 0,(u=e.Vo.get(s))&&0!==u.length?[4,oh(e.localStore,No(u[0]))]:[3,7]):[3,13];case 2:a=t.sent(),c=0,h=u,t.label=3;case 3:return c<h.length?(l=h[c],l=e.Po.get(l),[4,function(r,i){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return[4,ah((e=r).localStore,i.query,!0)];case 1:return n=t.sent(),n=i.view.Ao(n),[2,(e.isPrimaryClient&&Lf(e,i.targetId,n.To),n)]}})})}(e,l)]):[3,6];case 4:(l=t.sent()).snapshot&&r.push(l.snapshot),t.label=5;case 5:return c++,[3,3];case 6:return[3,11];case 7:return[4,uh(e.localStore,s)];case 8:return f=t.sent(),[4,oh(e.localStore,f)];case 9:return a=t.sent(),[4,_f(e,Bf(f),s,!1)];case 10:t.sent(),t.label=11;case 11:n.push(a),t.label=12;case 12:return i++,[3,1];case 13:return[2,(e.vo._r(r),n)]}})})}function Bf(t){return vo(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function jf(t){return t.remoteStore.remoteSyncer.applyRemoteEvent=Nf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=function(t,e){var n=t;if((t=n.Co.get(e))&&t.bo)return Bs().add(t.key);var r=Bs();if(!(e=n.Vo.get(e)))return r;for(var i=0,o=e;i<o.length;i++)var s=o[i],s=n.Po.get(s),r=r.unionWith(s.view.wo);return r}.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=function(o,s,a){return y(this,void 0,void 0,function(){var e,n,r,i;return g(this,function(t){switch(t.label){case 0:return(e=o).sharedClientState.updateQueryState(s,"rejected",a),i=e.Co.get(s),(n=i&&i.key)?(r=(r=new Ns(mi.comparator)).insert(n,Oi.newNoDocument(n,Gr.min())),i=Bs().add(n),i=new Ks(Gr.min(),new Map,new Os(qr),r,i),[4,Nf(e,i)]):[3,2];case 1:return t.sent(),e.Do=e.Do.remove(n),e.Co.delete(s),Pf(e),[3,4];case 2:return[4,sh(e.localStore,s,!1).then(function(){return xf(e,s,a)}).catch(dc)];case 3:t.sent(),t.label=4;case 4:return[2]}})})}.bind(null,t),t.vo._r=function(t,e){for(var n=t,r=!1,i=0,o=e;i<o.length;i++){var s=o[i],a=s.query,a=n.queries.get(a);if(a){for(var u=0,c=a.listeners;u<c.length;u++)c[u].Hr(s)&&(r=!0);a.Wr=s}}r&&sf(n)}.bind(null,t.eventManager),t.vo.Mo=function(t,e,n){var r=t;if(t=r.queries.get(e))for(var i=0,o=t.listeners;i<o.length;i++)o[i].onError(n);r.queries.delete(e)}.bind(null,t.eventManager),t}function Kf(t){return t.remoteStore.remoteSyncer.applySuccessfulWrite=function(i,o){return y(this,void 0,void 0,function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:e=i,n=o.batch.batchId,t.label=1;case 1:return t.trys.push([1,4,,6]),[4,eh(e.localStore,o)];case 2:return r=t.sent(),Rf(e,n,null),Cf(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),[4,Mf(e,r)];case 3:return t.sent(),[3,6];case 4:return[4,dc(t.sent())];case 5:return t.sent(),[3,6];case 6:return[2]}})})}.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Af.bind(null,t),t}function Gf(t,e,n){var r=t;!function(f,d,p){return y(this,void 0,void 0,function(){var a,u,c,h,l;return g(this,function(t){switch(t.label){case 0:return t.trys.push([0,14,,15]),[4,d.getMetadata()];case 1:return a=t.sent(),[4,(r=f.localStore,o=r,s=aa((i=a).createTime),o.persistence.runTransaction("hasNewerBundle","readonly",function(t){return o.Qe.getBundleMetadata(t,i.id)}).then(function(t){return!!t&&0<=t.createTime.compareTo(s)}))];case 2:return t.sent()?[4,d.close()]:[3,4];case 3:return[2,(t.sent(),void p._completeWith({taskState:"Success",documentsLoaded:a.totalDocuments,bytesLoaded:a.totalBytes,totalDocuments:a.totalDocuments,totalBytes:a.totalBytes}))];case 4:return p._updateProgress(yf(a)),u=new hf(a,f.localStore,d.R),[4,d.Lo()];case 5:c=t.sent(),t.label=6;case 6:return c?[4,u.oo(c)]:[3,10];case 7:return(h=t.sent())&&p._updateProgress(h),[4,d.Lo()];case 8:c=t.sent(),t.label=9;case 9:return[3,6];case 10:return[4,u.complete()];case 11:return l=t.sent(),[4,Mf(f,l.wn,void 0)];case 12:return t.sent(),[4,(r=f.localStore,e=a,(n=r).persistence.runTransaction("Save bundle","readwrite",function(t){return n.Qe.saveBundleMetadata(t,e)}))];case 13:return t.sent(),p._completeWith(l.progress),[3,15];case 14:return Lr("SyncEngine","Loading bundle failed with "+(l=t.sent())),p._failWith(l),[3,15];case 15:return[2]}var e,n,r,i,o,s})})}(r,e,n).then(function(){r.sharedClientState.notifyBundleLoaded()})}var Qf,zf,Hf=(td.prototype.initialize=function(e){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return this.R=ll(e.databaseInfo.databaseId),this.sharedClientState=this.Bo(e),this.persistence=this.qo(e),[4,this.persistence.start()];case 1:return t.sent(),this.gcScheduler=this.Uo(e),this.localStore=this.Qo(e),[2]}})})},td.prototype.Uo=function(t){return null},td.prototype.Qo=function(t){return Zc(this.persistence,new Hc,t.initialUser,this.R)},td.prototype.qo=function(t){return new wh(Eh.bs,this.R)},td.prototype.Bo=function(t){return new Qh},td.prototype.terminate=function(){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return this.gcScheduler&&this.gcScheduler.stop(),[4,this.sharedClientState.shutdown()];case 1:return t.sent(),[4,this.persistence.shutdown()];case 2:return t.sent(),[2]}})})},td),Wf=(n(Zf,zf=Hf),Zf.prototype.initialize=function(e){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return[4,zf.prototype.initialize.call(this,e)];case 1:return t.sent(),[4,hh(this.localStore)];case 2:return t.sent(),[4,this.Ko.initialize(this,e)];case 3:return t.sent(),[4,Kf(this.Ko.syncEngine)];case 4:return t.sent(),[4,ql(this.Ko.remoteStore)];case 5:return t.sent(),[2]}})})},Zf.prototype.Qo=function(t){return Zc(this.persistence,new Hc,t.initialUser,this.R)},Zf.prototype.Uo=function(t){var e=this.persistence.referenceDelegate.garbageCollector;return new gc(e,t.asyncQueue)},Zf.prototype.qo=function(t){var e=Kc(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Xu.withCacheSize(this.cacheSizeBytes):Xu.DEFAULT;return new Uc(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,cl(),hl(),this.R,this.sharedClientState,!!this.forceOwnership)},Zf.prototype.Bo=function(t){return new Qh},Zf),Yf=(n($f,Qf=Wf),$f.prototype.initialize=function(r){return y(this,void 0,void 0,function(){var e,n=this;return g(this,function(t){switch(t.label){case 0:return[4,Qf.prototype.initialize.call(this,r)];case 1:return t.sent(),e=this.Ko.syncEngine,this.sharedClientState instanceof Gh?(this.sharedClientState.syncEngine={ui:Vf.bind(null,e),ai:function(i,o,s,a){return y(this,void 0,void 0,function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:return(e=i).Oo?(xr("SyncEngine","Ignoring unexpected query state notification."),[3,8]):[3,1];case 1:if(!e.Vo.has(o))return[3,8];switch(s){case"current":case"not-current":return[3,2];case"rejected":return[3,5]}return[3,7];case 2:return[4,ch(e.localStore)];case 3:return n=t.sent(),r=Ks.createSynthesizedRemoteEventForCurrentChange(o,"current"===s),[4,Mf(e,n,r)];case 4:return t.sent(),[3,8];case 5:return[4,sh(e.localStore,o,!0)];case 6:return t.sent(),xf(e,o,a),[3,8];case 7:Mr(),t.label=8;case 8:return[2]}})})}.bind(null,e),hi:function(c,h,l){return y(this,void 0,void 0,function(){var n,e,r,i,o,s,a,u;return g(this,function(t){switch(t.label){case 0:if(!(n=jf(c)).Oo)return[3,10];e=0,r=h,t.label=1;case 1:return e<r.length?(r=r[e],n.Vo.has(r)?(xr("SyncEngine","Adding an already active target "+r),[3,5]):[4,uh(n.localStore,r)]):[3,6];case 2:return i=t.sent(),[4,oh(n.localStore,i)];case 3:return o=t.sent(),[4,_f(n,Bf(i),o.targetId,!1)];case 4:t.sent(),kl(n.remoteStore,o),t.label=5;case 5:return e++,[3,1];case 6:s=function(e){return g(this,function(t){switch(t.label){case 0:return n.Vo.has(e)?[4,sh(n.localStore,e,!1).then(function(){Cl(n.remoteStore,e),xf(n,e)}).catch(dc)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})},a=0,u=l,t.label=7;case 7:return a<u.length?(u=u[a],[5,s(u)]):[3,10];case 8:t.sent(),t.label=9;case 9:return a++,[3,7];case 10:return[2]}})})}.bind(null,e),fn:function(t){return t.localStore.persistence.fn()}.bind(null,e),ci:function(n){return y(this,void 0,void 0,function(){var e;return g(this,function(t){return[2,ch((e=n).localStore).then(function(t){return Mf(e,t)})]})})}.bind(null,e)},[4,this.sharedClientState.start()]):[3,3];case 2:t.sent(),t.label=3;case 3:return[4,this.persistence.He(function(e){return y(n,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return[4,Uf(this.Ko.syncEngine,e)];case 1:return t.sent(),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop()),[2]}})})})];case 4:return t.sent(),[2]}})})},$f.prototype.Bo=function(t){var e=cl();if(!Gh.yt(e))throw new Ar(Dr.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");var n=Kc(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Gh(e,t.asyncQueue,n,t.clientId,t.initialUser)},$f),Xf=(Jf.prototype.initialize=function(n,r){return y(this,void 0,void 0,function(){var e=this;return g(this,function(t){switch(t.label){case 0:return this.localStore?[3,2]:(this.localStore=n.localStore,this.sharedClientState=n.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!n.synchronizeTabs),this.sharedClientState.onlineStateHandler=function(t){return Df(e.syncEngine,t,1)},this.remoteStore.remoteSyncer.handleCredentialChange=Ff.bind(null,this.syncEngine),[4,Kl(this.remoteStore,this.syncEngine.isPrimaryClient)]);case 1:t.sent(),t.label=2;case 2:return[2]}})})},Jf.prototype.createEventManager=function(t){return new Yl},Jf.prototype.createDatastore=function(t){var e=ll(t.databaseInfo.databaseId),n=(n=t.databaseInfo,new Xh(n));return t=t.credentials,new bl(t,n,e)},Jf.prototype.createRemoteStore=function(t){var e=this,n=this.localStore,r=this.datastore,i=t.asyncQueue,o=function(t){return Df(e.syncEngine,t,0)},t=new(Hh.yt()?Hh:zh);return new fl(n,r,i,o,t)},Jf.prototype.createSyncEngine=function(t,e){return function(t,e,n,r,i,o,s){o=new If(t,e,n,r,i,o);return s&&(o.Oo=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)},Jf.prototype.terminate=function(){return function(n){return y(this,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=n,xr("RemoteStore","RemoteStore shutting down."),e.$r.add(5),[4,Al(e)];case 1:return t.sent(),e.Lr.shutdown(),e.Br.set("Unknown"),[2]}})})}(this.remoteStore)},Jf);function Jf(){}function $f(t,e){var n=this;return(n=Qf.call(this,t,e,!1)||this).Ko=t,n.cacheSizeBytes=e,n.synchronizeTabs=!0,n}function Zf(t,e,n){var r=this;return(r=zf.call(this)||this).Ko=t,r.cacheSizeBytes=e,r.forceOwnership=n,r.synchronizeTabs=!1,r}function td(){this.synchronizeTabs=!1}function ed(n,r){void 0===r&&(r=10240);var i=0;return{read:function(){return y(this,void 0,void 0,function(){var e;return g(this,function(t){return i<n.byteLength?(e={value:n.slice(i,i+r),done:!1},[2,(i+=r,e)]):[2,{done:!0}]})})},cancel:function(){return y(this,void 0,void 0,function(){return g(this,function(t){return[2]})})},releaseLock:function(){},closed:Promise.reject("unimplemented")}}var nd=(ld.prototype.next=function(t){this.observer.next&&this.jo(this.observer.next,t)},ld.prototype.error=function(t){this.observer.error?this.jo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)},ld.prototype.Wo=function(){this.muted=!0},ld.prototype.jo=function(t,e){var n=this;this.muted||setTimeout(function(){n.muted||t(e)},0)},ld),rd=(hd.prototype.close=function(){return this.Go.cancel()},hd.prototype.getMetadata=function(){return y(this,void 0,void 0,function(){return g(this,function(t){return[2,this.metadata.promise]})})},hd.prototype.Lo=function(){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return[4,this.getMetadata()];case 1:return[2,(t.sent(),this.Ho())]}})})},hd.prototype.Ho=function(){return y(this,void 0,void 0,function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:return[4,this.Jo()];case 1:return null===(e=t.sent())?[2,null]:(r=this.zo.decode(e),n=Number(r),isNaN(n)&&this.Yo("length string ("+r+") is not valid number"),[4,this.Xo(n)]);case 2:return r=t.sent(),[2,new uf(JSON.parse(r),e.length+n)]}})})},hd.prototype.Zo=function(){return this.buffer.findIndex(function(t){return t==="{".charCodeAt(0)})},hd.prototype.Jo=function(){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return this.Zo()<0?[4,this.tc()]:[3,3];case 1:if(t.sent())return[3,3];t.label=2;case 2:return[3,0];case 3:return 0===this.buffer.length?[2,null]:((e=this.Zo())<0&&this.Yo("Reached the end of bundle when a length string is expected."),n=this.buffer.slice(0,e),[2,(this.buffer=this.buffer.slice(e),n)])}})})},hd.prototype.Xo=function(n){return y(this,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return this.buffer.length<n?[4,this.tc()]:[3,3];case 1:t.sent()&&this.Yo("Reached the end of bundle when more is expected."),t.label=2;case 2:return[3,0];case 3:return e=this.zo.decode(this.buffer.slice(0,n)),[2,(this.buffer=this.buffer.slice(n),e)]}})})},hd.prototype.Yo=function(t){throw this.Go.cancel(),new Error("Invalid bundle format: "+t)},hd.prototype.tc=function(){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return[4,this.Go.read()];case 1:return(e=t.sent()).done||((n=new Uint8Array(this.buffer.length+e.value.length)).set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n),[2,e.done]}})})},hd),id=(cd.prototype.lookup=function(r){return y(this,void 0,void 0,function(){var e,n=this;return g(this,function(t){switch(t.label){case 0:if(this.ensureCommitNotCalled(),0<this.mutations.length)throw new Ar(Dr.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");return[4,function(s,a){return y(this,void 0,void 0,function(){var n,e,r,i,o;return g(this,function(t){switch(t.label){case 0:return e=pa((n=s).R)+"/documents",r={documents:a.map(function(t){return ha(n.R,t)})},[4,n.Oi("BatchGetDocuments",e,r)];case 1:return r=t.sent(),i=new Map,r.forEach(function(t){var e,t=(e=n.R,"found"in(t=t)?function(t,e){Fr(!!e.found),e.found.name,e.found.updateTime;var n=la(t,e.found.name),t=aa(e.found.updateTime),e=new Ri({mapValue:{fields:e.found.fields}});return Oi.newFoundDocument(n,t,e)}(e,t):"missing"in t?function(t,e){Fr(!!e.missing),Fr(!!e.readTime);t=la(t,e.missing),e=aa(e.readTime);return Oi.newNoDocument(t,e)}(e,t):Mr());i.set(t.key.toString(),t)}),o=[],[2,(a.forEach(function(t){t=i.get(t.toString());Fr(!!t),o.push(t)}),o)]}})})}(this.datastore,r)];case 1:return[2,((e=t.sent()).forEach(function(t){return n.recordVersion(t)}),e)]}})})},cd.prototype.set=function(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())},cd.prototype.update=function(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())},cd.prototype.delete=function(t){this.write(new ws(t,this.precondition(t))),this.writtenDocs.add(t.toString())},cd.prototype.commit=function(){return y(this,void 0,void 0,function(){var e,n=this;return g(this,function(t){switch(t.label){case 0:if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;return e=this.readVersions,this.mutations.forEach(function(t){e.delete(t.key.toString())}),e.forEach(function(t,e){e=mi.fromPath(e);n.mutations.push(new Is(e,n.precondition(e)))}),[4,function(i,o){return y(this,void 0,void 0,function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:return n=pa((e=i).R)+"/documents",r={writes:o.map(function(t){return va(e.R,t)})},[4,e.Ni("Commit",n,r)];case 1:return t.sent(),[2]}})})}(this.datastore,this.mutations)];case 1:return t.sent(),this.committed=!0,[2]}})})},cd.prototype.recordVersion=function(t){var e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw Mr();e=Gr.min()}var n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new Ar(Dr.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)},cd.prototype.precondition=function(t){var e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?es.updateTime(e):es.none()},cd.prototype.preconditionForUpdate=function(t){var e=this.readVersions.get(t.toString());if(this.writtenDocs.has(t.toString())||!e)return es.exists(!0);if(e.isEqual(Gr.min()))throw new Ar(Dr.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return es.updateTime(e)},cd.prototype.write=function(t){this.ensureCommitNotCalled(),this.mutations.push(t)},cd.prototype.ensureCommitNotCalled=function(){},cd),od=(ud.prototype.run=function(){this.nc()},ud.prototype.nc=function(){var t=this;this.Zi.ji(function(){return y(t,void 0,void 0,function(){var e,n,r=this;return g(this,function(t){return e=new id(this.datastore),(n=this.sc(e))&&n.then(function(t){r.asyncQueue.enqueueAndForget(function(){return e.commit().then(function(){r.deferred.resolve(t)}).catch(function(t){r.ic(t)})})}).catch(function(t){r.ic(t)}),[2]})})})},ud.prototype.sc=function(t){try{var e=this.updateFunction(t);return!pi(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}},ud.prototype.ic=function(t){var e=this;0<this.ec&&this.rc(t)?(--this.ec,this.asyncQueue.enqueueAndForget(function(){return e.nc(),Promise.resolve()})):this.deferred.reject(t)},ud.prototype.rc=function(t){if("FirebaseError"!==t.name)return!1;t=t.code;return"aborted"===t||"failed-precondition"===t||!_s(t)},ud),sd=(ad.prototype.getConfiguration=function(){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return[4,this.receivedInitialUser.promise];case 1:return[2,(t.sent(),{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100})]}})})},ad.prototype.setCredentialChangeListener=function(t){var e=this;this.credentialListener=t,this.receivedInitialUser.promise.then(function(){return e.credentialListener(e.user)})},ad.prototype.verifyNotTerminated=function(){if(this.asyncQueue.isShuttingDown)throw new Ar(Dr.FAILED_PRECONDITION,"The client has already been terminated.")},ad.prototype.terminate=function(){var t=this;this.asyncQueue.enterRestrictedMode();var n=new Za;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return t.trys.push([0,5,,6]),this.onlineComponents?[4,this.onlineComponents.terminate()]:[3,2];case 1:t.sent(),t.label=2;case 2:return this.offlineComponents?[4,this.offlineComponents.terminate()]:[3,4];case 3:t.sent(),t.label=4;case 4:return this.credentials.removeChangeListener(),n.resolve(),[3,6];case 5:return e=t.sent(),e=Wl(e,"Failed to shutdown persistence"),n.reject(e),[3,6];case 6:return[2]}})})}),n.promise},ad);function ad(t,e,n){var r=this;this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=Th.UNAUTHENTICATED,this.clientId=Vr.u(),this.credentialListener=function(){},this.receivedInitialUser=new Za,this.credentials.setChangeListener(function(t){xr("FirestoreClient","Received user=",t.uid),r.user=t,r.credentialListener(t),r.receivedInitialUser.resolve()})}function ud(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.ec=5,this.Zi=new gl(this.asyncQueue,"transaction_retry")}function cd(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}function hd(t,e){var n=this;this.Go=t,this.R=e,this.metadata=new Za,this.buffer=new Uint8Array,this.zo=new TextDecoder("utf-8"),this.Ho().then(function(t){t&&t.io()?n.metadata.resolve(t.payload.metadata):n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},function(t){return n.metadata.reject(t)})}function ld(t){this.observer=t,this.muted=!1}function fd(i,o){return y(this,void 0,void 0,function(){var e,n,r=this;return g(this,function(t){switch(t.label){case 0:return i.asyncQueue.verifyOperationInProgress(),xr("FirestoreClient","Initializing OfflineComponentProvider"),[4,i.getConfiguration()];case 1:return e=t.sent(),[4,o.initialize(e)];case 2:return t.sent(),n=e.initialUser,i.setCredentialChangeListener(function(e){n.isEqual(e)||(n=e,i.asyncQueue.enqueueRetryable(function(){return y(r,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return[4,th(o.localStore,e)];case 1:return t.sent(),[2]}})})}))}),o.persistence.setDatabaseDeletedListener(function(){return i.terminate()}),i.offlineComponents=o,[2]}})})}function dd(r,i){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return r.asyncQueue.verifyOperationInProgress(),[4,pd(r)];case 1:return e=t.sent(),xr("FirestoreClient","Initializing OnlineComponentProvider"),[4,r.getConfiguration()];case 2:return n=t.sent(),[4,i.initialize(e,n)];case 3:return t.sent(),r.setCredentialChangeListener(function(t){return r.asyncQueue.enqueueRetryable(function(){return function(r,i){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return(e=r).asyncQueue.verifyOperationInProgress(),xr("RemoteStore","RemoteStore received new credentials"),n=Pl(e),e.$r.add(3),[4,Al(e)];case 1:return t.sent(),n&&e.Br.set("Unknown"),[4,e.remoteSyncer.handleCredentialChange(i)];case 2:return t.sent(),e.$r.delete(3),[4,Dl(e)];case 3:return t.sent(),[2]}})})}(i.remoteStore,t)})}),r.onlineComponents=i,[2]}})})}function pd(e){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return e.offlineComponents?[3,2]:(xr("FirestoreClient","Using default OfflineComponentProvider"),[4,fd(e,new Hf)]);case 1:t.sent(),t.label=2;case 2:return[2,e.offlineComponents]}})})}function yd(e){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return e.onlineComponents?[3,2]:(xr("FirestoreClient","Using default OnlineComponentProvider"),[4,dd(e,new Xf)]);case 1:t.sent(),t.label=2;case 2:return[2,e.onlineComponents]}})})}function gd(t){return pd(t).then(function(t){return t.persistence})}function md(t){return pd(t).then(function(t){return t.localStore})}function vd(t){return yd(t).then(function(t){return t.remoteStore})}function bd(t){return yd(t).then(function(t){return t.syncEngine})}function wd(r){return y(this,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return[4,yd(r)];case 1:return e=t.sent(),[2,((n=e.eventManager).onListen=function(s,a){return y(this,void 0,void 0,function(){var e,n,r,i,o;return g(this,function(t){switch(t.label){case 0:return e=jf(s),(o=e.Po.get(a))?(n=o.targetId,e.sharedClientState.addLocalQueryTarget(n),r=o.view.Ro(),[3,4]):[3,1];case 1:return[4,oh(e.localStore,No(a))];case 2:return i=t.sent(),o=e.sharedClientState.addLocalQueryTarget(i.targetId),n=i.targetId,[4,_f(e,a,n,"current"===o)];case 3:r=t.sent(),e.isPrimaryClient&&kl(e.remoteStore,i),t.label=4;case 4:return[2,r]}})})}.bind(null,e.syncEngine),n.onUnlisten=function(i,o){return y(this,void 0,void 0,function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:return n=(e=i).Po.get(o),1<(r=e.Vo.get(n.targetId)).length?[2,(e.Vo.set(n.targetId,r.filter(function(t){return!Ao(t,o)})),void e.Po.delete(o))]:e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)?[3,2]:[4,sh(e.localStore,n.targetId,!1).then(function(){e.sharedClientState.clearQueryState(n.targetId),Cl(e.remoteStore,n.targetId),xf(e,n.targetId)}).catch(dc)]):[3,3];case 1:t.sent(),t.label=2;case 2:return[3,5];case 3:return xf(e,n.targetId),[4,sh(e.localStore,n.targetId,!0)];case 4:t.sent(),t.label=5;case 5:return[2]}})})}.bind(null,e.syncEngine),n)]}})})}function Id(n,r,i){var t=this;void 0===i&&(i={});var o=new Za;return n.asyncQueue.enqueueAndForget(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=function(n,r,i,o,s){var t=new nd({next:function(t){r.enqueueAndForget(function(){return of(n,a)});var e=t.docs.has(i);!e&&t.fromCache?s.reject(new Ar(Dr.UNAVAILABLE,"Failed to get document because the client is offline.")):e&&t.fromCache&&o&&"server"===o.source?s.reject(new Ar(Dr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(t)},error:function(t){return s.reject(t)}}),a=new af(bo(i.path),t,{includeMetadataChanges:!0,so:!0});return rf(n,a)},[4,wd(n)];case 1:return[2,e.apply(void 0,[t.sent(),n.asyncQueue,r,i,o])]}})})}),o.promise}function Ed(n,r,i){var t=this;void 0===i&&(i={});var o=new Za;return n.asyncQueue.enqueueAndForget(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=function(e,n,t,r,i){var o=new nd({next:function(t){n.enqueueAndForget(function(){return of(e,s)}),t.fromCache&&"server"===r.source?i.reject(new Ar(Dr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(t)},error:function(t){return i.reject(t)}}),s=new af(t,o,{includeMetadataChanges:!0,so:!0});return rf(e,s)},[4,wd(n)];case 1:return[2,e.apply(void 0,[t.sent(),n.asyncQueue,r,i,o])]}})})}),o.promise}function Td(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}var _d=function(t,e,n,r,i,o,s){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s},Sd=(Object.defineProperty(Pd.prototype,"isDefaultDatabase",{get:function(){return"(default)"===this.database},enumerable:!1,configurable:!0}),Pd.prototype.isEqual=function(t){return t instanceof Pd&&t.projectId===this.projectId&&t.database===this.database},Pd),Nd=new Map,Dd=(Ld.prototype.getToken=function(){return Promise.resolve(null)},Ld.prototype.invalidateToken=function(){},Ld.prototype.setChangeListener=function(t){(this.changeListener=t)(Th.UNAUTHENTICATED)},Ld.prototype.removeChangeListener=function(){this.changeListener=null},Ld),Ad=(Od.prototype.getToken=function(){var e=this,n=this.cc,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(function(t){return e.cc!==n?(xr("FirebaseCredentialsProvider","getToken aborted due to token change."),e.getToken()):t?(Fr("string"==typeof t.accessToken),new Td(t.accessToken,e.currentUser)):null}):Promise.resolve(null)},Od.prototype.invalidateToken=function(){this.forceRefresh=!0},Od.prototype.setChangeListener=function(t){this.changeListener=t,this.receivedInitialUser&&t(this.currentUser)},Od.prototype.removeChangeListener=function(){this.auth&&this.auth.removeAuthTokenListener(this.oc),this.oc=null,this.changeListener=null},Od.prototype.uc=function(){var t=this.auth&&this.auth.getUid();return Fr(null===t||"string"==typeof t),new Th(t)},Od),kd=(Object.defineProperty(xd.prototype,"authHeaders",{get:function(){var t={"X-Goog-AuthUser":this.hc},e=this.ac.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.lc&&(t["X-Goog-Iam-Authorization-Token"]=this.lc),t},enumerable:!1,configurable:!0}),xd),Cd=(Rd.prototype.getToken=function(){return Promise.resolve(new kd(this.ac,this.hc,this.lc))},Rd.prototype.setChangeListener=function(t){t(Th.FIRST_PARTY)},Rd.prototype.removeChangeListener=function(){},Rd.prototype.invalidateToken=function(){},Rd);function Rd(t,e,n){this.ac=t,this.hc=e,this.lc=n}function xd(t,e,n){this.ac=t,this.hc=e,this.lc=n,this.type="FirstParty",this.user=Th.FIRST_PARTY}function Od(t){var e=this;this.oc=null,this.currentUser=Th.UNAUTHENTICATED,this.receivedInitialUser=!1,this.cc=0,this.changeListener=null,this.forceRefresh=!1,this.oc=function(){e.cc++,e.currentUser=e.uc(),e.receivedInitialUser=!0,e.changeListener&&e.changeListener(e.currentUser)},this.cc=0,this.auth=t.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.oc):(this.oc(null),t.get().then(function(t){e.auth=t,e.oc&&e.auth.addAuthTokenListener(e.oc)},function(){}))}function Ld(){this.changeListener=null}function Pd(t,e){this.projectId=t,this.database=e||"(default)"}function Md(t,e,n){if(!n)throw new Ar(Dr.INVALID_ARGUMENT,"Function "+t+"() cannot be called with an empty "+e+".")}function Fd(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid options passed to function "+t+'(): You cannot specify both "merge" and "mergeFields".');return e}function Vd(t,e,n,r){if(!0===e&&!0===r)throw new Ar(Dr.INVALID_ARGUMENT,t+" and "+n+" cannot be used together.")}function Ud(t){if(!mi.isDocumentKey(t))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+t+" has "+t.length+".")}function qd(t){if(mi.isDocumentKey(t))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but "+t+" has "+t.length+".")}function Bd(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return 20<e.length&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"!=typeof e)return"function"==typeof e?"a function":Mr();if(e instanceof Array)return"an array";var t=function(){if(e.constructor){var t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&1<t.length)return t[1]}return null}();return t?"a custom "+t+" object":"an object"}function jd(t,e){if((t="_delegate"in t?t._delegate:t)instanceof e)return t;if(e.name===t.constructor.name)throw new Ar(Dr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");t=Bd(t);throw new Ar(Dr.INVALID_ARGUMENT,"Expected type '"+e.name+"', but it was: "+t)}function Kd(t,e){if(e<=0)throw new Ar(Dr.INVALID_ARGUMENT,"Function "+t+"() requires a positive number, but it was: "+e+".")}var Gd,Qd=(tp.prototype.isEqual=function(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties},tp),zd=(Object.defineProperty(Zd.prototype,"app",{get:function(){if(!this._app)throw new Ar(Dr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app},enumerable:!1,configurable:!0}),Object.defineProperty(Zd.prototype,"_initialized",{get:function(){return this._settingsFrozen},enumerable:!1,configurable:!0}),Object.defineProperty(Zd.prototype,"_terminated",{get:function(){return void 0!==this._terminateTask},enumerable:!1,configurable:!0}),Zd.prototype._setSettings=function(t){if(this._settingsFrozen)throw new Ar(Dr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qd(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new Dd;switch(t.type){case"gapi":var e=t.client;return Fr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Cd(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ar(Dr.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))},Zd.prototype._getSettings=function(){return this._settings},Zd.prototype._freezeSettings=function(){return this._settingsFrozen=!0,this._settings},Zd.prototype._delete=function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask},Zd.prototype.toJSON=function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}},Zd.prototype._terminate=function(){return(t=Nd.get(this))&&(xr("ComponentProvider","Removing Datastore"),Nd.delete(this),t.terminate()),Promise.resolve();var t},Zd),Hd=(Object.defineProperty($d.prototype,"_path",{get:function(){return this._key.path},enumerable:!1,configurable:!0}),Object.defineProperty($d.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!1,configurable:!0}),Object.defineProperty($d.prototype,"path",{get:function(){return this._key.path.canonicalString()},enumerable:!1,configurable:!0}),Object.defineProperty($d.prototype,"parent",{get:function(){return new Yd(this.firestore,this._converter,this._key.path.popLast())},enumerable:!1,configurable:!0}),$d.prototype.withConverter=function(t){return new $d(this.firestore,t,this._key)},$d),Wd=(Jd.prototype.withConverter=function(t){return new Jd(this.firestore,t,this._query)},Jd),Yd=(n(Xd,Gd=Wd),Object.defineProperty(Xd.prototype,"id",{get:function(){return this._query.path.lastSegment()},enumerable:!1,configurable:!0}),Object.defineProperty(Xd.prototype,"path",{get:function(){return this._query.path.canonicalString()},enumerable:!1,configurable:!0}),Object.defineProperty(Xd.prototype,"parent",{get:function(){var t=this._path.popLast();return t.isEmpty()?null:new Hd(this.firestore,null,new mi(t))},enumerable:!1,configurable:!0}),Xd.prototype.withConverter=function(t){return new Xd(this.firestore,t,this._path)},Xd);function Xd(t,e,n){var r=this;return(r=Gd.call(this,t,e,bo(n))||this)._path=n,r.type="collection",r}function Jd(t,e,n){this._converter=e,this._query=n,this.type="query",this.firestore=t}function $d(t,e,n){this._converter=e,this._key=n,this.type="document",this.firestore=t}function Zd(t,e){this._persistenceKey="(lite)",this._settings=new Qd({}),this._settingsFrozen=!1,t instanceof Sd?(this._databaseId=t,this._credentials=new Dd):(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ar(Dr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sd(t.options.projectId)}(t),this._credentials=new Ad(e))}function tp(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ar(Dr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ar(Dr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,Vd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}function ep(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t=m(t),Md("collection","path",e),t instanceof zd)return qd(n=$r.fromString.apply($r,s([e],r))),new Yd(t,null,n);if(!(t instanceof Hd||t instanceof Yd))throw new Ar(Dr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");return qd(n=$r.fromString.apply($r,s([t.path],r)).child($r.fromString(e))),new Yd(t.firestore,null,n)}function np(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t=m(t),Md("doc","path",e=1===arguments.length?Vr.u():e),t instanceof zd)return Ud(n=$r.fromString.apply($r,s([e],r))),new Hd(t,null,new mi(n));if(!(t instanceof Hd||t instanceof Yd))throw new Ar(Dr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");return Ud(n=t._path.child($r.fromString.apply($r,s([e],r)))),new Hd(t.firestore,t instanceof Yd?t._converter:null,new mi(n))}function rp(t,e){return t=m(t),e=m(e),(t instanceof Hd||t instanceof Yd)&&(e instanceof Hd||e instanceof Yd)&&t.firestore===e.firestore&&t.path===e.path&&t._converter===e._converter}function ip(t,e){return t=m(t),e=m(e),t instanceof Wd&&e instanceof Wd&&t.firestore===e.firestore&&Ao(t._query,e._query)&&t._converter===e._converter}var op=(Object.defineProperty(sp.prototype,"isShuttingDown",{get:function(){return this.wc},enumerable:!1,configurable:!0}),sp.prototype.enqueueAndForget=function(t){this.enqueue(t)},sp.prototype.enqueueAndForgetEvenWhileRestricted=function(t){this.Tc(),this.Ic(t)},sp.prototype.enterRestrictedMode=function(){var t;this.wc||(this.wc=!0,(t=hl())&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ec))},sp.prototype.enqueue=function(t){return this.Tc(),this.wc?new Promise(function(t){}):this.Ic(t)},sp.prototype.enqueueRetryable=function(t){var e=this;this.enqueueAndForget(function(){return e.dc.push(t),e.Ac()})},sp.prototype.Ac=function(){return y(this,void 0,void 0,function(){var e,n=this;return g(this,function(t){switch(t.label){case 0:if(0===this.dc.length)return[3,5];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.dc[0]()];case 2:return t.sent(),this.dc.shift(),this.Zi.reset(),[3,4];case 3:if(!lu(e=t.sent()))throw e;return xr("AsyncQueue","Operation failed with retryable error: "+e),[3,4];case 4:0<this.dc.length&&this.Zi.ji(function(){return n.Ac()}),t.label=5;case 5:return[2]}})})},sp.prototype.Ic=function(t){var r=this,e=this.fc.then(function(){return r.yc=!0,t().catch(function(t){throw r.mc=t,r.yc=!1,Or("INTERNAL UNHANDLED ERROR: ",(n=(e=t).message||"",n=e.stack?e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack:n)),t;var e,n}).then(function(t){return r.yc=!1,t})});return this.fc=e},sp.prototype.enqueueAfterDelay=function(t,e,n){var r=this;this.Tc(),-1<this.gc.indexOf(t)&&(e=0);n=zl.createAndSchedule(this,t,e,n,function(t){return r.Rc(t)});return this._c.push(n),n},sp.prototype.Tc=function(){this.mc&&Mr()},sp.prototype.verifyOperationInProgress=function(){},sp.prototype.bc=function(){return y(this,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return[4,e=this.fc];case 1:t.sent(),t.label=2;case 2:if(e!==this.fc)return[3,0];t.label=3;case 3:return[2]}})})},sp.prototype.vc=function(t){for(var e=0,n=this._c;e<n.length;e++)if(n[e].timerId===t)return!0;return!1},sp.prototype.Pc=function(r){var i=this;return this.bc().then(function(){i._c.sort(function(t,e){return t.targetTimeMs-e.targetTimeMs});for(var t=0,e=i._c;t<e.length;t++){var n=e[t];if(n.skipDelay(),"all"!==r&&n.timerId===r)break}return i.bc()})},sp.prototype.Vc=function(t){this.gc.push(t)},sp.prototype.Rc=function(t){t=this._c.indexOf(t);this._c.splice(t,1)},sp);function sp(){var e=this;this.fc=Promise.resolve(),this.dc=[],this.wc=!1,this._c=[],this.mc=null,this.yc=!1,this.gc=[],this.Zi=new gl(this,"async_queue_retry"),this.Ec=function(){var t=hl();t&&xr("AsyncQueue","Visibility state changed to "+t.visibilityState),e.Zi.Gi()};var t=hl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ec)}function ap(i){return function(){if("object"==typeof i&&null!==i)for(var t=i,e=0,n=["next","error","complete"];e<n.length;e++){var r=n[e];if(r in t&&"function"==typeof t[r])return 1}}()}var up,cp=(fp.prototype.onProgress=function(t,e,n){this._progressObserver={next:t,error:e,complete:n}},fp.prototype.catch=function(t){return this._taskCompletionResolver.promise.catch(t)},fp.prototype.then=function(t,e){return this._taskCompletionResolver.promise.then(t,e)},fp.prototype._completeWith=function(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)},fp.prototype._failWith=function(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)},fp.prototype._updateProgress=function(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)},fp),hp=(n(lp,up=zd),lp.prototype._terminate=function(){return this._firestoreClient||pp(this),this._firestoreClient.terminate()},lp);function lp(t,e){var n=this;return(n=up.call(this,t,e)||this)._queue=new op,n._persistenceKey="name"in t?t.name:"[DEFAULT]",n}function fp(){this._progressObserver={},this._taskCompletionResolver=new Za,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}function dp(t){return t._firestoreClient||pp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pp(t){var e,n,r,i=t._freezeSettings(),i=(e=t._databaseId,n=(null===(r=t._app)||void 0===r?void 0:r.options.appId)||"",r=t._persistenceKey,new _d(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling));t._firestoreClient=new sd(t._credentials,t._queue,i)}function yp(r,i,o){var t=this,s=new Za;return r.asyncQueue.enqueue(function(){return y(t,void 0,void 0,function(){var n;return g(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fd(r,o)];case 1:return t.sent(),[4,dd(r,i)];case 2:return t.sent(),s.resolve(),[3,4];case 3:if(!("FirebaseError"===(e=n=t.sent()).name?e.code===Dr.FAILED_PRECONDITION||e.code===Dr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code))throw n;return console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+n),s.reject(n),[3,4];case 4:return[2]}var e})})}).then(function(){return s.promise})}function gp(t){if(t._initialized||t._terminated)throw new Ar(Dr.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}var mp=(Ap.prototype.isEqual=function(t){return this._internalPath.isEqual(t._internalPath)},Ap),vp=(Dp.fromBase64String=function(t){try{return new Dp(ni.fromBase64String(t))}catch(t){throw new Ar(Dr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}},Dp.fromUint8Array=function(t){return new Dp(ni.fromUint8Array(t))},Dp.prototype.toBase64=function(){return this._byteString.toBase64()},Dp.prototype.toUint8Array=function(){return this._byteString.toUint8Array()},Dp.prototype.toString=function(){return"Bytes(base64: "+this.toBase64()+")"},Dp.prototype.isEqual=function(t){return this._byteString.isEqual(t._byteString)},Dp),bp=function(t){this._methodName=t},wp=(Object.defineProperty(Np.prototype,"latitude",{get:function(){return this._lat},enumerable:!1,configurable:!0}),Object.defineProperty(Np.prototype,"longitude",{get:function(){return this._long},enumerable:!1,configurable:!0}),Np.prototype.isEqual=function(t){return this._lat===t._lat&&this._long===t._long},Np.prototype.toJSON=function(){return{latitude:this._lat,longitude:this._long}},Np.prototype._compareTo=function(t){return qr(this._lat,t._lat)||qr(this._long,t._long)},Np),Ip=/^__.*__$/,Ep=(Sp.prototype.toMutation=function(t,e){return null!==this.fieldMask?new hs(t,this.data,this.fieldMask,e,this.fieldTransforms):new cs(t,this.data,e,this.fieldTransforms)},Sp),Tp=(_p.prototype.toMutation=function(t,e){return new hs(t,this.data,this.fieldMask,e,this.fieldTransforms)},_p);function _p(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}function Sp(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}function Np(t,e){if(!isFinite(t)||t<-90||90<t)throw new Ar(Dr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||180<e)throw new Ar(Dr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}function Dp(t){this._byteString=t}function Ap(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=0;n<t.length;++n)if(0===t[n].length)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ti(t)}function kp(t){switch(t){case 0:case 2:case 1:return 1;case 3:case 4:return;default:throw Mr()}}var Cp=(Object.defineProperty(Op.prototype,"path",{get:function(){return this.settings.path},enumerable:!1,configurable:!0}),Object.defineProperty(Op.prototype,"Dc",{get:function(){return this.settings.Dc},enumerable:!1,configurable:!0}),Op.prototype.Cc=function(t){return new Op(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.R,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)},Op.prototype.Nc=function(t){var e=null===(e=this.path)||void 0===e?void 0:e.child(t),e=this.Cc({path:e,xc:!1});return e.Fc(t),e},Op.prototype.kc=function(t){var e,t=null===(e=this.path)||void 0===e?void 0:e.child(t),t=this.Cc({path:t,xc:!1});return t.Sc(),t},Op.prototype.Oc=function(t){return this.Cc({path:void 0,xc:!0})},Op.prototype.$c=function(t){return uy(t,this.settings.methodName,this.settings.Mc||!1,this.path,this.settings.Lc)},Op.prototype.contains=function(e){return void 0!==this.fieldMask.find(function(t){return e.isPrefixOf(t)})||void 0!==this.fieldTransforms.find(function(t){return e.isPrefixOf(t.field)})},Op.prototype.Sc=function(){if(this.path)for(var t=0;t<this.path.length;t++)this.Fc(this.path.get(t))},Op.prototype.Fc=function(t){if(0===t.length)throw this.$c("Document fields must not be empty");if(kp(this.Dc)&&Ip.test(t))throw this.$c('Document fields cannot begin and end with "__"')},Op),Rp=(xp.prototype.Bc=function(t,e,n,r){return void 0===r&&(r=!1),new Cp({Dc:t,methodName:e,Lc:n,path:ti.emptyPath(),xc:!1,Mc:r},this.databaseId,this.R,this.ignoreUndefinedProperties)},xp);function xp(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.R=n||ll(t)}function Op(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.R=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}function Lp(t){var e=t._freezeSettings(),n=ll(t._databaseId);return new Rp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pp(t,e,n,r,i,o){void 0===o&&(o={});var s=t.Bc(o.merge||o.mergeFields?2:0,e,n,i);iy("Data must be an object, but it was:",s,r);var a,u,r=ny(r,s);if(o.merge)a=new ei(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){for(var c=[],h=0,l=o.mergeFields;h<l.length;h++){var f=oy(e,l[h],n);if(!s.contains(f))throw new Ar(Dr.INVALID_ARGUMENT,"Field '"+f+"' is specified in your field mask but missing from your input data.");cy(c,f)||c.push(f)}a=new ei(c),u=s.fieldTransforms.filter(function(t){return a.covers(t.field)})}else a=null,u=s.fieldTransforms;return new Ep(new Ri(r),a,u)}var Mp,Fp=(n(Vp,Mp=bp),Vp.prototype._toFieldTransform=function(t){if(2!==t.Dc)throw 1===t.Dc?t.$c(this._methodName+"() can only appear at the top level of your update data"):t.$c(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null},Vp.prototype.isEqual=function(t){return t instanceof Vp},Vp);function Vp(){return null!==Mp&&Mp.apply(this,arguments)||this}function Up(t,e,n){return new Cp({Dc:3,Lc:e.settings.Lc,methodName:t._methodName,xc:n},e.databaseId,e.R,e.ignoreUndefinedProperties)}var qp,Bp,jp,Kp,Gp=(n(Jp,Kp=bp),Jp.prototype._toFieldTransform=function(t){return new ts(t.path,new Uo)},Jp.prototype.isEqual=function(t){return t instanceof Jp},Jp),Qp=(n(Xp,jp=bp),Xp.prototype._toFieldTransform=function(t){var e=Up(this,t,!0),n=this.qc.map(function(t){return ey(t,e)}),n=new qo(n);return new ts(t.path,n)},Xp.prototype.isEqual=function(t){return this===t},Xp),zp=(n(Yp,Bp=bp),Yp.prototype._toFieldTransform=function(t){var e=Up(this,t,!0),n=this.qc.map(function(t){return ey(t,e)}),n=new Qo(n);return new ts(t.path,n)},Yp.prototype.isEqual=function(t){return this===t},Yp),Hp=(n(Wp,qp=bp),Wp.prototype._toFieldTransform=function(t){var e=new Yo(t.R,Po(t.R,this.Uc));return new ts(t.path,e)},Wp.prototype.isEqual=function(t){return this===t},Wp);function Wp(t,e){var n=this;return(n=qp.call(this,t)||this).Uc=e,n}function Yp(t,e){var n=this;return(n=Bp.call(this,t)||this).qc=e,n}function Xp(t,e){var n=this;return(n=jp.call(this,t)||this).qc=e,n}function Jp(){return null!==Kp&&Kp.apply(this,arguments)||this}function $p(t,r,i,e){var o=t.Bc(1,r,i);iy("Data must be an object, but it was:",o,e);var s=[],a=Ri.empty();Wr(e,function(t,e){var n=ay(r,t,i);e=m(e);t=o.kc(n);e instanceof Fp?s.push(n):null!=(t=ey(e,t))&&(s.push(n),a.set(n,t))});e=new ei(s);return new Tp(a,e,o.fieldTransforms)}function Zp(t,e,n,r,i,o){var s=t.Bc(1,e,n),a=[oy(e,r,n)],u=[i];if(o.length%2!=0)throw new Ar(Dr.INVALID_ARGUMENT,"Function "+e+"() needs to be called with an even number of arguments that alternate between field names and values.");for(var c=0;c<o.length;c+=2)a.push(oy(e,o[c])),u.push(o[c+1]);for(var h,l,f,d=[],p=Ri.empty(),y=a.length-1;0<=y;--y)cy(d,a[y])||(h=a[y],l=m(l=u[y]),f=s.kc(h),l instanceof Fp?d.push(h):null!=(f=ey(l,f))&&(d.push(h),p.set(h,f)));i=new ei(d);return new Tp(p,i,s.fieldTransforms)}function ty(t,e,n,r){return void 0===r&&(r=!1),ey(n,t.Bc(r?4:3,e))}function ey(s,t){if(ry(s=m(s)))return iy("Unsupported field value:",t,s),ny(s,t);if(s instanceof bp)return function(t,e){if(!kp(e.Dc))throw e.$c(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.$c(t._methodName+"() is not currently supported inside arrays");t=t._toFieldTransform(e);t&&e.fieldTransforms.push(t)}(s,t),null;if(void 0===s&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.xc&&4!==t.Dc)throw t.$c("Nested arrays are not supported");return function(t){for(var e=[],n=0,r=0,i=s;r<i.length;r++){var o=ey(i[r],t.Oc(n));null==o&&(o={nullValue:"NULL_VALUE"}),e.push(o),n++}return{arrayValue:{values:e}}}(t)}return function(t,e){if(null===(t=m(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Po(e.R,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){var n=Kr.fromDate(t);return{timestampValue:oa(e.R,n)}}if(t instanceof Kr)return n=new Kr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3)),{timestampValue:oa(e.R,n)};if(t instanceof wp)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof vp)return{bytesValue:sa(e.R,t._byteString)};if(t instanceof Hd){var n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.$c("Document reference is for database "+r.projectId+"/"+r.database+" but should be for database "+n.projectId+"/"+n.database);return{referenceValue:ua(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.$c("Unsupported field value: "+Bd(t))}(s,t)}function ny(t,n){var r={};return Yr(t)?n.path&&0<n.path.length&&n.fieldMask.push(n.path):Wr(t,function(t,e){e=ey(e,n.Nc(t));null!=e&&(r[t]=e)}),{mapValue:{fields:r}}}function ry(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Kr||t instanceof wp||t instanceof vp||t instanceof Hd||t instanceof bp)}function iy(t,e,n){if(!ry(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){n=Bd(n);throw"an object"===n?e.$c(t+" a custom object"):e.$c(t+" "+n)}var r}function oy(t,e,n){if((e=m(e))instanceof mp)return e._internalPath;if("string"==typeof e)return ay(t,e);throw uy("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}var sy=new RegExp("[~\\*/\\[\\]]");function ay(e,n,r){if(0<=n.search(sy))throw uy("Invalid field path ("+n+"). Paths must not contain '~', '*', '/', '[', or ']'",e,!1,void 0,r);try{return(new(mp.bind.apply(mp,s([void 0],n.split(".")))))._internalPath}catch(t){throw uy("Invalid field path ("+n+"). Paths must not be empty, begin with '.', end with '.', or contain '..'",e,!1,void 0,r)}}function uy(t,e,n,r,i){var o=r&&!r.isEmpty(),s=void 0!==i,e="Function "+e+"() called with invalid data";n&&(e+=" (via `toFirestore()`)");n="";return(o||s)&&(n+=" (found",o&&(n+=" in field "+r),s&&(n+=" in document "+i),n+=")"),new Ar(Dr.INVALID_ARGUMENT,(e+=". ")+t+n)}function cy(t,e){return t.some(function(t){return t.isEqual(e)})}var hy,ly=(Object.defineProperty(py.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!1,configurable:!0}),Object.defineProperty(py.prototype,"ref",{get:function(){return new Hd(this._firestore,this._converter,this._key)},enumerable:!1,configurable:!0}),py.prototype.exists=function(){return null!==this._document},py.prototype.data=function(){if(this._document){if(this._converter){var t=new fy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.toProto())}},py.prototype.get=function(t){if(this._document){t=this._document.data.field(yy("DocumentSnapshot.get",t));if(null!==t)return this._userDataWriter.convertValue(t)}},py),fy=(n(dy,hy=ly),dy.prototype.data=function(){return hy.prototype.data.call(this)},dy);function dy(){return null!==hy&&hy.apply(this,arguments)||this}function py(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}function yy(t,e){return"string"==typeof e?ay(t,e):(e instanceof mp?e:e._delegate)._internalPath}var gy,my,vy=(Sy.prototype.isEqual=function(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache},Sy),by=(n(_y,my=ly),_y.prototype.exists=function(){return my.prototype.exists.call(this)},_y.prototype.data=function(t){if(void 0===t&&(t={}),this._document){if(this._converter){var e=new wy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.toProto(),t.serverTimestamps)}},_y.prototype.get=function(t,e){if(void 0===e&&(e={}),this._document){t=this._document.data.field(yy("DocumentSnapshot.get",t));if(null!==t)return this._userDataWriter.convertValue(t,e.serverTimestamps)}},_y),wy=(n(Ty,gy=by),Ty.prototype.data=function(t){return void 0===t&&(t={}),gy.prototype.data.call(this,t)},Ty),Iy=(Object.defineProperty(Ey.prototype,"docs",{get:function(){var e=[];return this.forEach(function(t){return e.push(t)}),e},enumerable:!1,configurable:!0}),Object.defineProperty(Ey.prototype,"size",{get:function(){return this._snapshot.docs.size},enumerable:!1,configurable:!0}),Object.defineProperty(Ey.prototype,"empty",{get:function(){return 0===this.size},enumerable:!1,configurable:!0}),Ey.prototype.forEach=function(e,n){var r=this;this._snapshot.docs.forEach(function(t){e.call(n,new wy(r._firestore,r._userDataWriter,t.key,t,new vy(r._snapshot.mutatedKeys.has(t.key),r._snapshot.fromCache),r.query._converter))})},Ey.prototype.docChanges=function(t){t=!!(t=void 0===t?{}:t).includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ar(Dr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,e){if(i._snapshot.oldDocs.isEmpty()){var n=0;return i._snapshot.docChanges.map(function(t){var e=new wy(i._firestore,i._userDataWriter,t.doc.key,t.doc,new vy(i._snapshot.mutatedKeys.has(t.doc.key),i._snapshot.fromCache),i.query._converter);return t.doc,{type:"added",doc:e,oldIndex:-1,newIndex:n++}})}var o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(function(t){return e||3!==t.type}).map(function(t){var e=new wy(i._firestore,i._userDataWriter,t.doc.key,t.doc,new vy(i._snapshot.mutatedKeys.has(t.doc.key),i._snapshot.fromCache),i.query._converter),n=-1,r=-1;return 0!==t.type&&(n=o.indexOf(t.doc.key),o=o.delete(t.doc.key)),1!==t.type&&(r=(o=o.add(t.doc)).indexOf(t.doc.key)),{type:function(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}(t.type),doc:e,oldIndex:n,newIndex:r}})}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges},Ey);function Ey(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new vy(r.hasPendingWrites,r.fromCache),this.query=n}function Ty(){return null!==gy&&gy.apply(this,arguments)||this}function _y(t,e,n,r,i,o){var s=this;return(s=my.call(this,t,e,n,r,o)||this)._firestore=t,s._firestoreImpl=t,s.metadata=i,s}function Sy(t,e){this.hasPendingWrites=t,this.fromCache=e}function Ny(t,e){return t instanceof by&&e instanceof by?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Iy&&e instanceof Iy&&t._firestore===e._firestore&&ip(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}function Dy(t){if(Io(t)&&0===t.explicitOrderBy.length)throw new Ar(Dr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}Te=function(){};function Ay(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r=0,i=e;r<i.length;r++)t=i[r]._apply(t);return t}var ky,Cy,Ry,xy,Oy,Ly=(n(Ky,Oy=Te),Ky.prototype._apply=function(t){var e=Lp(t.firestore),e=function(t,e,n,r,i,o){if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid Query. You can't perform '"+i+"' queries on FieldPath.documentId().");if("in"===i||"not-in"===i){zy(o,i);for(var s=[],a=0,u=o;a<u.length;a++){var c=u[a];s.push(Qy(n,t,c))}h={arrayValue:{values:s}}}else h=Qy(n,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||zy(o,i),h=ty(e,"where",o,"in"===i||"not-in"===i);var h=Bi.create(r,i,h);return function(t,e){if(e.g()){var n=To(t);if(null!==n&&!n.isEqual(e.field))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '"+n.toString()+"' and '"+e.field.toString()+"'");n=Eo(t);null!==n&&Hy(0,e.field,n)}t=function(t,e){for(var n=0,r=t.filters;n<r.length;n++){var i=r[n];if(0<=e.indexOf(i.op))return i.op}return null}(t,function(){switch(e.op){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}());if(null!==t)throw t===e.op?new Ar(Dr.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '"+e.op.toString()+"' filter."):new Ar(Dr.INVALID_ARGUMENT,"Invalid query. You cannot use '"+e.op.toString()+"' filters with '"+t.toString()+"' filters.")}(t,h),h}(t._query,e,t.firestore._databaseId,this.Qc,this.Kc,this.jc);return new Wd(t.firestore,t._converter,(t=t._query,e=t.filters.concat([e]),new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),e,t.limit,t.limitType,t.startAt,t.endAt)))},Ky),Py=(n(jy,xy=Te),jy.prototype._apply=function(t){var e=function(t,e,n){if(null!==t.startAt)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");var r=new po(e,n);return e=r,null!==Eo(n=t)||null!==(t=To(n))&&Hy(0,t,e.field),r}(t._query,this.Qc,this.Wc);return new Wd(t.firestore,t._converter,(t=t._query,e=t.explicitOrderBy.concat([e]),new mo(t.path,t.collectionGroup,e,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)))},jy),My=(n(By,Ry=Te),By.prototype._apply=function(t){return new Wd(t.firestore,t._converter,Do(t._query,this.Gc,this.zc))},By),Fy=(n(qy,Cy=Te),qy.prototype._apply=function(t){var e=Gy(t,this.type,this.Hc,this.Jc);return new Wd(t.firestore,t._converter,(t=t._query,e=e,new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)))},qy),Vy=(n(Uy,ky=Te),Uy.prototype._apply=function(t){var e=Gy(t,this.type,this.Hc,this.Jc);return new Wd(t.firestore,t._converter,(t=t._query,e=e,new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)))},Uy);function Uy(t,e,n){var r=this;return(r=ky.call(this)||this).type=t,r.Hc=e,r.Jc=n,r}function qy(t,e,n){var r=this;return(r=Cy.call(this)||this).type=t,r.Hc=e,r.Jc=n,r}function By(t,e,n){var r=this;return(r=Ry.call(this)||this).type=t,r.Gc=e,r.zc=n,r}function jy(t,e){var n=this;return(n=xy.call(this)||this).Qc=t,n.Wc=e,n.type="orderBy",n}function Ky(t,e,n){var r=this;return(r=Oy.call(this)||this).Qc=t,r.Kc=e,r.jc=n,r.type="where",r}function Gy(t,c,e,n){if(e[0]=m(e[0]),e[0]instanceof ly)return function(t,e,n,r){if(!n)throw new Ar(Dr.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for "+c+"().");for(var i=[],o=0,s=So(t);o<s.length;o++){var a=s[o];if(a.field.isKeyField())i.push(Si(e,n.key));else{var u=n.data.field(a.field);if(fi(u))throw new Ar(Dr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===u){a=a.field.canonicalString();throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '"+a+"' (used as the orderBy) does not exist.")}i.push(u)}}return new ao(i,r)}(t._query,t.firestore._databaseId,e[0]._document,n);var r=Lp(t.firestore);return function(t,e,n,r,i,o){var s=t.explicitOrderBy;if(i.length>s.length)throw new Ar(Dr.INVALID_ARGUMENT,"Too many arguments provided to "+r+"(). The number of arguments must be less than or equal to the number of orderBy() clauses");for(var a=[],u=0;u<i.length;u++){var c=i[u];if(s[u].field.isKeyField()){if("string"!=typeof c)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in "+r+"(), but got a "+typeof c);if(!_o(t)&&-1!==c.indexOf("/"))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to "+r+"() must be a plain document ID, but '"+c+"' contains a slash.");var h=t.path.child($r.fromString(c));if(!mi.isDocumentKey(h))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to "+r+"() must result in a valid document path, but '"+h+"' is not because it contains an odd number of segments.");h=new mi(h);a.push(Si(e,h))}else{c=ty(n,r,c);a.push(c)}}return new ao(a,o)}(t._query,t.firestore._databaseId,r,c,e,n)}function Qy(t,e,n){if("string"==typeof(n=m(n))){if(""===n)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!_o(e)&&-1!==n.indexOf("/"))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '"+n+"' contains a '/' character.");e=e.path.child($r.fromString(n));if(!mi.isDocumentKey(e))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '"+e+"' is not because it has an odd number of segments ("+e.length+").");return Si(t,new mi(e))}if(n instanceof Hd)return Si(t,n._key);throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: "+Bd(n)+".")}function zy(t,e){if(!Array.isArray(t)||0===t.length)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '"+e.toString()+"' filters.");if(10<t.length)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters support a maximum of 10 elements in the value array.")}function Hy(t,e,n){if(!n.isEqual(e))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '"+e.toString()+"' and so you must also use '"+e.toString()+"' as your first argument to orderBy(), but your first orderBy() is on field '"+n.toString()+"' instead.")}Wy.prototype.convertValue=function(t,e){switch(void 0===e&&(e="none"),bi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return hi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(li(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Mr()}},Wy.prototype.convertObject=function(t,n){var r=this,i={};return Wr(t.fields||{},function(t,e){i[t]=r.convertValue(e,n)}),i},Wy.prototype.convertGeoPoint=function(t){return new wp(hi(t.latitude),hi(t.longitude))},Wy.prototype.convertArray=function(t,e){var n=this;return(t.values||[]).map(function(t){return n.convertValue(t,e)})},Wy.prototype.convertServerTimestamp=function(t,e){switch(e){case"previous":var n=function t(e){e=e.mapValue.fields.__previous_value__;return fi(e)?t(e):e}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(di(t));default:return null}},Wy.prototype.convertTimestamp=function(t){t=ci(t);return new Kr(t.seconds,t.nanos)},Wy.prototype.convertDocumentKey=function(t,e){var n=$r.fromString(t);Fr(ka(n));t=new Sd(n.get(1),n.get(3)),n=new mi(n.popFirst(5));return t.isEqual(e)||Or("Document "+n+" contains a document reference within a different database ("+t.projectId+"/"+t.database+") which is not supported. It will be treated as a reference in the current database ("+e.projectId+"/"+e.database+") instead."),n},I=Wy;function Wy(){}function Yy(t,e,n){return t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}var Xy,Jy=(n(tg,Xy=I),tg.prototype.convertBytes=function(t){return new vp(t)},tg.prototype.convertReference=function(t){t=this.convertDocumentKey(t,this.firestore._databaseId);return new Hd(this.firestore,null,t)},tg),$y=(Zy.prototype.set=function(t,e,n){this._verifyNotCommitted();t=eg(t,this._firestore),e=Yy(t._converter,e,n),n=Pp(this._dataReader,"WriteBatch.set",t._key,e,null!==t._converter,n);return this._mutations.push(n.toMutation(t._key,es.none())),this},Zy.prototype.update=function(t,e,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];this._verifyNotCommitted();t=eg(t,this._firestore),e="string"==typeof(e=m(e))||e instanceof mp?Zp(this._dataReader,"WriteBatch.update",t._key,e,n,r):$p(this._dataReader,"WriteBatch.update",t._key,e);return this._mutations.push(e.toMutation(t._key,es.exists(!0))),this},Zy.prototype.delete=function(t){this._verifyNotCommitted();t=eg(t,this._firestore);return this._mutations=this._mutations.concat(new ws(t._key,es.none())),this},Zy.prototype.commit=function(){return this._verifyNotCommitted(),this._committed=!0,0<this._mutations.length?this._commitHandler(this._mutations):Promise.resolve()},Zy.prototype._verifyNotCommitted=function(){if(this._committed)throw new Ar(Dr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")},Zy);function Zy(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Lp(t)}function tg(t){var e=this;return(e=Xy.call(this)||this).firestore=t,e}function eg(t,e){if((t=m(t)).firestore!==e)throw new Ar(Dr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}var ng,rg=(n(ig,ng=I),ig.prototype.convertBytes=function(t){return new vp(t)},ig.prototype.convertReference=function(t){t=this.convertDocumentKey(t,this.firestore._databaseId);return new Hd(this.firestore,null,t)},ig);function ig(t){var e=this;return(e=ng.call(this)||this).firestore=t,e}function og(t,e,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];t=jd(t,Hd);var o=jd(t.firestore,hp),s=Lp(o);return ag(o,[("string"==typeof(e=m(e))||e instanceof mp?Zp(s,"updateDoc",t._key,e,n,r):$p(s,"updateDoc",t._key,e)).toMutation(t._key,es.exists(!0))])}function sg(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e=m(e);var r={includeMetadataChanges:!1},i=0;"object"!=typeof n[i]||ap(n[i])||(r=n[i],i++);var o,s,a,u,c,h,l={includeMetadataChanges:r.includeMetadataChanges};return ap(n[i])&&(o=n[i],n[i]=null===(r=o.next)||void 0===r?void 0:r.bind(o),n[i+1]=null===(r=o.error)||void 0===r?void 0:r.bind(o),n[i+2]=null===(r=o.complete)||void 0===r?void 0:r.bind(o)),e instanceof Hd?(a=jd(e.firestore,hp),u=bo(e._key.path),h={next:function(t){n[i]&&n[i](ug(a,e,t))},error:n[i+1],complete:n[i+2]}):(s=jd(e,Wd),a=jd(s.firestore,hp),u=s._query,c=new rg(a),h={next:function(t){n[i]&&n[i](new Iy(a,c,s,t))},error:n[i+1],complete:n[i+2]},Dy(e._query)),function(n,t,e){var r=this,i=new nd(h),o=new af(t,i,e);return n.asyncQueue.enqueueAndForget(function(){return y(r,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=rf,[4,wd(n)];case 1:return[2,e.apply(void 0,[t.sent(),o])]}})})}),function(){i.Wo(),n.asyncQueue.enqueueAndForget(function(){return y(r,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=of,[4,wd(n)];case 1:return[2,e.apply(void 0,[t.sent(),o])]}})})})}}(dp(a),u,l)}function ag(t,e){return function(n,r){var t=this,i=new Za;return n.asyncQueue.enqueueAndForget(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=Sf,[4,bd(n)];case 1:return[2,e.apply(void 0,[t.sent(),r,i])]}})})}),i.promise}(dp(t),e)}function ug(t,e,n){var r=n.docs.get(e._key),i=new rg(t);return new by(t,i,e._key,r,new vy(n.hasPendingWrites,n.fromCache),e._converter)}var cg,hg=(fg.prototype.get=function(t){var e=this,n=eg(t,this._firestore),r=new Jy(this._firestore);return this._transaction.lookup([n._key]).then(function(t){if(!t||1!==t.length)return Mr();t=t[0];if(t.isFoundDocument())return new ly(e._firestore,r,t.key,t,n._converter);if(t.isNoDocument())return new ly(e._firestore,r,n._key,null,n._converter);throw Mr()})},fg.prototype.set=function(t,e,n){t=eg(t,this._firestore),e=Yy(t._converter,e,n),n=Pp(this._dataReader,"Transaction.set",t._key,e,null!==t._converter,n);return this._transaction.set(t._key,n),this},fg.prototype.update=function(t,e,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];t=eg(t,this._firestore),e="string"==typeof(e=m(e))||e instanceof mp?Zp(this._dataReader,"Transaction.update",t._key,e,n,r):$p(this._dataReader,"Transaction.update",t._key,e);return this._transaction.update(t._key,e),this},fg.prototype.delete=function(t){t=eg(t,this._firestore);return this._transaction.delete(t._key),this},n(lg,cg=fg),lg.prototype.get=function(t){var e=this,n=eg(t,this._firestore),r=new rg(this._firestore);return cg.prototype.get.call(this,t).then(function(t){return new by(e._firestore,r,n._key,t._document,new vy(!1,!1),n._converter)})},lg);function lg(t,e){var n=this;return(n=cg.call(this,t,e)||this)._firestore=t,n}function fg(t,e){this._firestore=t,this._transaction=e,this._dataReader=Lp(t)}function dg(){if("undefined"==typeof Uint8Array)throw new Ar(Dr.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")}function pg(){if("undefined"==typeof atob)throw new Ar(Dr.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")}var yg,gg=(Tg.fromBase64String=function(t){return pg(),new Tg(vp.fromBase64String(t))},Tg.fromUint8Array=function(t){return dg(),new Tg(vp.fromUint8Array(t))},Tg.prototype.toBase64=function(){return pg(),this._delegate.toBase64()},Tg.prototype.toUint8Array=function(){return dg(),this._delegate.toUint8Array()},Tg.prototype.isEqual=function(t){return this._delegate.isEqual(t._delegate)},Tg.prototype.toString=function(){return"Blob(base64: "+this.toBase64()+")"},Tg),mg=(Eg.prototype.enableIndexedDbPersistence=function(t,e){return function(t,e){gp(t=jd(t,hp));var n=dp(t),r=t._freezeSettings(),t=new Xf;return yp(n,t,new Wf(t,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}(t._delegate,{forceOwnership:e})},Eg.prototype.enableMultiTabIndexedDbPersistence=function(t){return function(t){gp(t=jd(t,hp));var e=dp(t),n=t._freezeSettings(),t=new Xf;return yp(e,t,new Yf(t,n.cacheSizeBytes))}(t._delegate)},Eg.prototype.clearIndexedDbPersistence=function(t){return function(n){var t=this;if(n._initialized&&!n._terminated)throw new Ar(Dr.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");var r=new Za;return n._queue.enqueueAndForgetEvenWhileRestricted(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,function(n){return y(this,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return nu.yt()?(e=n+"main",[4,nu.delete(e)]):[2,Promise.resolve()];case 1:return t.sent(),[2]}})})}(Kc(n._databaseId,n._persistenceKey))];case 1:return t.sent(),r.resolve(),[3,3];case 2:return e=t.sent(),r.reject(e),[3,3];case 3:return[2]}})})}),r.promise}(t._delegate)},Eg),vg=(Object.defineProperty(Ig.prototype,"_databaseId",{get:function(){return this._delegate._databaseId},enumerable:!1,configurable:!0}),Ig.prototype.settings=function(t){t.merge&&delete(t=Object.assign(Object.assign({},this._delegate._getSettings()),t)).merge,this._delegate._setSettings(t)},Ig.prototype.useEmulator=function(t,e){var n,r;n=this._delegate,r=t,t=e,"firestore.googleapis.com"!==(e=(n=jd(n,zd))._getSettings()).host&&e.host!==r&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},e),{host:r+":"+t,ssl:!1}))},Ig.prototype.enableNetwork=function(){return function(i){var t=this;return i.asyncQueue.enqueue(function(){return y(t,void 0,void 0,function(){var n,r;return g(this,function(t){switch(t.label){case 0:return[4,gd(i)];case 1:return n=t.sent(),[4,vd(i)];case 2:return r=t.sent(),[2,(n.setNetworkEnabled(!0),(e=r).$r.delete(0),Dl(e))]}var e})})})}(dp(jd(this._delegate,hp)))},Ig.prototype.disableNetwork=function(){return function(r){var t=this;return r.asyncQueue.enqueue(function(){return y(t,void 0,void 0,function(){var e,n;return g(this,function(t){switch(t.label){case 0:return[4,gd(r)];case 1:return e=t.sent(),[4,vd(r)];case 2:return n=t.sent(),[2,(e.setNetworkEnabled(!1),function(n){return y(this,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return(e=n).$r.add(0),[4,Al(e)];case 1:return t.sent(),e.Br.set("Offline"),[2]}})})}(n))]}})})})}(dp(jd(this._delegate,hp)))},Ig.prototype.enablePersistence=function(t){var e=!1,n=!1;return t&&Vd("synchronizeTabs",e=!!t.synchronizeTabs,"experimentalForceOwningTab",n=!!t.experimentalForceOwningTab),e?this.Yc.enableMultiTabIndexedDbPersistence(this):this.Yc.enableIndexedDbPersistence(this,n)},Ig.prototype.clearPersistence=function(){return this.Yc.clearIndexedDbPersistence(this)},Ig.prototype.terminate=function(){return this.Xc&&(this.Xc._removeServiceInstance("firestore"),this.Xc._removeServiceInstance("firestore-exp")),this._delegate._delete()},Ig.prototype.waitForPendingWrites=function(){return function(n){var t=this,r=new Za;return n.asyncQueue.enqueueAndForget(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=kf,[4,bd(n)];case 1:return[2,e.apply(void 0,[t.sent(),r])]}})})}),r.promise}(dp(jd(this._delegate,hp)))},Ig.prototype.onSnapshotsInSync=function(t){return e=this._delegate,t=t,function(n,t){var e=this,r=new nd(t);return n.asyncQueue.enqueueAndForget(function(){return y(e,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=function(t,e){t.Gr.add(e),e.next()},[4,wd(n)];case 1:return[2,e.apply(void 0,[t.sent(),r])]}})})}),function(){r.Wo(),n.asyncQueue.enqueueAndForget(function(){return y(e,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=function(t,e){t.Gr.delete(e)},[4,wd(n)];case 1:return[2,e.apply(void 0,[t.sent(),r])]}})})})}}(dp(jd(e,hp)),ap(t)?t:{next:t});var e},Object.defineProperty(Ig.prototype,"app",{get:function(){if(!this.Xc)throw new Ar(Dr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this.Xc},enumerable:!1,configurable:!0}),Ig.prototype.collection=function(t){try{return new jg(this,ep(this._delegate,t))}catch(t){throw xg(t,"collection()","Firestore.collection()")}},Ig.prototype.doc=function(t){try{return new Cg(this,np(this._delegate,t))}catch(t){throw xg(t,"doc()","Firestore.doc()")}},Ig.prototype.collectionGroup=function(t){try{return new Ug(this,function(t,e){if(t=jd(t,zd),Md("collectionGroup","collection id",e),0<=e.indexOf("/"))throw new Ar(Dr.INVALID_ARGUMENT,"Invalid collection ID '"+e+"' passed to function collectionGroup(). Collection IDs must not contain '/'.");return new Wd(t,null,(e=e,new mo($r.emptyPath(),e)))}(this._delegate,t))}catch(t){throw xg(t,"collectionGroup()","Firestore.collectionGroup()")}},Ig.prototype.runTransaction=function(e){var n,r=this;return function(n,r){var t=this,i=new Za;return n.asyncQueue.enqueueAndForget(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return[4,yd(n).then(function(t){return t.datastore})];case 1:return e=t.sent(),new od(n.asyncQueue,e,r,i).run(),[2]}})})}),i.promise}(dp(n=this._delegate),function(t){return t=new hg(n,t),e(new _g(r,t))})},Ig.prototype.batch=function(){var e=this;return dp(this._delegate),new Sg(new $y(this._delegate,function(t){return ag(e._delegate,t)}))},Ig.prototype.loadBundle=function(t){throw new Ar(Dr.FAILED_PRECONDITION,'"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?')},Ig.prototype.namedQuery=function(t){throw new Ar(Dr.FAILED_PRECONDITION,'"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?')},Ig),bg=(n(wg,yg=I),wg.prototype.convertBytes=function(t){return new gg(new vp(t))},wg.prototype.convertReference=function(t){t=this.convertDocumentKey(t,this.firestore._databaseId);return Cg.Zc(t,this.firestore,null)},wg);function wg(t){var e=this;return(e=yg.call(this)||this).firestore=t,e}function Ig(t,e,n){var r=this;this._delegate=e,this.Yc=n,this.INTERNAL={delete:function(){return r.terminate()}},t instanceof Sd||(this.Xc=t)}function Eg(){}function Tg(t){this._delegate=t}var _g=(kg.prototype.get=function(t){var e=this,n=Yg(t);return this._delegate.get(n).then(function(t){return new Fg(e._firestore,new by(e._firestore._delegate,e._userDataWriter,t._key,t._document,t.metadata,n._converter))})},kg.prototype.set=function(t,e,n){t=Yg(t);return n?(Fd("Transaction.set",n),this._delegate.set(t,e,n)):this._delegate.set(t,e),this},kg.prototype.update=function(t,e,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];var o=Yg(t);return 2===arguments.length?this._delegate.update(o,e):(t=this._delegate).update.apply(t,s([o,e,n],r)),this},kg.prototype.delete=function(t){t=Yg(t);return this._delegate.delete(t),this},kg),Sg=(Ag.prototype.set=function(t,e,n){t=Yg(t);return n?(Fd("WriteBatch.set",n),this._delegate.set(t,e,n)):this._delegate.set(t,e),this},Ag.prototype.update=function(t,e,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];var o=Yg(t);return 2===arguments.length?this._delegate.update(o,e):(t=this._delegate).update.apply(t,s([o,e,n],r)),this},Ag.prototype.delete=function(t){t=Yg(t);return this._delegate.delete(t),this},Ag.prototype.commit=function(){return this._delegate.commit()},Ag),Ng=(Dg.prototype.fromFirestore=function(t,e){t=new wy(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new Vg(this._firestore,t),null!=e?e:{})},Dg.prototype.toFirestore=function(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)},Dg.tu=function(t,e){var n=Dg.eu,r=n.get(t);r||(r=new WeakMap,n.set(t,r));n=r.get(e);return n||(n=new Dg(t,new bg(t),e),r.set(e,n)),n},Dg);function Dg(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}function Ag(t){this._delegate=t}function kg(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new bg(t)}Ng.eu=new WeakMap;var Cg=(Rg.nu=function(t,e,n){if(t.length%2!=0)throw new Ar(Dr.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+t.canonicalString()+" has "+t.length);return new Rg(e,new Hd(e._delegate,n,new mi(t)))},Rg.Zc=function(t,e,n){return new Rg(e,new Hd(e._delegate,n,t))},Object.defineProperty(Rg.prototype,"id",{get:function(){return this._delegate.id},enumerable:!1,configurable:!0}),Object.defineProperty(Rg.prototype,"parent",{get:function(){return new jg(this.firestore,this._delegate.parent)},enumerable:!1,configurable:!0}),Object.defineProperty(Rg.prototype,"path",{get:function(){return this._delegate.path},enumerable:!1,configurable:!0}),Rg.prototype.collection=function(t){try{return new jg(this.firestore,ep(this._delegate,t))}catch(t){throw xg(t,"collection()","DocumentReference.collection()")}},Rg.prototype.isEqual=function(t){return(t=m(t))instanceof Hd&&rp(this._delegate,t)},Rg.prototype.set=function(t,e){e=Fd("DocumentReference.set",e);try{return function(t,e,n){t=jd(t,Hd);var r=jd(t.firestore,hp),e=Yy(t._converter,e,n);return ag(r,[Pp(Lp(r),"setDoc",t._key,e,null!==t._converter,n).toMutation(t._key,es.none())])}(this._delegate,t,e)}catch(t){throw xg(t,"setDoc()","DocumentReference.set()")}},Rg.prototype.update=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];try{return 1===arguments.length?og(this._delegate,t):og.apply(void 0,s([this._delegate,t,e],n))}catch(t){throw xg(t,"updateDoc()","DocumentReference.update()")}},Rg.prototype.delete=function(){return ag(jd((t=this._delegate).firestore,hp),[new ws(t._key,es.none())]);var t},Rg.prototype.onSnapshot=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=Og(t),i=Lg(t,function(t){return new Fg(e.firestore,new by(e.firestore._delegate,e._userDataWriter,t._key,t._document,t.metadata,e._delegate._converter))});return sg(this._delegate,r,i)},Rg.prototype.get=function(t){var e=this;return("cache"===(null==t?void 0:t.source)?function(e){e=jd(e,Hd);var n=jd(e.firestore,hp),t=dp(n),r=new rg(n);return function(n,r){var t=this,i=new Za;return n.asyncQueue.enqueueAndForget(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=function(o,s,a){return y(this,void 0,void 0,function(){var r,i;return g(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,(e=s,(n=o).persistence.runTransaction("read document","readonly",function(t){return n.Mn.mn(t,e)}))];case 1:return(i=t.sent()).isFoundDocument()?a.resolve(i):i.isNoDocument()?a.resolve(null):a.reject(new Ar(Dr.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")),[3,3];case 2:return r=t.sent(),i=Wl(r,"Failed to get document '"+s+" from cache"),a.reject(i),[3,3];case 3:return[2]}var e,n})})},[4,md(n)];case 1:return[2,e.apply(void 0,[t.sent(),r,i])]}})})}),i.promise}(t,e._key).then(function(t){return new by(n,r,e._key,t,new vy(null!==t&&t.hasLocalMutations,!0),e._converter)})}:"server"===(null==t?void 0:t.source)?function(e){e=jd(e,Hd);var n=jd(e.firestore,hp);return Id(dp(n),e._key,{source:"server"}).then(function(t){return ug(n,e,t)})}:function(e){e=jd(e,Hd);var n=jd(e.firestore,hp);return Id(dp(n),e._key).then(function(t){return ug(n,e,t)})})(this._delegate).then(function(t){return new Fg(e.firestore,new by(e.firestore._delegate,e._userDataWriter,t._key,t._document,t.metadata,e._delegate._converter))})},Rg.prototype.withConverter=function(t){return new Rg(this.firestore,t?this._delegate.withConverter(Ng.tu(this.firestore,t)):this._delegate.withConverter(null))},Rg);function Rg(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new bg(t)}function xg(t,e,n){return t.message=t.message.replace(e,n),t}function Og(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];if("object"==typeof r&&!ap(r))return r}return{}}function Lg(t,e){var n;return{next:function(t){n.next&&n.next(e(t))},error:null===(t=(n=ap(t[0])?t[0]:ap(t[1])?t[1]:"function"==typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]}).error)||void 0===t?void 0:t.bind(n),complete:null===(t=n.complete)||void 0===t?void 0:t.bind(n)}}var Pg,Mg,Fg=(Object.defineProperty(Wg.prototype,"ref",{get:function(){return new Cg(this._firestore,this._delegate.ref)},enumerable:!1,configurable:!0}),Object.defineProperty(Wg.prototype,"id",{get:function(){return this._delegate.id},enumerable:!1,configurable:!0}),Object.defineProperty(Wg.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(Wg.prototype,"exists",{get:function(){return this._delegate.exists()},enumerable:!1,configurable:!0}),Wg.prototype.data=function(t){return this._delegate.data(t)},Wg.prototype.get=function(t,e){return this._delegate.get(t,e)},Wg.prototype.isEqual=function(t){return Ny(this._delegate,t._delegate)},Wg),Vg=(n(Hg,Mg=Fg),Hg.prototype.data=function(t){return this._delegate.data(t)},Hg),Ug=(zg.prototype.where=function(t,e,n){try{return new zg(this.firestore,Ay(this._delegate,(r=n,i=e,o=yy("where",t),new Ly(o,i,r))))}catch(t){throw xg(t,/(orderBy|where)\(\)/,"Query.$1()")}var r,i,o},zg.prototype.orderBy=function(t,e){try{return new zg(this.firestore,Ay(this._delegate,(n=void 0===e?"asc":e,r=yy("orderBy",t),new Py(r,n))))}catch(t){throw xg(t,/(orderBy|where)\(\)/,"Query.$1()")}var n,r},zg.prototype.limit=function(t){try{return new zg(this.firestore,Ay(this._delegate,(Kd("limit",e=t),new My("limit",e,"F"))))}catch(t){throw xg(t,"limit()","Query.limit()")}var e},zg.prototype.limitToLast=function(t){try{return new zg(this.firestore,Ay(this._delegate,(Kd("limitToLast",e=t),new My("limitToLast",e,"L"))))}catch(t){throw xg(t,"limitToLast()","Query.limitToLast()")}var e},zg.prototype.startAt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return new zg(this.firestore,Ay(this._delegate,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Fy("startAt",t,!0)}.apply(void 0,t)))}catch(t){throw xg(t,"startAt()","Query.startAt()")}},zg.prototype.startAfter=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return new zg(this.firestore,Ay(this._delegate,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Fy("startAfter",t,!1)}.apply(void 0,t)))}catch(t){throw xg(t,"startAfter()","Query.startAfter()")}},zg.prototype.endBefore=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return new zg(this.firestore,Ay(this._delegate,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Vy("endBefore",t,!0)}.apply(void 0,t)))}catch(t){throw xg(t,"endBefore()","Query.endBefore()")}},zg.prototype.endAt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return new zg(this.firestore,Ay(this._delegate,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Vy("endAt",t,!1)}.apply(void 0,t)))}catch(t){throw xg(t,"endAt()","Query.endAt()")}},zg.prototype.isEqual=function(t){return ip(this._delegate,t._delegate)},zg.prototype.get=function(t){var e=this;return("cache"===(null==t?void 0:t.source)?function(e){e=jd(e,Wd);var n=jd(e.firestore,hp),t=dp(n),r=new rg(n);return function(n,r){var t=this,i=new Za;return n.asyncQueue.enqueueAndForget(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=function(i,o,s){return y(this,void 0,void 0,function(){var e,n,r;return g(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,ah(i,o,!0)];case 1:return r=t.sent(),e=new vf(o,r.Bn),n=e._o(r.documents),n=e.applyChanges(n,!1),s.resolve(n.snapshot),[3,3];case 2:return n=t.sent(),r=Wl(n,"Failed to execute query '"+o+" against cache"),s.reject(r),[3,3];case 3:return[2]}})})},[4,md(n)];case 1:return[2,e.apply(void 0,[t.sent(),r,i])]}})})}),i.promise}(t,e._query).then(function(t){return new Iy(n,r,e,t)})}:"server"===(null==t?void 0:t.source)?function(e){e=jd(e,Wd);var n=jd(e.firestore,hp),t=dp(n),r=new rg(n);return Ed(t,e._query,{source:"server"}).then(function(t){return new Iy(n,r,e,t)})}:function(e){e=jd(e,Wd);var n=jd(e.firestore,hp),t=dp(n),r=new rg(n);return Dy(e._query),Ed(t,e._query).then(function(t){return new Iy(n,r,e,t)})})(this._delegate).then(function(t){return new Bg(e.firestore,new Iy(e.firestore._delegate,e._userDataWriter,e._delegate,t._snapshot))})},zg.prototype.onSnapshot=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=Og(t),i=Lg(t,function(t){return new Bg(e.firestore,new Iy(e.firestore._delegate,e._userDataWriter,e._delegate,t._snapshot))});return sg(this._delegate,r,i)},zg.prototype.withConverter=function(t){return new zg(this.firestore,t?this._delegate.withConverter(Ng.tu(this.firestore,t)):this._delegate.withConverter(null))},zg),qg=(Object.defineProperty(Qg.prototype,"type",{get:function(){return this._delegate.type},enumerable:!1,configurable:!0}),Object.defineProperty(Qg.prototype,"doc",{get:function(){return new Vg(this._firestore,this._delegate.doc)},enumerable:!1,configurable:!0}),Object.defineProperty(Qg.prototype,"oldIndex",{get:function(){return this._delegate.oldIndex},enumerable:!1,configurable:!0}),Object.defineProperty(Qg.prototype,"newIndex",{get:function(){return this._delegate.newIndex},enumerable:!1,configurable:!0}),Qg),Bg=(Object.defineProperty(Gg.prototype,"query",{get:function(){return new Ug(this._firestore,this._delegate.query)},enumerable:!1,configurable:!0}),Object.defineProperty(Gg.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(Gg.prototype,"size",{get:function(){return this._delegate.size},enumerable:!1,configurable:!0}),Object.defineProperty(Gg.prototype,"empty",{get:function(){return this._delegate.empty},enumerable:!1,configurable:!0}),Object.defineProperty(Gg.prototype,"docs",{get:function(){var e=this;return this._delegate.docs.map(function(t){return new Vg(e._firestore,t)})},enumerable:!1,configurable:!0}),Gg.prototype.docChanges=function(t){var e=this;return this._delegate.docChanges(t).map(function(t){return new qg(e._firestore,t)})},Gg.prototype.forEach=function(e,n){var r=this;this._delegate.forEach(function(t){e.call(n,new Vg(r._firestore,t))})},Gg.prototype.isEqual=function(t){return Ny(this._delegate,t._delegate)},Gg),jg=(n(Kg,Pg=Ug),Object.defineProperty(Kg.prototype,"id",{get:function(){return this._delegate.id},enumerable:!1,configurable:!0}),Object.defineProperty(Kg.prototype,"path",{get:function(){return this._delegate.path},enumerable:!1,configurable:!0}),Object.defineProperty(Kg.prototype,"parent",{get:function(){var t=this._delegate.parent;return t?new Cg(this.firestore,t):null},enumerable:!1,configurable:!0}),Kg.prototype.doc=function(t){try{return new Cg(this.firestore,void 0===t?np(this._delegate):np(this._delegate,t))}catch(t){throw xg(t,"doc()","CollectionReference.doc()")}},Kg.prototype.add=function(t){var e,n,r,i=this;return e=this._delegate,n=t,t=jd(e.firestore,hp),r=np(e),n=Yy(e._converter,n),ag(t,[Pp(Lp(e.firestore),"addDoc",r._key,n,null!==e._converter,{}).toMutation(r._key,es.exists(!1))]).then(function(){return r}).then(function(t){return new Cg(i.firestore,t)})},Kg.prototype.isEqual=function(t){return rp(this._delegate,t._delegate)},Kg.prototype.withConverter=function(t){return new Kg(this.firestore,t?this._delegate.withConverter(Ng.tu(this.firestore,t)):this._delegate.withConverter(null))},Kg);function Kg(t,e){var n=this;return(n=Pg.call(this,t,e)||this).firestore=t,n._delegate=e,n}function Gg(t,e){this._firestore=t,this._delegate=e}function Qg(t,e){this._firestore=t,this._delegate=e}function zg(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new bg(t)}function Hg(){return null!==Mg&&Mg.apply(this,arguments)||this}function Wg(t,e){this._firestore=t,this._delegate=e}function Yg(t){return jd(t,Hd)}Jg.documentId=function(){return new Jg(ti.keyField().canonicalString())},Jg.prototype.isEqual=function(t){return(t=m(t))instanceof mp&&this._delegate._internalPath.isEqual(t._internalPath)},Te=Jg,Xg.serverTimestamp=function(){var t=new Gp("serverTimestamp");return t._methodName="FieldValue.serverTimestamp",new Xg(t)},Xg.delete=function(){var t=new Fp("deleteField");return t._methodName="FieldValue.delete",new Xg(t)},Xg.arrayUnion=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Qp("arrayUnion",t)}.apply(void 0,t);return n._methodName="FieldValue.arrayUnion",new Xg(n)},Xg.arrayRemove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new zp("arrayRemove",t)}.apply(void 0,t);return n._methodName="FieldValue.arrayRemove",new Xg(n)},Xg.increment=function(t){t=new Hp("increment",t);return t._methodName="FieldValue.increment",new Xg(t)},Xg.prototype.isEqual=function(t){return this._delegate.isEqual(t._delegate)},I=Xg;function Xg(t){this._delegate=t}function Jg(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._delegate=new(mp.bind.apply(mp,s([void 0],t)))}function $g(t){return e=this._delegate,s=t,n=dp(e=jd(e,hp)),t=new cp,function(n,t,r){var e,i=this,o=(e=s,t=ll(t),e=function(t){if(t instanceof Uint8Array)return ed(t,void 0);if(t instanceof ArrayBuffer)return ed(new Uint8Array(t),void 0);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof e?(new TextEncoder).encode(e):e),new rd(e,t));n.asyncQueue.enqueueAndForget(function(){return y(i,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=Gf,[4,bd(n)];case 1:return e.apply(void 0,[t.sent(),o,r]),[2]}})})})}(n,e._databaseId,t),t;var e,s,n}function Zg(t){var e=this,n=this._delegate,t=t;return function(n,r){var t=this;return n.asyncQueue.enqueue(function(){return y(t,void 0,void 0,function(){var e;return g(this,function(t){switch(t.label){case 0:return e=function(t,e){var n=t;return n.persistence.runTransaction("Get named query","readonly",function(t){return n.Qe.getNamedQuery(t,e)})},[4,md(n)];case 1:return[2,e.apply(void 0,[t.sent(),r])]}})})})}(dp(n=jd(n,hp)),t).then(function(t){return t?new Wd(n,null,t.query):null}).then(function(t){return t?new Ug(e,t):null})}var tm=(em.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},em.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},em.prototype.setServiceProps=function(t){return this.serviceProps=t,this},em.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},em);function em(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}var nm,rm,im={Firestore:vg,GeoPoint:wp,Timestamp:Kr,Blob:gg,Transaction:_g,WriteBatch:Sg,DocumentReference:Cg,DocumentSnapshot:Fg,Query:Ug,QueryDocumentSnapshot:Vg,QuerySnapshot:Bg,CollectionReference:jg,FieldPath:Te,FieldValue:I,setLogLevel:function(t){kr.setLogLevel(t)},CACHE_SIZE_UNLIMITED:-1};(nm=e.default).INTERNAL.registerComponent(new tm("firestore",function(t){var e=t.getProvider("app").getImmediate();return e=e,t=t.getProvider("auth-internal"),new vg(e,new hp(e,t),new mg)},"PUBLIC").setServiceProps(Object.assign({},im))),nm.registerVersion("@firebase/firestore","2.2.5"),(rm=vg).prototype.loadBundle=$g,rm.prototype.namedQuery=Zg}.apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-firestore.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./src/scripts/firebase-config.js":
/*!****************************************!*\
  !*** ./src/scripts/firebase-config.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../env */ "./env.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  apiKey: _env__WEBPACK_IMPORTED_MODULE_0__.default.API_KEY,
  authDomain: _env__WEBPACK_IMPORTED_MODULE_0__.default.AUTH_DOMAIN,
  projectId: _env__WEBPACK_IMPORTED_MODULE_0__.default.PROJECT_ID,
  storageBucket: _env__WEBPACK_IMPORTED_MODULE_0__.default.STORAGE_BUCKET,
  messagingSenderId: _env__WEBPACK_IMPORTED_MODULE_0__.default.MESSAGING_SENDER_ID,
  appId: _env__WEBPACK_IMPORTED_MODULE_0__.default.APP_ID,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./src/scripts/firebase-init.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase-config */ "./src/scripts/firebase-config.js");
/* harmony import */ var firebase_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firebase-firestore */ "./node_modules/firebase/firebase-firestore.js");
/* harmony import */ var firebase_firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firebase-auth */ "./node_modules/firebase/firebase-auth.js");
/* harmony import */ var firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_3__);





firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.default);

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth();
const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider();

const signedInSection = document.querySelector("#when-signed-out");
const signedOutSection = document.querySelector("#when-signed-in");
const signInBtn = document.querySelector("#sign-in-btn");
const signOutBtn = document.querySelector("#sign-out-btn");

signInBtn.addEventListener("click", () => {
  auth.signInWithPopup(provider);
});

signOutBtn.addEventListener("click", () => {
  auth.signOut();
});

const userNameElement = document.querySelector("#user-name");

auth.onAuthStateChanged((user) => {
  if (user) {
    signedInSection.hidden = false;
    signedOutSection.hidden = true;
    userNameElement.textContent = user.displayName;
  } else {
    signedInSection.hidden = false;
    signedOutSection.hidden = true;
    userNameElement.textContent = "no signed in user";
  }
});

})();

/******/ })()
;