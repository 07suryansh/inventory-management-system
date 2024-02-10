const registerUser=async (req,res)=>{
    try {
        const {
          userName,
          email,
          password,
          role,
          } = req.body;
          if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
          }
          const newUser = new User({
            firstName,
            lastName,
            email,
            password
          });
          const savedUser = await newUser.save();
          res.status(201).json(savedUser)
      } catch (err) {
          res.status(500).json({error:err.message})
      }
}