//	This script is auto-generated.	//


var profiles = {};
profiles.profiles = function (callback) {
	Util.CallAPI("", "/apis/profiles/profiles", "GET", callback);
}

profiles.addFavProfile = function (profileId, callback) {
	Util.CallAPI(String.format("profileId={0}", profileId), "/apis/profiles/favProfile", "PUT", callback);
}

profiles.getFavProfile = function (callback) {
	Util.CallAPI("", "/apis/profiles/favProfile", "GET", callback);
}

profiles.deleteFavProfile = function (profileId, callback) {
	Util.CallAPI(String.format("profileId={0}", profileId), "/apis/profiles/favProfile", "DELETE", callback);
}

profiles.registerProfile = function (profileUrl, tags, callback) {
	Util.CallAPI(String.format("profileUrl={0}&tags={1}", profileUrl, tags), "/apis/profiles/registerProfile", "PUT", callback);
}

