package utility;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ReadConfig {
   
	Properties prop;
	public ReadConfig() {
		try {
			FileInputStream file = new FileInputStream("./Configuration/config.properties");
			prop = new Properties();
			prop.load(file);
		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
		
	}
	
	public String getProperty(String key) {
		return prop.getProperty(key);
	}
}
