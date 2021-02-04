import { Blank, IconProps } from "grommet-icons";

export default function Play(props: IconProps): JSX.Element {
  return (
    <Blank {...props} viewBox="0 0 16 16">
      <path
        d="M3.5 14C3.36739 14 3.24021 13.9473 3.14645 13.8535C3.05268 13.7598 3 13.6326 3 13.5V2.49998C2.99999 2.41309 3.02263 2.32769 3.06568 2.25222C3.10873 2.17674 3.17071 2.11378 3.2455 2.06956C3.32029 2.02533 3.40532 2.00136 3.4922 2C3.57908 1.99864 3.66481 2.01995 3.74095 2.06183L13.7409 7.56183C13.8194 7.60497 13.8848 7.66839 13.9304 7.74546C13.976 7.82252 14 7.91042 14 7.99995C14 8.08949 13.976 8.17738 13.9304 8.25445C13.8848 8.33152 13.8194 8.39493 13.7409 8.43808L3.74095 13.9381C3.66713 13.9787 3.58425 14 3.5 14ZM4 3.34543V12.6544L12.4624 7.99998L4 3.34543Z"
        fill={props.color}
      />
    </Blank>
  );
}