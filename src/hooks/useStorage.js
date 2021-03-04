function useStorage() {
  /* store initial vendor/customer data locally
  when a user enters the site for the first time */
  const storeInStorage = (data, storageLocation) => {
    if (!localStorage[storageLocation]) {
      localStorage[storageLocation] = JSON.stringify(data);
    }
  };

  const updateStorage = (data, userType) => {
    let testimonials = 'customerTestimonials';
    if (userType === 'VENDOR') {
      testimonials = 'vendorTestimonials';
    }

    let allUserData = JSON.parse(localStorage[testimonials]);
    localStorage[testimonials] = JSON.stringify([...allUserData, data]);
  };

  return { storeInStorage, updateStorage };
}

export default useStorage;
