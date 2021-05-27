export interface Props {
  label?: string;
  text?: string;
  placeholder?: string;
}

export interface Component {
  name: string;
  type: string;
  width: number;
  props: Props;
  fieldBinding: string;
}
export interface Container {
  name: string;
  width: number;
  label: string;
  components: Component[];
}

export interface View {
  name: string;
  color: string;
  container: Container[];
}

export interface UI {
  views: View[];
}
