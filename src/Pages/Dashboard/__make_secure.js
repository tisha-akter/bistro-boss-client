/** 
 * 
 * ______________
 * BASIC
 * _____________________
 * 
 * 1. don't show the link to the who shouldn't see it 
 * . only show to the person/types of user who should see it 
 * 2. don't allow to visit the link by typing on the url
 * use admin route that will check whether the user is admin or not
 * if not admin then redirect to any other page. you could logout user and send them to the login page as well
 * 
 * 
 * 
 * 
 * 
 * --------------
 * TO send data
 * --------------
 * 1. verify  jwt token (send authorization token in the header to the server) 
 * if possile use axios to send jwt token by intercepting the request
 * 
 * 2. if it is an admin activity . Make sure only admin user is postin data by using verifyAdmin
 * 
 * 
*/