export interface Component {
  type: string;
  name: string;
  label: string;
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
