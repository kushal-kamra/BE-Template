const { Op } = require('sequelize');

exports.getContractById = async (req, res) => {
  const { Contract } = req.app.get('models');
  const { id } = req.params;
  const contract = await Contract.findOne({
    where: {
      id,
      [Op.or]: [
        { ContractorId: req.get('profile_id') },
        { ClientId: req.get('profile_id') },
      ],
    },
  });
  if (!contract) return res.status(404).end();
  return res.json(contract);
};
