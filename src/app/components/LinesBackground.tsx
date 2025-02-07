interface Props {
  className?: string;
  color?: string;
}

export const LinesBackground = ({ className, color = "#EBEFF2" }: Props) => {
  return (
    <svg
      className={className}
      width="1728"
      height="1117"
      viewBox="0 0 1728 1117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          d="M-378.325 1037.8L791.618 906.611L1104.17 1586.91L-378.325 1037.8Z"
          stroke={color}
        />
        <path
          d="M1104.17 1586.91L170.782 -444.695L1652.99 104.549L1104.17 1586.91Z"
          stroke={color}
        />
        <path
          d="M1653.28 104.414L480.536 229.505L170.786 -444.697L1653.28 104.414Z"
          stroke={color}
        />
        <path
          d="M906.948 -172.024L-378.326 1037.8L170.784 -444.697L906.948 -172.024Z"
          stroke={color}
        />
        <path
          d="M1653.28 104.414L-378.325 1037.8L170.786 -444.697L1653.28 104.414Z"
          stroke={color}
        />
      </g>
    </svg>
  );
};
