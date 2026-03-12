import java.util.*;

class City {
    String name;
    boolean visited;

    City(String name) {
        this.name = name;
        this.visited = false;
    }
}

class Note {
    String city;
    String text;

    Note(String city, String text) {
        this.city = city;
        this.text = text;
    }
}

class User {
    String name;
    String email;
    String password;

    ArrayList<City> bucket = new ArrayList<>();
    ArrayList<Note> notes = new ArrayList<>();

    User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

public class TravelPlanner {

    static Scanner sc = new Scanner(System.in);
    static HashMap<String, User> users = new HashMap<>();
    static User currentUser = null;

    // Famous places of Indian states
    static HashMap<String, String[]> famousPlaces = new HashMap<>();

    static {

        famousPlaces.put("Andhra Pradesh", new String[]{"Tirupati Temple","Araku Valley","Visakhapatnam Beach"});
        famousPlaces.put("Arunachal Pradesh", new String[]{"Tawang Monastery","Sela Pass","Ziro Valley"});
        famousPlaces.put("Assam", new String[]{"Kaziranga National Park","Kamakhya Temple","Majuli Island"});
        famousPlaces.put("Bihar", new String[]{"Bodh Gaya","Nalanda University","Rajgir"});
        famousPlaces.put("Chhattisgarh", new String[]{"Chitrakote Falls","Kanger Valley Park","Bastar"});
        famousPlaces.put("Goa", new String[]{"Baga Beach","Dudhsagar Falls","Bom Jesus Basilica"});
        famousPlaces.put("Gujarat", new String[]{"Statue of Unity","Gir National Park","Somnath Temple"});
        famousPlaces.put("Haryana", new String[]{"Kurukshetra","Morni Hills","Sultanpur Sanctuary"});
        famousPlaces.put("Himachal Pradesh", new String[]{"Shimla","Manali","Dharamshala"});
        famousPlaces.put("Jharkhand", new String[]{"Hundru Falls","Betla National Park","Netarhat"});
        famousPlaces.put("Karnataka", new String[]{"Hampi","Mysore Palace","Coorg"});
        famousPlaces.put("Kerala", new String[]{"Munnar","Alleppey Backwaters","Kovalam Beach"});
        famousPlaces.put("Madhya Pradesh", new String[]{"Khajuraho Temples","Sanchi Stupa","Kanha Park"});
        famousPlaces.put("Maharashtra", new String[]{"Gateway of India","Ajanta Caves","Shirdi"});
        famousPlaces.put("Manipur", new String[]{"Loktak Lake","Kangla Fort","Shirui Hills"});
        famousPlaces.put("Meghalaya", new String[]{"Living Root Bridges","Cherrapunji","Umiam Lake"});
        famousPlaces.put("Mizoram", new String[]{"Reiek Peak","Vantawng Falls","Phawngpui Hills"});
        famousPlaces.put("Nagaland", new String[]{"Hornbill Festival","Dzukou Valley","Kohima Cemetery"});
        famousPlaces.put("Odisha", new String[]{"Jagannath Temple","Konark Sun Temple","Chilika Lake"});
        famousPlaces.put("Punjab", new String[]{"Golden Temple","Jallianwala Bagh","Wagah Border"});
        famousPlaces.put("Rajasthan", new String[]{"Hawa Mahal","Jaipur Palace","Thar Desert"});
        famousPlaces.put("Sikkim", new String[]{"Tsomgo Lake","Nathula Pass","Gurudongmar Lake"});
        famousPlaces.put("Tamil Nadu", new String[]{"Meenakshi Temple","Ooty","Rameswaram"});
        famousPlaces.put("Telangana", new String[]{"Charminar","Golconda Fort","Ramoji Film City"});
        famousPlaces.put("Tripura", new String[]{"Ujjayanta Palace","Neermahal","Unakoti"});
        famousPlaces.put("Uttar Pradesh", new String[]{"Taj Mahal","Varanasi Ghats","Fatehpur Sikri"});
        famousPlaces.put("Uttarakhand", new String[]{"Kedarnath","Badrinath","Valley of Flowers"});
        famousPlaces.put("West Bengal", new String[]{"Victoria Memorial","Darjeeling","Sundarbans"});
    }

