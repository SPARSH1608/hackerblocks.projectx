import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import env from 'hackerblocks/config/environment';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
    session: service(),
    host: env.apiHost,
    contentType: 'application/json; charset=utf-8',
    namespace: '/api/v2',
    headers: computed ('session.data.token', function () {
        let headers = {};
        const jwt = this.get('session.data.token');
        if (jwt) {
            headers['Authorization'] = `JWT ${jwt}`;
          }
        return headers;
    }),
    xhrFields: { 
        withCredentials: true 
    }
});
