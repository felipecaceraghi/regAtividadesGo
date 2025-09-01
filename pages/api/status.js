function status(request, response) {
  response.status(200).json({ status: "funcional" });
}

export default status;
