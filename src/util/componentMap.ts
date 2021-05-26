const componentMap: { [key: string]: string } = {
  checkbox: 'vCheckbox',
  button: 'vBtn',
  textField: 'vTextField',
  switch: 'vSwitch',
};

export function mapTypeToComponent(type: string): string | undefined {
  let mappedValue: string;
  try {
    mappedValue = componentMap[type];
    return mappedValue;
  } catch {
    console.error('Wrong Component provided');
  }
}
