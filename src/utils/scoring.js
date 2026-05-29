export const calculateScore = (tree, form) => {
  let score = 0;

  if (tree.states.includes(form.state)) score += 25;
  if (tree.soils.includes(form.soil)) score += 25;
  if (tree.rainfall.includes(form.rainfall)) score += 25;
  if (tree.purposes.includes(form.purpose)) score += 25;

  return score;
};