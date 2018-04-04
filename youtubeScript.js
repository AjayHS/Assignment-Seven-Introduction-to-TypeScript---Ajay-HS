//Creation of the Class for the YouTube Channel
var Channel = /** @class */ (function () {
    function Channel(_channelID, _channelName, _channelDescription, _channelCategory, _channelLicence, _subscribers) {
        var _this = this;
        //Methods to Fetch the Details
        this.getChannelId = function () {
            return _this.channelID;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getDescription = function () {
            return _this.channelDescription;
        };
        this.getvideoLength = function () {
            return _this.channelCategory;
        };
        this.getViews = function () {
            return _this.channelLicence;
        };
        this.getLikes = function () {
            return _this.subscribers;
        };
        this.channelID = _channelID;
        this.channelName = _channelName;
        this.channelDescription = _channelDescription;
        this.channelCategory = _channelCategory;
        this.channelLicence = _channelLicence;
        this.subscribers = _subscribers;
    }
    return Channel;
}());
//Creation of the class for the Videos in the channel
var Video = /** @class */ (function () {
    function Video(_videoId, _videoLink, _videoTitle, _videoUploadDate, _videoLength, _views, _likes, _disLikes, _comments, _uploadedBy, _displayAdv, _recommended) {
        var _this = this;
        //Methods to Fetch the details about the Video
        this.getComments = function () {
            return _this.comments;
        };
        this.getUploader = function () {
            return _this.uploadedBy;
        };
        this.getRecommended = function () {
            return _this.recommended;
        };
        this.getVideoID = function () {
            return _this.videoId;
        };
        this.getVideoLinkD = function () {
            return _this.videoLink;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getvideoUploadDate = function () {
            return _this.videoUploadDate;
        };
        this.getvideoLength = function () {
            return _this.videoLength;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdiLikes = function () {
            return _this.disLikes;
        };
        this.videoId = _videoId;
        this.videoLink = _videoLink;
        this.videoTitle = _videoTitle;
        this.videoUploadDate = _videoUploadDate;
        this.videoLength = _videoLength;
        this.views = _views;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.comments = _comments;
        this.uploadedBy = _uploadedBy;
        this.displayAdv = _displayAdv;
        this.recommended = _recommended;
    }
    return Video;
}());
//Creation of the class for comment for the video
var VideoComment = /** @class */ (function () {
    //constructor for initilized the properties
    function VideoComment(_commentID, _comment, _commentBy, _commentTime, _likes, _disLikes, _replies) {
        var _this = this;
        //Methods to get Details
        this.getCommentId = function () {
            return _this.commentID;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getCommentBy = function () {
            return _this.commentBy;
        };
        this.getCommentTime = function () {
            return _this.commentTime;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.getReply = function () {
            return _this.replies;
        };
        this.commentID = _commentID;
        this.comment = _comment;
        this.commentBy = _commentBy;
        this.commentTime = _commentTime;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.replies = _replies;
    }
    return VideoComment;
}());
//Creation of the class for the reply to the comments
var Reply = /** @class */ (function () {
    //constructor to initilized the properties
    function Reply(_replyID, _reply, _replyBy, _replyTime, _likes, _disLikes, _associatedWith) {
        var _this = this;
        //Methods to get Details
        this.getReplyId = function () {
            return _this.replyID;
        };
        this.getReply = function () {
            return _this.reply;
        };
        this.getReplyBy = function () {
            return _this.replyBy;
        };
        this.getReplyTime = function () {
            return _this.replyTime;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.getAssociated = function () {
            return _this.associatedWith;
        };
        this.replyID = _replyID;
        this.reply = _reply;
        this.replyBy = _replyBy;
        this.replyTime = _replyTime;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.associatedWith = _associatedWith; // commentID
    }
    return Reply;
}());
var YouTube = /** @class */ (function () {
    function YouTube(_video) {
        var _this = this;
        this.getAllVideos = function () {
            return _this.video;
        };
        this.getVideobyNumber = function (videoNumber) {
            return _this.video[videoNumber];
        };
        this.video = _video;
    }
    return YouTube;
}()); //end of class
var channel1 = new Channel(1, "Edwisor", "A Platform to Learn", "Education", "Youtube License", 2018);
var channel2 = new Channel(2, "Byjus", "An Educational App for Kids", "Education", "Youtube License", 2018);
var comment1 = new VideoComment(1, "Great Platform to learn MEAN STACK", channel1, "2 Week ago", 51, 1);
var comment2 = new VideoComment(1, "Children love it", channel2, "3 Week ago", 27, 1);
var comments1 = [comment1];
var reply1 = new Reply(1, "YES! it's ", channel2, "8 Hours ago", 3, 0, 1);
var replies1 = [reply1];
var comment3 = new VideoComment(1, "Thank you", channel1, "1 Week ago", 10, 1, replies1);
var comments2 = [comment1, comment3];
var video1 = new Video(1, "Module 1", "https://video.edwisor.com/video/HJpnvuRJSz", new Date(), 10.20, 100, 1000, 10, comments1, channel1);
var video2 = new Video(1, "Module 2", "https://video.edwisor.com/video/HJpnvuRJSz", new Date(), 00, .30, 123, 1245, 10, comments2, channel1, true, video1);
var videos = [video1, video2];
var youtube = new YouTube(videos);
console.log("Data about Youtube Video Class:");
console.log(youtube);
console.log("End of the Youtube Data!");
