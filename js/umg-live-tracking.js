(function($) {
    
    // helper - execute a function by name (handles namespaced function names, eg "My.Namespace.functionName")
    umg_live.executeFunctionByName = function(functionName, context /*, args */ ) {
        var args = Array.prototype.slice.call(arguments, 2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            if (typeof context != "undefined") {
                context = context[namespaces[i]];
            } else {
                return false;
            }
        }
        if (typeof context != "undefined" && typeof context[func] != "undefined") {
            return context[func].apply(context, args);
        }
        return false;
    };
    //Function to call AAL delegate
    umg_live.trackEvent = function(type, data) {
        switch(type) {
            case 'buyTicketsLink':
                umg_live.executeFunctionByName(umg_live.analytics_tracking_delegate + '.buyTicketsLink', window, String(data));                                
            break;       
            case 'externalLink':
                umg_live.executeFunctionByName(umg_live.analytics_tracking_delegate + '.externalLink', window, String(data));                                
            break;               
        }
    };     
    //Track click events on tickets
    $('.umg_live_ticket_link, .umg_live_vip_ticket_link').click(function(){
            var data = {
                'date':$(this).data('gig-date'),
                'location': $(this).data('location'),
                'tier':$(this).data('ticket-tier'),
                'link':$(this).attr('href'),
                'platform':$(this).data('source')
            };
            
            umg_live.trackEvent('buyTicketsLink', JSON.stringify(data));
    });     
    //Track Outbound click events
    $('.umg-live-outbound-link').click(function(){
            var data = {
                'link':$(this).attr('href')
            };
            umg_live.trackEvent('externalLink', JSON.stringify(data));
    });
})(jQuery);	