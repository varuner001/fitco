const userlist = [
    {
      mID: 5,
      userName: 'varuner',
      email: 'varuner001@gmail.com',
      firstName: 'Varun',
      lastName: 'Vyshnavi',
      friendsList: [
        'karthik.000',
        'vysh.egv',
        'regu57'
      ]
    },
    {
      mID: 13,
      userName: 'karthik.000',
      email: 'arka@gmail.com',
      firstName: 'Karthik',
      lastName: 'Ragunathan',
      friendsList: [
        'varuner',
        'vysh.egv',
        'regu57'
      ]
    },
  ];
  
getUserByMId = (id) => {
    let user = null;
    user = userlist.filter(user => user.mID === id);
    if(user.length > 0) {
        return user[0]
    }
    return null;
};  

getUserByUserName = (userName) => {
    let user = null;
    user = userlist.filter(user => user.userName === userName);
    if(user.length > 0) {
        return user[0]
    }
    return null;
};

module.exports = {
    getUserByMId: getUserByMId,
    getUserByUserName: getUserByUserName
};