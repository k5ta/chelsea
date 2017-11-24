function importAll(requireContext) {
  return requireContext
    .keys()
    .reduce(
      (table, item, index) => ({
        ...table,
        [item.replace('./', '')]: requireContext(item)
      }),
      {}
    )
}

export default importAll
