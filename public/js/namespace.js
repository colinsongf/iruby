//----------------------------------------------------------------------------
//  Copyright (C) 2008-2011  The IPython Development Team
//
//  Distributed under the terms of the BSD License.  The full license is in
//  the file COPYING, distributed as part of this software.
//----------------------------------------------------------------------------

var IRuby = IRuby || {};

IRuby.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = IRuby,
        i;

    // String redundant leading global
    if (parts[0] === "IRuby") {
        parts = parts.slice(1);
    }

    for (i=0; i<parts.length; i+=1) {
        // Create property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
    }
    return parent;
};
