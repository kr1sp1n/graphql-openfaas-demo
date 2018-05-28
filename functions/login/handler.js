module.exports = (context, done) => {
  return done(undefined, {
    status: "done",
    context: JSON.parse(context),
  })
}
