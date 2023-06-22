var UserProfile = (function() {
    var name = "";
  
    var getName = function() {
      return name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      this.name = name;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  
  export default UserProfile;