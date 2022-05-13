import Box, { BoxProps } from "@mui/material/Box";

export default function PaladinLogoTitle(props: BoxProps) {
  const { sx = {}, ...restProps } = props;
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="25"
      fill="currentColor"
      viewBox="0 0 96 25"
      sx={{
        ...sx
      }}
      {...restProps}
    >
      <path d="M.951 24.18V.652H9.09c1.55-.026 3.088.268 4.52.862a7.145 7.145 0 0 1 3.141 2.539 7.115 7.115 0 0 1 1.145 4.117 7.272 7.272 0 0 1-1.047 3.992 6.712 6.712 0 0 1-2.93 2.527 10.274 10.274 0 0 1-4.34.868H4.526v8.625H.95Zm3.532-11.47H9.48a5.22 5.22 0 0 0 3.663-1.318 4.42 4.42 0 0 0 1.416-3.44 4.007 4.007 0 0 0-1.465-3.34A5.834 5.834 0 0 0 9.35 3.444H4.467l.016 9.265Zm18.996 11.796a6.774 6.774 0 0 1-2.886-.586 4.617 4.617 0 0 1-1.96-1.682 4.805 4.805 0 0 1-.715-2.668c0-1.866.662-3.26 1.985-4.182 1.324-.922 3.433-1.414 6.327-1.475l2.767-.082v-1.22a3.009 3.009 0 0 0-.863-2.278 3.652 3.652 0 0 0-2.653-.814 4.63 4.63 0 0 0-2.398.618 3.006 3.006 0 0 0-1.378 2.034H18.66c.031-1.016.37-2 .971-2.82a5.306 5.306 0 0 1 2.398-1.757 10.04 10.04 0 0 1 3.598-.543 9.77 9.77 0 0 1 3.798.63c.915.352 1.69.994 2.208 1.827a5.59 5.59 0 0 1 .722 2.93V24.18h-2.947l-.276-3.091a5.625 5.625 0 0 1-2.382 2.68 7.056 7.056 0 0 1-3.272.737Zm1.085-2.425c.539 0 1.073-.096 1.58-.282.508-.186.986-.45 1.415-.78a4.38 4.38 0 0 0 1.02-1.118c.244-.38.381-.819.396-1.27V15.85l-2.279.049c-.995-.01-1.987.11-2.951.358a3.798 3.798 0 0 0-1.856 1.085 2.74 2.74 0 0 0-.645 1.903 2.56 2.56 0 0 0 .944 2.11 3.68 3.68 0 0 0 2.382.727h-.006Zm14.769 2.327a6.16 6.16 0 0 1-2.403-.39 3.157 3.157 0 0 1-1.373-1.053 3.627 3.627 0 0 1-.646-1.497 9.462 9.462 0 0 1-.152-1.73V0h3.435v19.38c-.043.63.12 1.258.46 1.79a1.884 1.884 0 0 0 1.428.7l.879.032v2.213a7.238 7.238 0 0 1-.836.212 4.47 4.47 0 0 1-.792.081Zm7.65.098a6.802 6.802 0 0 1-2.891-.586 4.6 4.6 0 0 1-1.975-1.682 4.806 4.806 0 0 1-.695-2.679c0-1.866.662-3.26 1.986-4.182 1.324-.922 3.434-1.41 6.332-1.464l2.767-.082v-1.22a3.009 3.009 0 0 0-.863-2.278 3.652 3.652 0 0 0-2.653-.814 4.65 4.65 0 0 0-2.404.618 2.999 2.999 0 0 0-1.367 2.034h-3.027c.029-1.016.366-2 .965-2.82a5.323 5.323 0 0 1 2.404-1.736 10.041 10.041 0 0 1 3.57-.564 9.77 9.77 0 0 1 3.798.63 4.498 4.498 0 0 1 2.203 1.827c.506.891.758 1.905.727 2.93V24.18h-2.946l-.277-3.091a5.637 5.637 0 0 1-2.387 2.68 7.056 7.056 0 0 1-3.267.737Zm1.086-2.425a4.57 4.57 0 0 0 1.578-.282 5.31 5.31 0 0 0 1.417-.78c.4-.311.744-.69 1.014-1.118a2.51 2.51 0 0 0 .402-1.27V15.85l-2.28.049c-.996-.01-1.99.11-2.956.358a3.798 3.798 0 0 0-1.856 1.085 2.739 2.739 0 0 0-.64 1.903 2.56 2.56 0 0 0 .944 2.11 3.68 3.68 0 0 0 2.382.727h-.005Zm16.348 2.425a6.454 6.454 0 0 1-5.225-2.267c-1.27-1.515-1.905-3.7-1.905-6.553a12.474 12.474 0 0 1 .765-4.567 6.51 6.51 0 0 1 2.284-3.015 6.382 6.382 0 0 1 3.771-1.085 6.79 6.79 0 0 1 2.024.276 6.277 6.277 0 0 1 1.563.716A5.566 5.566 0 0 1 69.51 9.9V0h3.5v24.18h-2.604l-.391-3.45c-.139.42-.32.823-.543 1.205a5.02 5.02 0 0 1-2.648 2.197 6.803 6.803 0 0 1-2.408.374Zm.667-2.62c1.563 0 2.713-.488 3.386-1.475.672-.987 1.041-2.593 1.041-4.839a10.2 10.2 0 0 0-.472-3.221 3.937 3.937 0 0 0-1.41-1.996 4.26 4.26 0 0 0-2.496-.673 4.01 4.01 0 0 0-3.158 1.394c-.814.922-1.22 2.425-1.22 4.496 0 2.073.368 3.602 1.111 4.687a3.663 3.663 0 0 0 3.218 1.627ZM79.034.667v3.434h-3.5V.667h3.5Zm-.066 6.688V24.17h-3.364V7.355h3.364ZM81.54 24.18V7.367h3.402v2.398a5.323 5.323 0 0 1 1.085-1.286 5.426 5.426 0 0 1 1.71-.976 7.3 7.3 0 0 1 5.273.255 4.948 4.948 0 0 1 2.17 1.947 6.507 6.507 0 0 1 .815 3.428v11.049H92.51v-10.66a3.45 3.45 0 0 0-.971-2.674 3.571 3.571 0 0 0-2.496-.878 5.608 5.608 0 0 0-1.953.341 3.392 3.392 0 0 0-1.498 1.036 2.63 2.63 0 0 0-.542 1.73v11.104h-3.51Z" />
    </Box>
  );
}