    public static void main(String[] args) {

        while (true) {

            if (currentUser == null) {
                System.out.println("\n==== TRAVEL BUCKET LIST PLANNER ====");
                System.out.println("1. Register");
                System.out.println("2. Login");
                System.out.println("3. Exit");

                int choice = sc.nextInt();
                sc.nextLine();

                switch (choice) {
                    case 1 -> register();
                    case 2 -> login();
                    case 3 -> System.exit(0);
                }

            } else {
                showMenu();
            }
        }
    }

    static void register() {

        System.out.print("Enter Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Email: ");
        String email = sc.nextLine();

        if (users.containsKey(email)) {
            System.out.println("User already exists.");
            return;
        }

        System.out.print("Enter Password: ");
        String pass = sc.nextLine();

        users.put(email, new User(name, email, pass));

        System.out.println("Registration Successful!");
    }

    static void login() {

        System.out.print("Enter Email: ");
        String email = sc.nextLine();

        System.out.print("Enter Password: ");
        String pass = sc.nextLine();

        User u = users.get(email);

        if (u != null && u.password.equals(pass)) {
            currentUser = u;
            System.out.println("Login Successful. Welcome " + u.name);
        } else {
            System.out.println("Invalid credentials");
        }
    }

    static void showMenu() {

        System.out.println("\n==== MAIN MENU ====");
        System.out.println("1. Add State to Bucket List");
        System.out.println("2. View Bucket List");
        System.out.println("3. Mark State as Visited");
        System.out.println("4. Remove State");
        System.out.println("5. Add Note");
        System.out.println("6. View Notes");
        System.out.println("7. Logout");

        int choice = sc.nextInt();
        sc.nextLine();

        switch (choice) {
            case 1 -> addCity();
            case 2 -> viewCities();
            case 3 -> markVisited();
            case 4 -> removeCity();
            case 5 -> addNote();
            case 6 -> viewNotes();
            case 7 -> currentUser = null;
        }
    }

    static void addCity() {

        System.out.print("Enter State Name: ");
        String city = sc.nextLine();

        currentUser.bucket.add(new City(city));

        System.out.println(city + " added to bucket list.");

        if (famousPlaces.containsKey(city)) {

            System.out.println("Famous Places in " + city + ":");

            for (String place : famousPlaces.get(city)) {
                System.out.println("- " + place);
            }
        }
    }

    static void viewCities() {

        if (currentUser.bucket.isEmpty()) {
            System.out.println("Bucket list empty.");
            return;
        }

        System.out.println("\nYour Bucket List:");

        int i = 1;

        for (City c : currentUser.bucket) {

            String status = c.visited ? "Visited" : "Not Visited";

            System.out.println(i + ". " + c.name + " - " + status);

            if (famousPlaces.containsKey(c.name)) {

                for (String place : famousPlaces.get(c.name)) {
                    System.out.println("   * " + place);
                }
            }

            i++;
        }
    }

    static void markVisited() {

        viewCities();

        System.out.print("Enter number to mark visited: ");
        int index = sc.nextInt() - 1;

        if (index >= 0 && index < currentUser.bucket.size()) {

            currentUser.bucket.get(index).visited = true;

            System.out.println("Marked as visited.");
        }
    }

    static void removeCity() {

        viewCities();

        System.out.print("Enter number to remove: ");
        int index = sc.nextInt() - 1;

        if (index >= 0 && index < currentUser.bucket.size()) {

            currentUser.bucket.remove(index);

            System.out.println("State removed.");
        }
    }

    static void addNote() {

        viewCities();

        System.out.print("Enter state name for note: ");
        String city = sc.nextLine();

        System.out.print("Write your note: ");
        String text = sc.nextLine();

        currentUser.notes.add(new Note(city, text));

        System.out.println("Note saved.");
    }

    static void viewNotes() {

        if (currentUser.notes.isEmpty()) {
            System.out.println("No notes available.");
            return;
        }

        System.out.println("\n==== NOTES ====");

        for (Note n : currentUser.notes) {

            System.out.println("State: " + n.city);
            System.out.println("Note: " + n.text);
            System.out.println("------------------");
        }
    }
}