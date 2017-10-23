requirejs.config({
    paths: { "angular-ui-utils": webjars.path("angular-ui-utils", "ui-utils") },
    shim: { "angular-ui-utils": [ "angular", "jquery" ] }
});
