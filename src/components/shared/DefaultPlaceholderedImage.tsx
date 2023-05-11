import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

const DEFAULT_PLACEHOLDER = "data:image/webp;base64,UklGRrYJAABXRUJQVlA4WAoAAAAgAAAAzwIAzwIASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggyAcAAFCRAJ0BKtAC0AI+bTaZSaQioqEgCACADYlpbuFoncb///zieNUTz/NP//u26PBvruSfN40bkXuvGP0AJ7APfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77bNDd56fwPfbJyHvtk5D32ych77bHJk3iBBoPHN09snIe+2TkPfbJyHvtlnfqNEVPuGCacL2Ae+2TkPfbJyHrVE0jt9rJtsBFSdFvFych77ZOQ99snLoIuKrUPOky1ji3XCXJyHvtk5D32ych8jR+iOsm2wFruzH2oLJdrxcnIe+2TkPkaP9hEJc3edUtALYH4/v05D32ych77ZOT9+r4IuHr7zvkgp5hy9i/81RFych77ZOQ4AzWTbYCroZjgnxP7dEloIrxcnIe+2Tk6aDaP0R6u58lrIVmgJeCmC7SoFku14uTl0DKCu2+YCiZYvNRlVj75/FxD9PbJyHvtk5E6RRvFr1DkvfasiGJFWmgbm14uTkPfbP86hHbCPIDs36dRw/UwZ2RwIWCyXa8XJyH73NkpnqqUA9+hnFIlvfchteLk5D320OmY7dzzvPJyeSJjYSfuQ2vFych77aHSlvMHuJpUDAN77pP3R+EF2lQLJdtRQBdRLShnIfDUjz1NlE209snIe+2Tr+grZvYTZrF3aA9+lBVlQyj2RYB77ZOQ9+hnr6lxZ978EFZNti2oBCTfbJyHvtk5OqZO6jJCHQMQhZNtgKsmnE28YRQiIiJwYB77V1UFh9ijh2f1Y8Q9dU3o/IiIhkRFBnk5D9nXdXjT0833SKOASx1k20ZP2qIZERE8ogWS5bdE2ldNfpqeW2wDe5RRLfYLtKgWS7YIhmRfNmHww/l48TyJJD2pqB1k7x+NHtKgWS7XciCseItKx1pMWprOEEAloAshsYMlw4AnX0u13HqvNo/RHWTbYBG1ykfpNemogIzSNyYfHtkxiuZU/ek0My3prodSLZCHja8+S1fDtFvFxzolQL86yba/nI7qhFfeeotALYHGC1t1EWuTvECD6/3tH5XT6ba+yRFRjJJgiBQCsZIb0/F6cL9XeeoqftmPuc6pTts9JBkuF0b7yd4zgFXGZcCyip+86oKo5hLDnaWs/lzw56jEKI1bz00rFnqx4P0KL4KJS7Wevs+ZIA/FEzRyiYPdy3xQLm7sD8BkCIiIZERERDIQhUul8BpSAdK6W19IWGXEOsm2wFWTbYCrJtJeYUIkGU4p+uAsLHukpfor4BuLQCw+P8eCMWgFh8fwLzhfyJge/tDGojbfT6cBp+Zb6oftsfCP8undEOexgARdSiCU4MJr1MHULN4bdfBCklnIprLst/PwxygpTouEiYRnO3cOj4A9KW+XnqKn7z1FT956ip+86hc/ebw0hTtks8V9qjIpJLHbp38I/bcML29CNFWC5mCcK1zmGC+4NFeHWTbYCrJtsBVk22AqxeXVduePasiIp4cKtfEdZNtgKsm2wFWTbYCp3tDuoTKAA/v0SQt273kAgAU4EAAAAAAAAAHB8AAenQIsiXchVAGgGHDS5BZiTRDzUcALLc1KZAG0PQJU9hfhAUqkIUdRD/u3+4Tn2yEQ2cnvO4OaqbvvuVs4nLM5SVEV191XSneoaHcPcexcy4JQfnDEbdmCKjqdE5LhkoVN2HXkaXom+4wEr1PaGwKuom1HbNaYin/vgUUtPN+hrFk4/GqPoMmidS/o5Svfx7ymw60czPzXKZUcj3M2xBAoCbIY0yGnlaAh1A06+UXxFxPxpMEj3MFh2AJkRWfcUVSAIVXJOSgNX1s9e2X6BlNv22G4EJSxjMOLEvIc9GMeAvf5/W8I1qu0EVEn0Rm3/uxCmVrRDbAF8QleocHSIAJmNNoE+aSwByT+zMdPZ9gAHqYDtkTjcJpVDjbQQtG5bY4Vwt6PMCax+WqtvYA6YSlSYY5AOF9LGmP9sTmcjJflyiRHhWUekaZWuC2COBk3kYT7Jj0+iiBlpJgI0BEUXu0eqiXpRH1xX6RgUQDS3f2jRtnlRYiy/jdNhhcWQAnpKbo1+ZN9Fd1hI7sLtV//Ry5YefX8KrU1Dzh6QUZGTNDqIJB7ytZbWmgqMVh/LxPVHNK4ukl00V9FaBilL393O9I0o4jHYNUaybxWTHpe1bqKaIKPAENID4MzV5ENs0zoJzfBiwdt2psvoOhjuzWWD+DpuEcssVjds04njtGfxJqejOE+d/ice00FyOzcEfdu5nJKNyUhomHIMCgW5ERFtwXza2c1VS5DWyCbYHY13SdWeXf4h/cdV92SU0lLiDq9G4pQ757EGE3A7MeiS7v94XfRSxvknQ7h5gMjzawlHIUagRl2+wkgTn+XcPx0lYxlVdyWTOwRfDiByObFimviimktwiMNBdYKDuZXtExm12maiJb7y1agCknQOVEZU+mxxYzVjfqW/Ut+pSmAbCXWvDIzVtx66PgozhEIFG+Duy7K11d2bESifGUog1iEA+DyZFpbMH1Ri4wOyXK0G5wLxrr9uxCihkZijuBKKknnee6MVHe/cIax0HQbGsJQ6DY1hKHQbGsXFqXUcE9IwsqHgFpRTX5h3x9xgGvYBloAAAA==";

export default function DefaultPlaceholderedImage(
    { src, width, height, className, alt }: { src: string, width?: number, height?: number, className?: string, alt?: string }
  ) {  
    let url = "";

    if (typeof src === "string") {
        url = src;
    } else {
        let builder = urlForImage(src);

        if (builder && width) {
        builder = builder.width(width);
        }

        if (builder && height) {
        builder = builder.height(height);
        }

        url = builder?.url() ?? "";
    }

    return (
      <div>
        <Image
          src={url}
          className={className}
          width={width}
          height={height}
          alt={alt ?? ""}
          blurDataURL={DEFAULT_PLACEHOLDER}
          placeholder="blur" />
      </div>
    );
  }