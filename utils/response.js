module.exports = {
  createRes: (data, code = 200) => {
    return (req, res) => {
      if (code === 200) {
        return res.json({
          success: true, 
          result: data, 
        });
      }
      res.status(code);
      console.log(code, 'code', data)
      res.json({ 
        result: false, 
        success: false, 
        message: data, 
      });
    }
  },
  createRes400: (message) => {
    return this.createRes(message, 400);
  }
}