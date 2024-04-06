/**
 * @license
 *
 * Copyright 2006 - 2018 TubePress LLC (http://tubepress.com)
 *
 * This file is part of TubePress (http://tubepress.com)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
!function(t){"use strict";var a,e=t.Vendors.jQuery,n=function(t,n,r){var i,s,o,u,c=n.data,d=c&&c.hasOwnProperty("tubepress_action");d&&(i=t.url,o=i===a,s="html"===t.dataType,u=0===i.indexOf(a+" "),(o||s&&u)&&(c.action="tubepress",t.data=e.param(c)))};e(function(){e.ajaxPrefilter(n),a=t.Environment.getAjaxEndpointUrl()})}(TubePress);
