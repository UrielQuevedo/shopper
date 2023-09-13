import NavbarSubtotal from "@/components/molecules/NavbarSubtotal";
import Styles from "./_style.module.scss";
import DefaultNavbarButton from "@/components/atoms/DefaultNavbarButton";

interface NavbarButtonProps {
  name: string;
  isLoading: boolean;
  price: number;
  showPrice: boolean;
}

const NavbarButton = ({
  name,
  isLoading,
  price = 3000,
  showPrice = true,
}: NavbarButtonProps) => {
  return (
    <div className={Styles.navbar}>
      <NavbarSubtotal
        isLoading={isLoading}
        price={price}
        showPrice={showPrice}
      />
      <div className={Styles.buttonContainer}>
        <DefaultNavbarButton name={name} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default NavbarButton;
