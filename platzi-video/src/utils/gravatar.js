import md5 from 'md5';


function gravatar(email) {
    const base = 'http://gravatar.com/avatar/'
    const formattedEmail = (email).trim().toLowerCase()
    const hash = md5(formattedEmail, {encoding: 'binary'})
    
    return `${base}${hash}`

}

export default gravatar