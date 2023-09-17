export const predictTypeOfGlass = (data: number[]):number => {
    const RI = data[0];
    const Na = data[1];
    const Mg = data[2];
    const Al = data[3];
    const Si = data[4];
    const K = data[5];
    const Ca = data[6];
    const Ba = data[7];
    const Fe = data[8];
  
    if (RI > 1.51767) {
      if (Na > 13.42) {
        if (Mg > 3.445) {
          if (Al > 1.81) {
            if (Si > 72.02) {
              if (K > 0.7) {
                if (Ca > 8.255) {
                  return 1
                } else {
                  return 2
                }
              } else if (Ca > 8.58) {
                return 1
              } else {
                return 3
              }
            } else if (K > 0.74) {
              if (Ca > 8.55) {
                return 1
              } else {
                return 2
              }
            } else if (Ca > 8.945) {
              if (Fe > 0.185) {
                return 3
              } else {
                return 1
              }
            } else {
              return 1
            }
          } else if (Si > 71.78) {
            if (K > 0.135) {
              if (Ca > 9.215) {
                return 1
              } else {
                return 3
              }
            } else if (Ca > 8.965) {
              if (RI > 1.520435) {
                return 3
              } else {
                return 1
              }
            } else {
              return 3
            }
          } else if (K > 0.1) {
            return 1
          } else if (Ca > 9.755) {
            return 1
          } else if (RI > 1.52177) {
            return 1
          } else {
            return 3
          }
        } else if (Al > 1.54) {
          if (Si > 72.375) {
            if (K > 0.705) {
              return 7
            } else if (Ca > 9.29) {
              return 6
            } else if (Ba > 0.82) {
              return 7
            } else {
              return 6
            }
          } else if (K > 0.55) {
            if (Ca > 9.285) {
              return 7
            } else if (Ba > 0.815) {
              return 7
            } else {
              return 3
            }
          } else if (Ca > 10.065) {
            if (Fe > 0.09) {
              return 2
            } else {
              return 5
            }
          } else if (Ba > 0.135) {
            return 2
          } else {
            return 6
          }
        } else if (Si > 72.135) {
          if (K > 0.05) {
            if (Ca > 10.085) {
              return 2
            } else if (RI > 1.520615) {
              return 7
            } else {
              return 1
            }
          } else if (Ca > 11.105) {
            return 6
          } else if (RI > 1.518775) {
            return 6
          } else {
            return 2
          }
        } else if (K > 0.5) {
          if (Ca > 8.85) {
            if (Fe > 0.085) {
              return 2
            } else {
              return 1
            }
          } else if (Ba > 0.84) {
            return 7
          } else {
            return 3
          }
        } else {
          return 2
        }
      } else if (Mg > 3.475) {
        if (Al > 1.235) {
          if (Si > 72.71) {
            if (K > 0.585) {
              return 1
            } else if (Ca > 8.33) {
              return 1
            } else {
              return 2
            }
          } else if (K > 0.565) {
            if (Ca > 8.49) {
              return 2
            } else if (RI > 1.518185) {
              return 2
            } else {
              return 1
            }
          } else {
            return 2
          }
        } else if (Si > 72.39) {
          if (K > 0.605) {
            return 1
          } else {
            return 2
          }
        } else if (K > 0.21) {
          if (Ca > 9.475) {
            return 1
          } else {
            return 2
          }
        } else {
          return 2
        }
      } else if (Al > 1.415) {
        if (Si > 72.775) {
          if (K > 0.525) {
            if (Ca > 10.205) {
              return 5
            } else {
              return 2
            }
          } else {
            return 5
          }
        } else if (K > 0.785) {
          if (Ca > 8.5) {
            return 2
          } else if (RI > 1.518875) {
            return 5
          } else {
            return 2
          }
        } else if (Ca > 10.035) {
          if (Ba > 1.695) {
            return 2
          } else {
            return 5
          }
        } else {
          return 3
        }
      } else if (Si > 72.535) {
        if (K > 0.43) {
          return 1
        } else {
          return 2
        }
      } else if (K > 0.45) {
        return 1
      } else if (Ca > 13.45) {
        return 2
      } else {
        return 5
      }
    } else if (Na > 13.235) {
      if (Mg > 3.365) {
        if (Al > 1.405) {
          if (Si > 72.535) {
            if (K > 0.53) {
              return 2
            } else if (Ca > 7.905) {
              return 2
            } else {
              return 1
            }
          } else {
            return 2
          }
        } else if (Si > 72.8) {
          if (K > 0.565) {
            if (Ca > 8.065) {
              return 2
            } else {
              return 1
            }
          } else if (Ca > 8.005) {
            return 1
          } else {
            return 2
          }
        } else if (K > 0.54) {
          if (Ca > 8.325) {
            if (Fe > 0.05) {
              if (RI > 1.518165) {
                return 3
              } else {
                return 1
              }
            } else {
              return 3
            }
          } else if (Fe > 0.055) {
            return 1
          } else {
            return 3
          }
        } else if (Ca > 8.24) {
          return 3
        } else {
          return 1
        }
      } else if (Al > 2.165) {
        if (Si > 73.255) {
          return 7
        } else if (K > 0.065) {
          if (Ca > 7.525) {
            return 7
          } else {
            return 5
          }
        } else {
          return 7
        }
      } else if (Si > 73.105) {
        if (Ca > 8.38) {
          return 7
        } else {
          if (Ba > 0.855) {
            return 7
          } else {
            return 6
          }
        }
      } else if (K > 0.195) {
        if (Ca > 6.255) {
          return 2
        } else {
          return 7
        }
      } else {
        return 7
      }
    } else if (Mg > 3.515) {
      if (Al > 1.485) {
        if (Si > 72.915) {
          if (K > 0.655) {
            return 2
          } else if (Ca > 8.05) {
            if (Fe > 0.13) {
              return 1
            } else {
              return 2
            }
          } else {
            return 2
          }
        } else if (K > 0.645) {
          return 2
        } else if (Ca > 8.24) {
          return 1
        } else {
          return 2
        }
      } else if (Si > 72.995) {
        return 1
      } else if (K > 0.565) {
        if (Ca > 8.465) {
          if (RI > 1.51715) {
            return 1
          } else {
            return 3
          }
        } else {
          return 1
        }
      } else {
        return 2
      }
    } else if (Al > 1.445) {
      if (Si > 73.13) {
        if (K > 0.7) {
          if (Ca > 9.355) {
            return 5
          } else {
            return 2
          }
        } else if (Ca > 8.165) {
          return 2
        } else if (Fe > 0.165) {
          return 1
        } else {
          return 2
        }
      } else if (K > 0.63) {
        if (Ca > 7.57) {
          return 2
        } else {
          return 5
        }
      } else if (Ca > 8.325) {
        return 3
      } else {
        return 2
      }
    } else if (Si > 73.235) {
      if (K > 0.61) {
        if (Ca > 8.475) {
          if (Fe > 0.12) {
            return 2
          } else {
            return 7
          }
        } else {
          return 1
        }
      } else if (Ca > 8.67) {
        if (Ba > 0.055) {
          return 2
        } else {
          return 1
        }
      } else {
        return 1
      }
    } else if (K > 0.585) {
      if (Ca > 8.29) {
        return 1
      } else {
        return 2
      }
    } else if (Ca > 8.505) {
      if (Fe > 0.12) {
        return 2
      } else {
        return 3
      }
    } else {
      return 1
    }
  };