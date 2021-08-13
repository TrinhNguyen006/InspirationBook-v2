const MOBILE_DEVICE_REGEXP = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;

export const isMobile = () => MOBILE_DEVICE_REGEXP.test(navigator.userAgent);

export const isDesktop = () => !isMobile();
