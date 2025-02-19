const employees = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employees });
};

exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ message: 'ID and name are required' });
  }
  const newEmployee = { id, name };
  employees.push(newEmployee);
  res.status(201).json({ message: 'Employee created', data: newEmployee });
};

exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  const index = employees.findIndex(employee => employee.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  employees.splice(index, 1);
  res.status(200).json({ message: 'Employee deleted' });
};