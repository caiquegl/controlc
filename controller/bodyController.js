const Sequelize = require("sequelize");
const config = require("../config/database");
const {Pedido,produtos,enderecos,carrinhos,mapas} = require("../models");






const bodyController = {
    home: async(req, res) => {
      // const con = new Sequelize(config);

      //   const produtosDb = await con.query("select * from produtos",
      //     {
      //       type: Sequelize.QueryTypes.SELECT,
      //     }
      //   );
        return res.render("index", {title: 'Manutenção'});
    },
};

module.exports = bodyController;