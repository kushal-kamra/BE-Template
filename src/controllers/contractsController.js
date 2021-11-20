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

exports.getAllContractsForProfileId = async (req, res) => {
  const { Contract } = req.app.get('models');
  const contracts = await Contract.findAll({
    where: {
      [Op.or]: [
        { ContractorId: req.get('profile_id') },
        { ClientId: req.get('profile_id') },
      ],
      status: { [Op.ne]: 'terminated' },
    },
  });
  if (!contracts) return res.status(404).end();
  return res.json(contracts);
};
