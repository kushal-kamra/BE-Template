// eslint-disable-next-line consistent-return
async function getProfile(req, res, next) {
  const { Profile } = req.app.get('models');
  const profile = await Profile.findOne({ where: { id: req.get('profile_id') || 0 } });
  if (!profile) { return res.status(401).end(); }
  req.profile = profile;
  next();
}
module.exports = { getProfile };
