//Creation of the Class for the YouTube Channel
class Channel{
    private channelID : number
    private channelName : string
    private channelDescription : string
    private channelCategory : string
    private channelLicence : string
	private subscribers : number

  
    constructor(_channelID : number, _channelName : string, _channelDescription : string, _channelCategory : string,_channelLicence : string,_subscribers : number)
    {
	    this.channelID = _channelID;
	    this.channelName = _channelName;
        this.channelDescription = _channelDescription;
        this.channelCategory = _channelCategory
        this.channelLicence = _channelLicence
        this.subscribers = _subscribers
    }

    //Methods to Fetch the Details
    getChannelId = () => {
	    return this.channelID
    }
    getChannelName = () => {
	    return this.channelName 
    }
    getDescription = () => {
	    return this.channelDescription 
    }
    getvideoLength = () => {
	    return this.channelCategory 
    }
    getViews = () => {
	    return this.channelLicence 
    }
    getLikes = () => {
	    return this.subscribers 
    }
    
}

//Creation of the class for the Videos in the channel
class Video  {
     private videoId : number
    private videoLink : string
    private videoTitle: string;
    private videoUploadDate: Date
    private videoLength :number
    private views : number;
    private likes : number
    private disLikes : number
    private comments : VideoComment []
    private uploadedBy : Channel
    private displayAdv : Boolean
    private recommended : Object

    constructor(_videoId : number,_videoLink :string, _videoTitle : string, _videoUploadDate : Date, _videoLength : number,_views : number,_likes : number,_disLikes : number,_comments : VideoComment [],_uploadedBy : Channel,_displayAdv? : boolean,_recommended?:object)
    {
	    this.videoId = _videoId;
        this.videoLink = _videoLink
        this.videoTitle = _videoTitle;
        this.videoUploadDate = _videoUploadDate;
        this.videoLength = _videoLength
        this.views = _views
        this.likes = _likes
        this.disLikes = _disLikes
        this.comments = _comments
        this.uploadedBy = _uploadedBy
        this.displayAdv = _displayAdv
        this.recommended = _recommended
    }    

    //Methods to Fetch the details about the Video

    getComments = () => {
	    return this.comments 
    }
    getUploader = () => {
	    return this.uploadedBy
    }
    getRecommended = () => {
	    return this.recommended 
    }
    getVideoID = () => {
	    return this.videoId 
    }
    getVideoLinkD = () => {
	    return this.videoLink 
    }
    getVideoTitle = () => {
	    return this.videoTitle 
    }
    getvideoUploadDate = () => {
	    return this.videoUploadDate 
    }
    getvideoLength = () => {
	    return this.videoLength 
    }
    getViews = () => {
	    return this.views 
    }
    getLikes = () => {
	    return this.likes 
    }
    getdiLikes = () => {
	    return this.disLikes 
    }

}

//Creation of the class for comment for the video
class VideoComment{
    //Properties : commentid,comment,commentby,comment time,likes,dislikes,replies to comment
    private commentID : number
    private comment : string
    private commentBy : Channel
    private commentTime : string
    private likes : number
    private disLikes : number
    private replies : Reply[]

    //constructor for initilized the properties
    constructor(_commentID : number,_comment:string,_commentBy:Channel,_commentTime:string,_likes:number,_disLikes:number,_replies? : Reply []){
        this.commentID = _commentID
        this.comment = _comment
        this.commentBy = _commentBy
        this.commentTime = _commentTime
        this.likes = _likes
        this.disLikes = _disLikes
        this.replies = _replies
    }

    //Methods to get Details
    getCommentId = () => {
	    return this.commentID
    }
    getComment = () => {
	    return this.comment 
    }
    getCommentBy = () => {
	    return this.commentBy 
    }
    getCommentTime = () => {
	    return this.commentTime 
    }
    getLikes = () => {
	    return this.likes 
    }
    getdisLikes = () => {
	    return this.disLikes 
    }
    getReply = () => {
	    return this.replies 
    }


}
//Creation of the class for the reply to the comments

class Reply{
    //reply proprties
    private replyID : number
    private reply : string
    private replyBy : Channel
    private replyTime : string
    private likes : number
    private disLikes : number
    private associatedWith : number
    
    //constructor to initilized the properties
    constructor(_replyID : number,_reply:string,_replyBy:Channel,_replyTime:string,_likes:number,_disLikes:number,_associatedWith : number){
        this.replyID = _replyID
        this.reply = _reply
        this.replyBy = _replyBy
        this.replyTime = _replyTime
        this.likes = _likes
        this.disLikes = _disLikes
        this.associatedWith = _associatedWith // commentID
    }
    //Methods to get Details
    getReplyId = () => {
	    return this.replyID
    }
    getReply = () => {
	    return this.reply 
    }
    getReplyBy = () => {
	    return this.replyBy 
    }
    getReplyTime = () => {
	    return this.replyTime
    }
    getLikes = () => {
	    return this.likes 
    }
    getdisLikes = () => {
	    return this.disLikes 
    }
    getAssociated = () => {
	    return this.associatedWith 
    }

}


class YouTube{

    private video : Video [] // Array of Videos
    
    constructor(_video : Video [])
    {
	    this.video = _video;
    }

    getAllVideos = () => {
	    return this.video
    }

    getVideobyNumber = (videoNumber) => {
        return this.video[videoNumber]
    }

} //end of class


let channel1 = new Channel(1,"Edwisor","A Platform to Learn","Education","Youtube License",2018)
let channel2 = new Channel(2,"Byjus","An Educational App for Kids","Education","Youtube License",2018)

let comment1 = new VideoComment(1,"Great Platform to learn MEAN STACK",channel1,"2 Week ago",51,1)
let comment2 = new VideoComment(1,"Children love it",channel2,"3 Week ago",27,1)

let comments1  = [comment1]

let reply1 = new Reply(1,"YES! it's ",channel2,"8 Hours ago",3,0,1)
let replies1 = [reply1]

let comment3 = new VideoComment(1,"Thank you",channel1,"1 Week ago",10,1,replies1)

let comments2  = [comment1,comment3]

let video1 = new Video(1,"Module 1","https://video.edwisor.com/video/HJpnvuRJSz",new Date(),10.20,100,1000,10,comments1,channel1);

let video2 = new Video(1,"Module 2","https://video.edwisor.com/video/HJpnvuRJSz",new Date(),00.30,123,1245,10,comments2,channel1,true,video1);


let videos = [video1,video2]

let youtube = new YouTube(videos)
console.log("Data about Youtube Video Class")
console.log(youtube)
console.log("End of the Youtube Data")

