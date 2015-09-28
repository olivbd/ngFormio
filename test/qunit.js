angular.module('ngFormio', ['formio'])
  .run([
    'Formio',
    function(
      Formio
    ) {
      QUnit.test( "Test URL capabilities", function(assert) {
        var tests = {
          'http://form.io/project/234234234234/form/23234234234234': {
            projectUrl: 'http://form.io/project/234234234234',
            projectsUrl: 'http://form.io/project',
            projectId: '234234234234',
            formsUrl: 'http://form.io/project/234234234234/form',
            formUrl: 'http://form.io/project/234234234234/form/23234234234234',
            formId: '23234234234234',
            actionsUrl: 'http://form.io/project/234234234234/form/23234234234234/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://form.io/project/234234234234/form/23234234234234/submission',
            submissionUrl: '',
            submissionId: '',
            query: ''
          },
          'http://form.io/form/23234234234234': {
            projectUrl: '',
            projectsUrl: 'http://form.io/project',
            projectId: '',
            formsUrl: 'http://form.io/form',
            formUrl: 'http://form.io/form/23234234234234',
            formId: '23234234234234',
            actionsUrl: 'http://form.io/form/23234234234234/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://form.io/form/23234234234234/submission',
            submissionUrl: '',
            submissionId: '',
            query: ''
          },
          'http://form.io/form/23234234234234/submission/982398220983': {
            projectUrl: '',
            projectsUrl: 'http://form.io/project',
            projectId: '',
            formsUrl: 'http://form.io/form',
            formUrl: 'http://form.io/form/23234234234234',
            formId: '23234234234234',
            actionsUrl: 'http://form.io/form/23234234234234/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://form.io/form/23234234234234/submission',
            submissionUrl: 'http://form.io/form/23234234234234/submission/982398220983',
            submissionId: '982398220983',
            query: ''
          },
          'http://form.io/form/23234234234234/action/234230987872': {
            projectUrl: '',
            projectsUrl: 'http://form.io/project',
            projectId: '',
            formsUrl: 'http://form.io/form',
            formUrl: 'http://form.io/form/23234234234234',
            formId: '23234234234234',
            actionsUrl: 'http://form.io/form/23234234234234/action',
            actionUrl: 'http://form.io/form/23234234234234/action/234230987872',
            actionId: '234230987872',
            submissionsUrl: 'http://form.io/form/23234234234234/submission',
            submissionUrl: '',
            submissionId: '',
            query: ''
          },
          'http://form.io/project/092934882/form/23234234234234/action/234230987872': {
            projectUrl: 'http://form.io/project/092934882',
            projectsUrl: 'http://form.io/project',
            projectId: '092934882',
            formsUrl: 'http://form.io/project/092934882/form',
            formUrl: 'http://form.io/project/092934882/form/23234234234234',
            formId: '23234234234234',
            actionsUrl: 'http://form.io/project/092934882/form/23234234234234/action',
            actionUrl: 'http://form.io/project/092934882/form/23234234234234/action/234230987872',
            actionId: '234230987872',
            submissionsUrl: 'http://form.io/project/092934882/form/23234234234234/submission',
            submissionUrl: '',
            submissionId: '',
            query: ''
          },
          'http://form.io/project/092934882/form/23234234234234/submission/2987388987982': {
            projectUrl: 'http://form.io/project/092934882',
            projectsUrl: 'http://form.io/project',
            projectId: '092934882',
            formsUrl: 'http://form.io/project/092934882/form',
            formUrl: 'http://form.io/project/092934882/form/23234234234234',
            formId: '23234234234234',
            actionsUrl: 'http://form.io/project/092934882/form/23234234234234/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://form.io/project/092934882/form/23234234234234/submission',
            submissionUrl: 'http://form.io/project/092934882/form/23234234234234/submission/2987388987982',
            submissionId: '2987388987982',
            query: ''
          },
          'http://form.io/project/092934882/form/23234234234234?test=hello&test2=there': {
            projectUrl: 'http://form.io/project/092934882',
            projectsUrl: 'http://form.io/project',
            projectId: '092934882',
            formsUrl: 'http://form.io/project/092934882/form',
            formUrl: 'http://form.io/project/092934882/form/23234234234234',
            formId: '23234234234234',
            actionsUrl: 'http://form.io/project/092934882/form/23234234234234/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://form.io/project/092934882/form/23234234234234/submission',
            submissionUrl: '',
            submissionId: '',
            query: '?test=hello&test2=there'
          },
          'http://project.form.io/user/login': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user/login',
            formId: 'user/login',
            actionsUrl: 'http://project.form.io/user/login/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://project.form.io/user/login/submission',
            submissionUrl: '',
            submissionId: '',
            query: ''
          },
          'http://project.form.io/user/login/submission/234234243234': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user/login',
            formId: 'user/login',
            actionsUrl: 'http://project.form.io/user/login/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://project.form.io/user/login/submission',
            submissionUrl: 'http://project.form.io/user/login/submission/234234243234',
            submissionId: '234234243234',
            query: ''
          },
          'http://project.form.io/user/login/action/234234243234': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user/login',
            formId: 'user/login',
            actionsUrl: 'http://project.form.io/user/login/action',
            actionUrl: 'http://project.form.io/user/login/action/234234243234',
            actionId: '234234243234',
            submissionsUrl: 'http://project.form.io/user/login/submission',
            submissionUrl: '',
            submissionId: '',
            query: ''
          },
          'http://project.form.io/user/login/action/234234243234?test=test2': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user/login',
            formId: 'user/login',
            actionsUrl: 'http://project.form.io/user/login/action',
            actionUrl: 'http://project.form.io/user/login/action/234234243234',
            actionId: '234234243234',
            submissionsUrl: 'http://project.form.io/user/login/submission',
            submissionUrl: '',
            submissionId: '',
            query: '?test=test2'
          },
          'http://project.form.io/user/loginform/action/234234243234?test=test2': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user/loginform',
            formId: 'user/loginform',
            actionsUrl: 'http://project.form.io/user/loginform/action',
            actionUrl: 'http://project.form.io/user/loginform/action/234234243234',
            actionId: '234234243234',
            submissionsUrl: 'http://project.form.io/user/loginform/submission',
            submissionUrl: '',
            submissionId: '',
            query: '?test=test2'
          },
          'http://project.form.io/user/loginform/submission': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user/loginform',
            formId: 'user/loginform',
            actionsUrl: 'http://project.form.io/user/loginform/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://project.form.io/user/loginform/submission',
            submissionUrl: '',
            submissionId: '',
            query: ''
          },
          'http://project.form.io/user': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user',
            formId: 'user',
            actionsUrl: 'http://project.form.io/user/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://project.form.io/user/submission',
            submissionUrl: '',
            submissionId: '',
            query: ''
          },
          'http://project.form.io/user/actionform/submission/2342424234234': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user/actionform',
            formId: 'user/actionform',
            actionsUrl: 'http://project.form.io/user/actionform/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://project.form.io/user/actionform/submission',
            submissionUrl: 'http://project.form.io/user/actionform/submission/2342424234234',
            submissionId: '2342424234234',
            query: ''
          },
          'http://project.form.io/user/actionform/?test=foo': {
            projectUrl: 'http://project.form.io',
            projectsUrl: '',
            projectId: 'project',
            formsUrl: 'http://project.form.io/form',
            formUrl: 'http://project.form.io/user/actionform',
            formId: 'user/actionform',
            actionsUrl: 'http://project.form.io/user/actionform/action',
            actionUrl: '',
            actionId: '',
            submissionsUrl: 'http://project.form.io/user/actionform/submission',
            submissionUrl: '',
            submissionId: '',
            query: '?test=foo'
          }
        };

        for (var path in tests) {
          var test = tests[path];
          var formio = new Formio(path);
          console.log(formio);
          for (var param in test) {
            assert.equal(formio[param], test[param], param + ' must match.');
          }
        }
      });
    }
  ]);