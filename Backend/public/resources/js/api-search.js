//	This script is auto-generated.	//


var search = {};
search.recentSearch = function (callback) {
	Util.CallAPI("", "/apis/search/recentSearch", "GET", callback);
}

search.querySearchString = function (query, callback) {
	Util.CallAPI(String.format("query={0}", query), "/apis/search/querySearchString", "POST", callback);
}

search.searching = function (query, callback) {
	Util.CallAPI(String.format("query={0}", query), "/apis/search/searching", "POST", callback);
}

search.filterSearching = function (query, filter, callback) {
	Util.CallAPI(String.format("query={0}&filter={1}", query, JSON.stringify(filter)), "/apis/search/searching", "POST", callback);
}