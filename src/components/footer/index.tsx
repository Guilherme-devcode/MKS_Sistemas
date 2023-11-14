const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#EEEEEE",
        padding: "20px",
        width: "100%",
        zIndex: -10,
        position: "absolute",
        bottom: "0",
      }}
    >
      <div className="d-flex justify-content-center">
        <p className="text-center">
          MKS Sistemas © Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
