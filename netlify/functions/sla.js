exports.handler = async (event) => {
    try {
      const { sla, period } = JSON.parse(event.body);
  
      // Vérification des paramètres
      if (!sla || !["yearly", "quarterly", "monthly", "daily"].includes(period)) {
        return {
          statusCode: 400,
          body: JSON.stringify({ status: "error", reason: "bad parameters" }),
        };
      }
  
      // Exemple de traitement selon la période (calcul simplifié)
      let nbHours, nbMinutes, nbSeconds;
      switch (period) {
        case "yearly":
          nbHours = 12; // exemple de valeur
          nbMinutes = 13;
          nbSeconds = 14;
          break;
        case "quarterly":
          nbHours = 10;
          nbMinutes = 20;
          nbSeconds = 30;
          break;
        case "monthly":
          nbHours = 9;
          nbMinutes = 50;
          nbSeconds = 40;
          break;
        case "daily":
          nbHours = 7;
          nbMinutes = 45;
          nbSeconds = 20;
          break;
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: "success",
          data: { nbHours, nbMinutes, nbSeconds },
        }),
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ status: "error", reason: "bad parameters" }),
      };
    }
  };
  