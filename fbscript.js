var Facebook = /** @class */ (function () {
    function Facebook(name, birthday, gender, interestedIn, languages, religiousViews, relationship, about, quote, address, contact, facebookId) {
        var _this = this;
        this.OtherInformation = function (places, friends, photos, Videos, checkIns, music, movies, tvShows, books, likes, events, groups) {
            _this.places = places;
            _this.friends = friends;
            _this.photos = photos;
            _this.Videos = Videos;
            _this.checkIns = checkIns;
            _this.music = music;
            _this.movies = movies;
            _this.tvShows = tvShows;
            _this.books = books;
            _this.likes = likes;
            _this.events = events;
            _this.groups = groups;
        };
        this.getEducations = function () {
            return _this.educations;
        };
        this.setEducations = function (educations) {
            _this.educations = educations;
        };
        this.getAge = function (dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.relegiousViews = religiousViews;
        this.relationship = relationship;
        this.quote = quote;
        this.about = about;
        this.address = address;
        this.contact = contact;
        this.facebookId = facebookId;
    }
    return Facebook;
}()); //End of the Facebook class
var Data = new Facebook("Ajay", "15/08/1994", "Male", "Observartion", ["MangoDB", "Express", "AngularJS", "NodeJs"], "Preferred not to say", "", "", "Talk is  Cheap show me the code", "India", 1234567890, "facebook.com");
var education = {
    instituteName: "Edwisor",
    degree: "MEAN-Stack",
    yearOfPassing: "2018"
};
Data.setEducations([education]);
console.log("Sample Data of the user:");
console.log(Data);
console.log("End of the user Data!");
//End of Code
