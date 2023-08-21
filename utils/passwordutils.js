import bcrypt from 'bcryptjs';

export const hashedPassword =async(password)=>{
    // generates salt hashing password from bcryptjs
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword =await bcrypt.hash(password,salt);
    return hashedPassword   
}

export const comparePassword = async(password,hashedPassword)=>{
    const isMatch = await bcrypt.compare(password,hashedPassword)
    return isMatch
}