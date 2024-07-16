package com.example.themghsapp;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.SearchView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;


/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ServicesFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ServicesFragment extends Fragment {

    private SearchView serviceSearchView;
    private RecyclerView servicesRecyclerView;

    public ServicesFragment() {
        // Required empty public constructor
    }




    // TODO: Rename and change types and number of parameters
    public static ServicesFragment newInstance(String param1, String param2) {
        ServicesFragment fragment = new ServicesFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);



    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_services, container, false);

        // Access the RecyclerView
        RecyclerView recyclerView = view.findViewById(R.id.services_recylcer);

        // Create a new list of items
        List<ServicesRecyclerItem> items = new ArrayList<ServicesRecyclerItem>();

        // Add items to the list
        items.add(new ServicesRecyclerItem("name", "description", R.drawable.ic_launcher_background));
        items.add(new ServicesRecyclerItem("name", "description", R.drawable.ic_launcher_background));
        items.add(new ServicesRecyclerItem("name", "description", R.drawable.ic_launcher_background));

        // Set the adapter on the RecyclerView
        recyclerView.setLayoutManager(new LinearLayoutManager(this.getContext()));
        recyclerView.setAdapter(new ServicesAdapter(this.getContext(), items));

        // Access the SearchView
        serviceSearchView = view.findViewById(R.id.searchView);
        serviceSearchView.clearFocus();

        serviceSearchView.setOnQueryTextListener( new SearchView.OnQueryTextListener(){

            @Override
            public boolean onQueryTextSubmit(String query) {
                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {

                filterList(newText);

                return true;
            }
        });


        // Inflate the layout for this fragment
        return view;



    }

    private void filterList(String text) {

        List<ServicesRecyclerItem> filterList = new ArrayList<>();

        for (ServicesRecyclerItem item : filterList) {
            if (item.name.toLowerCase().contains(text.toLowerCase())) {
                filterList.add(item);
            }
}
            if (filterList.isEmpty()) {
                Toast.makeText(this.getContext(), "No Match found", Toast.LENGTH_SHORT).show();
            } else {

                

            }
    }

}