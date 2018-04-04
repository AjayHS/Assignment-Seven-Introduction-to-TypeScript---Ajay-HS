class Facebook{
   //Info about the user
    name : string
    birthday : string
    gender : string
    interestedIn : string
    languages : string []
    religiousViews :string
    relationship :string
    about : string
    quote : string
    educations : object []
    works : object []
    address : string
    contact : number
    facebookId : string
    families : object []    
    places : string[]
    friends : object []
    photos : object []
    Videos :object []
    checkIns : object []
    music : object[]
    movies : object[]
    tvShows : object[]
    books : object[]
    likes : object[]
    events : object[]
    groups : object []

    constructor(name : string,birthday : string,gender : string,interestedIn : string,languages : string [],
        religiousViews :string,relationship :string,
        about : string,quote : string,address : string,contact : number,facebookId : string)
    {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.relegiousViews = religiousViews;
        this.relationship = relationship;
        this.quote = quote;
        this.about = about;
        this.address = address
        this.contact = contact
        this.facebookId = facebookId
    }

    OtherInformation = (places : string[],friends : object [],photos : object [],Videos :object [],
        checkIns : object [],music : object[],movies : object[],tvShows : object[],books : object[],
        likes : object[],events : object[],groups : object []) => {
            
        this.places = places
        this.friends = friends
        this.photos =photos
        this.Videos = Videos
        this.checkIns = checkIns
        this.music = music
        this.movies = movies
        this.tvShows = tvShows
        this.books = books
        this.likes = likes
        this.events = events
        this.groups = groups
    }


    getEducations = () =>{
        return this.educations
    }

    setEducations = (educations : object []) =>{
        this.educations = educations
    }

   
    getAge = (dateString) => {
            let today = new Date();
            let birthDate = new Date(dateString);
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age
        }
                   
}//End of the Facebook class


let Data = new Facebook("Ajay","15/08/1994","Male","Observartion",["MangoDB","Express","AngularJS","NodeJs"],"Preferred not to say",
"","", "Talk is  Cheap show me the code","India",1234567890,"facebook.com");


let education = {
    instituteName : "Edwisor",
    degree : "MEAN-Stack",
    yearOfPassing:"2018"
}


Data.setEducations([education])
console.log("Sample Data of the user:")
console.log(Data)
console.log("End of the user Data!")

//End of Code





